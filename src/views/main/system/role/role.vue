<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <PageContent :ContentConfig="ContentConfig" pageName="role"></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { ContentConfig } from './config/content.config'
export default defineComponent({
  name: 'role',
  components: { PageContent, pageSearch },
  setup() {
    return { searchFormConfig, ContentConfig }
  }
})
</script>

<style lang="less" scoped></style>
