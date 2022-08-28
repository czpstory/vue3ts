<template>
  <div class="table">
    <cz-table :listData="usersList" v-bind="ContentConfig">
      <!-- 顶部插槽 -->
      <template #headerHandler>
        <el-button type="primary">新增用户</el-button>
      </template>

      <!-- 列表插槽 -->
      <template #status="scope">
        <el-button plain :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <el-button size="small" type="primary"> 编辑 </el-button>
        <el-button size="small" type="danger"> 修改 </el-button>
      </template>
    </cz-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import czTable from '@/base-ui/table'
export default defineComponent({
  props: {
    ContentConfig: {
      type: Object
    },
    usersList: {
      type: Object
    }
  },
  components: {
    czTable
  },
  setup() {
    const store = useStore()

    const usersList = computed(() => store.state.system.usersList)

    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      queryInfo: { offset: 0, size: 100 }
    })

    return { usersList }
  }
})
</script>

<style lang="less" scoped>
.table {
  padding: 0 10px;
}
</style>
