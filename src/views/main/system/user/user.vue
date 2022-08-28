<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="table">
      <cztable :listData="usersList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
      </cztable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import pageSearch from '@/components/page-search'
import cztable from '@/base-ui/table'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    cztable
  },
  setup() {
    const store = useStore()
    const usersList = computed(() => store.state.system.usersList)
    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      queryInfo: { offset: 0, size: 100 }
    })
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '100',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '100',
        slotName: 'updateAt'
      }
    ]
    return { searchFormConfig, usersList, propList }
  }
})
</script>

<style lang="less" scoped>
.table {
  padding: 0 10px;
}
</style>
