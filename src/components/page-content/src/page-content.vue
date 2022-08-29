<template>
  <div class="table">
    <cz-table
      :listData="dataList"
      :listCount="totalCount"
      v-bind="ContentConfig"
      v-model:page="pageInfo"
    >
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
      <template #handler>
        <el-button size="small" type="primary"> 编辑 </el-button>
        <el-button size="small" type="danger"> 修改 </el-button>
      </template>

      <!-- page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </cz-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import czTable from '@/base-ui/table'
export default defineComponent({
  props: {
    ContentConfig: {
      type: Object
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    czTable
  },
  setup(props) {
    const store = useStore()

    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const totalCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    const usersList = computed(() => store.state.system.usersList)

    //双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 获取其它动态插槽名称
    const otherPropSlots = props.ContentConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    return {
      usersList,
      totalCount,
      dataList,
      getPageData,
      pageInfo,
      otherPropSlots
    }
  }
})
</script>

<style lang="less" scoped>
.table {
  padding: 0 10px;
}
</style>
