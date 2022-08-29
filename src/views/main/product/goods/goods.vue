<template>
  <div class="goods">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent :ContentConfig="ContentConfig" pageName="goods">
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { ContentConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'goods',
  components: { PageContent, PageSearch },
  setup() {
    return { ContentConfig, PageSearch, searchFormConfig }
  }
})
</script>

<style scoped></style>
