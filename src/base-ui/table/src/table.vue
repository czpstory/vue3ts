<template>
  <div class="content">
    <div class="header">
      <slot name="header">
        <div class="">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table border :data="listData" @selection-change="Selectionchange">
      <el-table-column
        v-if="showSelectColum"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColum"
        label="序号"
        type="index"
        width="60"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Object,
      required: true
    },
    propList: {
      type: Object,
      required: true
    },
    showIndexColum: {
      type: Boolean,
      default: false
    },
    showSelectColum: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  setup() {
    const Selectionchange = (value: any) => {
      console.log(value)
    }
    return { Selectionchange }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  justify-items: center;
  padding-top: 20px;
}
</style>
