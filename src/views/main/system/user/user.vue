<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <page-content :ContentConfig="ContentConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { ContentConfig } from './config/content.config'
export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      ContentConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
