<template>
    <PageBase title="Sponsor">
        <div class="sponsor_container">
            <div class="sponsor_section">
                <h2>
                    Diamond Sponsor
                </h2>
                <img :src="images.diamond" alt="Diamond Sponsor" />
            </div>
            <el-divider />
            <div class="sponsor_section">
                <h2>
                    Platinum Sponsor
                </h2>
            </div>
            <el-divider />
            <div class="sponsor_section">
                <h2>
                    Gold Sponsor
                </h2>
                <img :src="images.gold" alt="Gold Sponsor" />
            </div>
            <el-divider />
            <div class="sponsor_section">
                <h2>
                    Silver Sponsor
                </h2>
                <img :src="images.silver" alt="Silver Sponsor" />
            </div>
            <el-divider />
            <div class="sponsor_section">
                <h2>
                    Academic Sponsors
                </h2>
                <img :src="images.academic_1" alt="Academic Sponsor 1" />
                <img :src="images.academic_2" alt="Academic Sponsor 2" />
                <img :src="images.academic_3" alt="Academic Sponsor 3" />
            </div>
        </div>
    </PageBase>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ElDivider } from 'element-plus';

const images = {
    diamond: new URL('/public/images/logo/diamond.png', import.meta.url).href,
    gold: new URL('/public/images/logo/gold.jpg', import.meta.url).href,
    silver: new URL('/public/images/logo/silver.png', import.meta.url).href,
    academic_1: new URL('/public/images/logo/academic_1.jpg', import.meta.url).href,
    academic_2: new URL('/public/images/logo/academic_2.png', import.meta.url).href,
    academic_3: new URL('/public/images/logo/academic_3.jpg', import.meta.url).href,
}

</script>

<style scoped>
.sponsor_container {
    justify-items: center;
    padding: 20px;
}

.sponsor_section {
    text-align: center;
    margin: 20px 0;
}

.sponsor_section img {
    max-width: 300px;
    height: auto;
    margin: 10px;
    object-fit: contain;
}

.sponsor_section h2 {
    margin-bottom: 20px;
    color: #333;
}
</style>