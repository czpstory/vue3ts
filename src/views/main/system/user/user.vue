<template>
  <div class="user">
    <Hyform v-bind="searchFormConfig"></Hyform>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hyform from '@/base-ui/form/src/form.vue'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    Hyform
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
