import { Register } from 'src/types/auth'

export const useAuthForm = () => {
  const formData = useState<Register>('authForm', () => ({
    username: '',
    phone: '',
    email: '',
    password: '',
    fullName: '',
    dateOfBirth: 0,
    gender: '',
  }))

  const resetFormData = () => {
    formData.value = {
      username: '',
      phone: '',
      email: '',
      password: '',
      fullName: '',
      dateOfBirth: 0,
      gender: '',
    }
  }

  return { formData, resetFormData }
}
