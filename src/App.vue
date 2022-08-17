<template>
  <home></home>
  <el-button>按钮</el-button>
  <router-view />
</template>
<script>
import home from '@/components/home'
export default {
  components: {
    home
  }
}
</script>
<style lang="less"></style>
