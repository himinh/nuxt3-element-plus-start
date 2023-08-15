import { FormRules } from 'element-plus'
import { Login, Register, ResetPassword } from '~/types/auth'

export const loginRules = reactive<FormRules<Login>>({
  email: [
    {
      required: true,
      message: 'Phone/email/username is required!',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 2,
      max: 50,
      message: 'Phone/email/username must be at least 2 characters',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      // required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 6,
      max: 50,
      message: 'Password must be at least 6 characters',
      trigger: ['blur', 'change'],
    },
  ],
})

export const registerRules = reactive<FormRules<Register>>({
  username: [
    {
      required: true,
      message: 'Username is required!',
      trigger: 'blur',
    },
    {
      min: 5,
      message: 'Username must be at least 5 characters',
      trigger: ['blur', 'change'],
    },
  ],
  phone: [
    {
      required: true,
      message: 'Phone is required!',
      trigger: 'blur',
    },
    {
      min: 10,
      message: 'Phone must be 10 numbers',
      trigger: ['blur', 'change'],
    },
  ],
  fullName: [
    {
      required: true,
      message: 'Full name is required!',
      trigger: 'blur',
    },
    {
      min: 2,
      message: 'Full name must be at least 2 characters',
      trigger: ['blur', 'change'],
    },
  ],
  email: [
    {
      required: true,
      message: 'Email is required!',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Invalid email format',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Password is required!',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 6,
      max: 50,
      trigger: ['blur', 'change'],
      message: 'Password must be at least 6 characters',
    },
  ],
  dateOfBirth: [
    {
      required: true,
      message: 'Date of birth is required!',
      trigger: ['blur', 'change'],
    },
  ],
  gender: [
    {
      required: true,
      message: 'Gender is required!',
      trigger: 'change',
    },
  ],
})
