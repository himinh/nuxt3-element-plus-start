import { FormRules } from 'element-plus'
import { Login, Register } from '~/types/auth'

export const loginRules = reactive<FormRules<Login>>({
  email: [
    {
      required: true,
      message: 'Please input email address',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 2,
      max: 50,
      message: 'Please input phone/email/username',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 6,
      max: 50,
      message: 'Password must be between 6 and 50 characters',
      trigger: ['blur', 'change'],
    },
  ],
})

export const registerRules = reactive<FormRules<Register>>({
  username: [
    {
      required: true,
      message: 'Please input username',
      trigger: 'blur',
    },
    {
      min: 4,
      message: 'Please input correct username',
      trigger: ['blur', 'change'],
    },
  ],
  phone: [
    {
      required: true,
      message: 'Please input your phone',
      trigger: 'blur',
    },
    {
      min: 10,
      message: 'Please input correct phone',
      trigger: ['blur', 'change'],
    },
  ],
  fullName: [
    {
      required: true,
      message: 'Please input your name',
      trigger: 'blur',
    },
    {
      min: 2,
      message: 'Please input correct name',
      trigger: ['blur', 'change'],
    },
  ],
  email: [
    {
      required: true,
      message: 'Please input email address',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 6,
      max: 50,
      trigger: ['blur', 'change'],
    },
  ],
  dateOfBirth: [
    {
      required: true,
      message: 'Please input date of birth',
      trigger: ['blur', 'change'],
    },
  ],
  gender: [
    {
      required: true,
      message: 'Please select gender',
      trigger: 'change',
    },
  ],
})
