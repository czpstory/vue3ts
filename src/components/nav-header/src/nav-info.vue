<template>
  <div class="nav-info">
    <div class="navleft">
      <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    </div>
    <div class="navright">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span>coderwhy</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item divided>个人信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import breadcrumb from '@/base-ui/breadcrumb/src/breadcrumb.vue'
import { pathMapBreadcrumbs } from '@/utils/map-menu'
export default defineComponent({
  components: {
    breadcrumb
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.loginStore.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { breadcrumbs }
  }
})
</script>

<style lang="less" scoped>
.nav-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
