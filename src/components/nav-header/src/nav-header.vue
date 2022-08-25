<template>
  <div class="nav-header">
    <el-icon class="isize" @click="isHandleIcon">
      <Fold v-if="isShowIcon" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
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
.isize {
  font-size: 30px;
  cursor: pointer;
}
</style>
