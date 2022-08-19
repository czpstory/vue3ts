<template>
  <div class="login-phone">
    <el-form
      label-width="60px"
      :rules="rules"
      :model="accountPhone"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountPhone.phone"></el-input>
      </el-form-item>
      <div class="item-control">
        <el-form-item label="密码" prop="password">
          <el-input v-model="accountPhone.phoneRegister"></el-input>
        </el-form-item>
        <el-button type="primary" class="get-num">获取验证码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/rules'
export default defineComponent({
  setup() {
    const accountPhone = reactive({
      phone: '',
      phoneRegister: ''
    })
    const loginPhone = () => {
      console.log('手机登录')
    }
    return {
      accountPhone,
      rules,
      loginPhone
    }
  }
})
</script>

<style lang="less" scoped>
.item-control {
  display: flex;
  .get-num {
    margin-left: 20px;
  }
}
</style>
