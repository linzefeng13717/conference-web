<template>
    <PageBase title="Sponsor">
        <div class="sponsor_container">
            <h2>
                Diamond Sponsor
            </h2>
            <el-divider />
            <h2>
                Platinum Sponsor
            </h2>
            <el-divider />
            <h2>
                Gold Sponsor
            </h2>
            <el-divider />
            <h2>
                Silver Sponsor
            </h2>
        </div>
    </PageBase>
</template>
  
<script setup>
import PageBase from '@/components/PageBase.vue'
import { ElDivider } from 'element-plus';
</script> 

<style scoped>
.sponsor_container {
    justify-items: center;
}
</style>