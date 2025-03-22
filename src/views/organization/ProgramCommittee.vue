<template>
  <page-base title="Program Committee">
    <div class="committee-container">
      <div class="committee-list">
        <el-table :data="committeeMembers" style="width: 100%">
          <el-table-column prop="name" label="Name" width="300"/>
          <el-table-column prop="affiliation" label="Affiliation"/>
        </el-table>
      </div>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const committeeMembers = ref([
  { name: "TBD", affiliation: "TBD" },
  { name: "TBD", affiliation: "TBD" },
  { name: "TBD", affiliation: "TBD" },
  { name: "TBD", affiliation: "TBD" },
  { name: "TBD", affiliation: "TBD" },
  // 添加更多委员会成员...
])
</script>

<style lang="scss" scoped>
.committee-container {
  .committee-list {
    max-width: 1000px;
    margin: 0 auto;
    
    :deep(.el-table) {
      --el-table-header-bg-color: #2c3e50;
      --el-table-header-text-color: #fff;
      
      th {
        font-weight: bold;
      }
      
      tr:hover > td {
        background-color: #f5f7fa;
      }
    }
  }
}
</style> 