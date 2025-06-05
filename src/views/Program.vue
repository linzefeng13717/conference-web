<template>
  <PageBase title="Program">
    <div class="program-container">
      <h1 class="program-title">APPT 2025 Tentative Schedule</h1>
      <el-image 
        :src="'/images/Program.png'"
        class="program-image"
      />
    </div>
  </PageBase>
</template>
  
<script setup>
import { ElImage } from 'element-plus'
import PageBase from '@/components/PageBase.vue'
</script> 

<style scoped>
.program-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.program-title {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.program-image {
  max-width: 100%;
  height: auto;
}
</style>