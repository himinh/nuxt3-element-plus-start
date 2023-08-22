import { initializeApp } from 'firebase/app'
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from 'firebase/auth'
import { LoginWithSocial } from '~/types'
import { AccountType } from '~/utils/enums/accountType'
import { Gender } from '~/utils/enums/gender'

export const useFirebase = () => {
  const config = useRuntimeConfig()
  const { loginWithSocial } = useAuthStore()

  const app = initializeApp(config.public.firebaseConfig)

  const auth = getAuth()

  /**
   * Facebook login
   */
  const facebookLogin = async () => {
    const provider = new FacebookAuthProvider()

    const userCredential = await signInWithPopup(auth, provider)
  }

  /**
   * Google login
   */
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider()

    const { user } = await signInWithPopup(auth, provider)

    const userItem: LoginWithSocial = {
      socialID: user.uid,
      fullName: user.displayName,
      accountType: AccountType.GOOGLE,
      email: user.email,
      avatar: user.photoURL,
      dateOfBirth: null,
      gender: Gender.OTHER,
      deviceID: null,
    }

    await loginWithSocial(userItem)
  }

  /**
   * Firebase logout
   */
  const firebaseLogout = async () => {
    await signOut(auth)
  }

  return { app, facebookLogin, googleLogin, firebaseLogout }
}
