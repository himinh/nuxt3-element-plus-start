<script setup lang="ts">
enum EVENTS {
  setup = 'SET_UP',
  connected = 'CONNECTED',
  joinChat = 'JOIN_CHAT',
  newMessage = 'NEW_MESSAGE',
  messageReceived = 'MESSAGE_RECEIVED',
  typing = 'TYPING',
  stopTyping = 'STOP_TYPING',
  renameChat = 'RENAME_CHAT',
  notificationReceived = 'NOTIFICATION_RECEIVED',
  error = 'ERROR',
  joinCallVideo = 'JOIN_CALL_VIDEO',
  leaveCallVideo = 'LEAVE_CALL_VIDEO',
  offerCallVideo = 'OFFER_CALL_VIDEO',
  answerCallVideo = 'ANSWER_CALL_VIDEO',
  iceCandidate = 'ICE_CANDIDATE',
  messageVideo = 'MESSAGE_VIDEO',
}

const route = useRoute()
interface IParams {
  _id: string
}

const { _id } = route.params as IParams

const { socket } = useSocket()

const localStream = ref()
const localVideo = ref()
const peerConnection = ref()
const remoteVideo = ref()
const remoteStream = ref()

const getUserMedia = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
    localStream.value = stream
    localVideo.value.srcObject = stream
  } catch (error) {
    // console.error('Error accessing media devices', error)
  }
}

const roomId = 1
const setupSocketEvents = () => {
  socket.on('connect', () => {
    // console.log('Connected to server')
    socket.emit(EVENTS.joinCallVideo, roomId)
  })

  socket.on(EVENTS.offerCallVideo, (offer: any) => {
    handleOffer(offer)
  })
  socket.on(EVENTS.answerCallVideo, (answer: any) => {
    handleAnswer(answer)
  })
  socket.on(EVENTS.iceCandidate, (candidate: any) => {
    handleIceCandidate(candidate)
  })
}

const startCall = () => {
  createPeerConnection()
  localStream.value.getTracks().forEach((track: any) => {
    peerConnection.value.addTrack(track, localStream)
  })
}

const endCall = () => {
  if (peerConnection) {
    peerConnection.value.close()
    peerConnection.value = null
    remoteVideo.value.srcObject = null
    localStream.value.getTracks().forEach((track: any) => track.stop())
    localStream.value = null
  }
}

const createPeerConnection = () => {
  peerConnection.value = new RTCPeerConnection()

  peerConnection.value.onnegotiationneeded = () => {
    handleNegotiationNeeded()
  }

  peerConnection.value.ontrack = (event: any) => {
    handleTrack(event)
  }

  peerConnection.value.onicecandidate = (event: any) => {
    if (event.candidate) {
      socket.emit(EVENTS.iceCandidate, {
        roomId,
        candidate: event.candidate,
      })
    }
  }
}

const handleNegotiationNeeded = async () => {
  try {
    const offer = await peerConnection.value.createOffer()
    await peerConnection.value.setLocalDescription(offer)
    socket.emit(EVENTS.offerCallVideo, {
      roomId,
      offer,
    })
  } catch (error) {
    // console.error('Error creating offer', error)
  }
}

const handleOffer = async (offer: any) => {
  try {
    await peerConnection.value.setRemoteDescription(offer)
    const answer = await peerConnection.value.createAnswer()
    await peerConnection.value.setLocalDescription(answer)
    socket.emit(EVENTS.answerCallVideo, {
      roomId,
      answer,
    })
  } catch (error) {
    // console.error('Error handling offer', error)
  }
}

const handleAnswer = async (answer: any) => {
  try {
    await peerConnection.value.setRemoteDescription(answer)
  } catch (error) {
    // console.error('Error handling answer', error)
  }
}

const handleIceCandidate = (candidate: any) => {
  try {
    peerConnection.value.addIceCandidate(candidate)
  } catch (error) {
    // console.error('Error handling ICE candidate', error)
  }
}

const handleTrack = (event: any) => {
  remoteStream.value = event.streams[0]
  remoteVideo.value.srcObject = remoteStream.value
}

onMounted(() => {
  getUserMedia()
  setupSocketEvents()
})
</script>

<template>
  <div>
    <video ref="localVideo" autoplay></video>
    <video ref="remoteVideo" autoplay></video>
    <button @click="startCall">Start Call</button>
    <button @click="endCall">End Call</button>
  </div>
</template>

<style lang="scss" scoped></style>
