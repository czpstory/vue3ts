<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Ibreadcrumb } from '../types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<Ibreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
