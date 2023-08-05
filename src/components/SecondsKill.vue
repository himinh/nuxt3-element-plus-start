<script setup lang="ts">
interface IProps {
  endTime: string | number
}

interface IEmits {
  (e: 'start'): void
  (e: 'end'): void
}

const props = defineProps<IProps>()

const emit = defineEmits<IEmits>()

const formatTime = (endTime: number) => {
  const time = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (endTime > 0) {
    time.days = Math.floor(endTime / (60 * 60 * 24))
    time.hours = Math.floor(endTime / (60 * 60)) - time.days * 24
    time.minutes =
      Math.floor(endTime / 60) - time.days * 24 * 60 - time.hours * 60
    time.seconds =
      Math.floor(endTime) -
      time.days * 24 * 60 * 60 -
      time.hours * 60 * 60 -
      time.minutes * 60
  }

  time.days = time.days < 10 ? 0 + time.days : time.days
  time.hours = time.minutes =
    time.minutes < 10 ? 0 + time.minutes : time.minutes
  time.seconds = time.seconds < 10 ? 0 + time.seconds : time.seconds

  return time
}

const useSecondsKill = () => {
  let endTime = props.endTime

  const timeOut = ref(0)
  const timer = ref<NodeJS.Timer | null>(null)

  if (typeof endTime === 'string') {
    endTime = new Date(endTime).getTime()
  }

  timeOut.value = (endTime - Date.now()) / 1000

  // if (timeOut.value <= 0) return emit('end')

  const closeTimer = () => {
    if (timer.value) clearInterval(timer.value)
  }

  closeTimer()

  timer.value = setInterval(() => {
    timeOut.value--

    if (timeOut.value <= 0) {
      closeTimer()
      emit('end')
    }
  }, 1000)

  const d = computed(() => formatTime(timeOut.value))

  return d
}

const data = useSecondsKill()
</script>

<template>
  <div class="count-down">
    <span>{{ data.days }}</span> days <span>{{ data.hours }}</span> :
    <span>{{ data.minutes }}</span> :
    <span>{{ data.seconds }}</span>
  </div>
</template>

<style lang="scss">
.count-down span {
  background-color: #fff;
  border-radius: 2px;
  padding: 2px;
  margin-block: 3px;
  @apply text-rose-500;
}
</style>
