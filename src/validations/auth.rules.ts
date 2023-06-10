import { FormRules } from 'element-plus'

export const loginRules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: 'Please input email',
      trigger: 'blur',
    },
    {
      min: 1,
      // type: 'email',
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
      // min: 6,
      min: 1,
      max: 30,
      message: 'Length should be 6 to 30',
      trigger: ['blur', 'change'],
    },
  ],
})
