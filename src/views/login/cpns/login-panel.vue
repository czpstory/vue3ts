<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox label="记住密码" v-model="iskeepPassword"></el-checkbox>
      <el-link type="primary" size="large" :underline="false">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-imt" @click="login"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const iskeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref('account')
    const store = useStore()
    const login = () => {
      //根据currentTan判断是账号登录还是手机登录
      if (currentTab.value === 'account') {
        accountRef.value?.loginAccount(iskeepPassword.value)
      } else {
        phoneRef.value?.loginPhone()
      }
    }
    return {
      iskeepPassword,
      accountRef,
      phoneRef,
      login,
      currentTab
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-bottom: 160px;
  width: 360px;
  text-align: center;
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .login-imt {
    width: 100%;
    height: 40px;
  }
}

.demo-tabs > .el-tabs__content {
  padding: 40px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
  margin-bottom: 5px;
}
</style>
