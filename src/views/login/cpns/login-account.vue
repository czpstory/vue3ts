<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/rules'
import czCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const account = reactive({
      name: czCache.getCache('name') ?? '',
      password: czCache.getCache('password') ?? ''
    })

    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAccount = (iskeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (iskeepPassword) {
            czCache.setCache('name', account.name)
            czCache.setCache('password', account.password)
          } else {
            czCache.deleteCache('name')
            czCache.deleteCache('password')
          }
          store.dispatch('loginStore/loginAction', { ...account })
        }
      })
    }
    return {
      rules,
      account,
      formRef,
      loginAccount
    }
  }
})
</script>

<style scoped></style>
