<template>
  <div class="nav-header">
    <el-icon class="isize" @click="isHandleIcon">
      <Fold v-if="isShowIcon" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <navinfo></navinfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import navinfo from './nav-info.vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    navinfo
  },
  setup(props, { emit }) {
    const isShowIcon = ref(true)
    const isHandleIcon = () => {
      isShowIcon.value = !isShowIcon.value
      emit('foldChange', isShowIcon.value)
    }
    return {
      isShowIcon,
      isHandleIcon
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .content {
    margin-left: 10px;
    width: 100%;
    cursor: pointer;
  }
}
.isize {
  font-size: 30px;
  cursor: pointer;
}
</style>
