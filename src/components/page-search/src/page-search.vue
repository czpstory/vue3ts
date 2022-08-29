<template>
  <div class="page-search">
    <Hyform v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="foot-search">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleSerchClick">搜索</el-button>
        </div>
      </template>
    </Hyform>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Hyform from '@/base-ui/form/src/form.vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    Hyform
  },

  setup(props, { emit }) {
    //  双向绑定的属性应该是由配置文件field来决定的
    // 1.优化一
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 优化二 当用户点击重置按钮
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    // 优化三 当用户点击搜索按钮
    const handleSerchClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleSerchClick }
  }
})
</script>

<style lang="less" scoped>
.foot-search {
  text-align: right;
  padding: 0 30px 10px 0;
}
</style>
