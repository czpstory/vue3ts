<template>
  <div class="user">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleSerchClick"
    ></pageSearch>
    <page-content
      :ContentConfig="ContentConfig"
      pageName="users"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import pageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { ContentConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'users',
  components: {
    pageSearch,
    PageContent
  },
  setup() {
    // const pageContentRef = ref<InstanceType<typeof PageContent>>()
    // const handleResetClick = () => {
    //   pageContentRef.value?.getPageData()
    // }
    // const handleSerchClick = (queryInfo: any) => {
    //   pageContentRef.value?.getPageData(queryInfo)
    // }
    const [pageContentRef, handleResetClick, handleSerchClick] = usePageSearch()
    return {
      searchFormConfig,
      ContentConfig,
      pageContentRef,
      handleResetClick,
      handleSerchClick
    }
  }
})
</script>

<style lang="less" scoped></style>
