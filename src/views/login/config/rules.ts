export const rules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: '密码必须是5个字母或者数字以上~',
      trigger: 'blur'
    }
  ],
  //登录验证
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^[1-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  phoneRegister: [
    { required: true, message: '请输入短信验证', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: '验证码必须是5个字母或者数字以上~',
      trigger: 'blur'
    }
  ]
}
