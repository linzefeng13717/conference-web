<template>
  <page-base title="Accepted Papers">
    <div class="papers-container"> 
      <div class="papers-header">
        <h2>Accepted Papers</h2>
        <h3>
          Improving Ocean Data Services with Semantics and Quick Index
        </h3>
        <p>
          Xiao-Li Ren, Kai-Jun Ren (National University of Defense Technology), Zi-Chen Xu (Nanchang University), Xiao-Yong Li, Ao-Long Zhou, Jun-Qiang Song, Ke-Feng Deng (National University of Defense Technology)
        </p>
        <h3>
          SOOP: Efficient Distributed Graph Computation Supporting Second-Order Random Walks
        </h3>
        <p>
          Songjie Niu ( Institute of Computing Technology, Chinese Academy of Sciences and University of Chinese Academy of Sciences), Dongyan Zhou (Bytedance Technology)
        </p>
        <h3>
          Robustness Assessment of Asynchronous Advantage Actor-Critic Based on Dynamic Skewness and Sparseness Computation: A Parallel Computing View
        </h3>
        <p>
          Tong Chen, Ji-Qiang Liu, He Li, Shuo-Ru Wang, Wen-Jia Niu, En-Dong Tong (Beijing Jiaotong University), Liang Chang (Guilin University of Electronic Technology), Qi Alfred Chen ( University of California, Irvine), Gang Li (Deakin University)
        </p>
      </div>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const searchQuery = ref('')
const dialogVisible = ref(false)
const selectedPaper = ref(null)

const sessions = ref([
  {
    title: 'Improving Ocean Data Services with Semantics and Quick Index',
    text: 'Xiao-Li Ren, Kai-Jun Ren (National University of Defense Technology), Zi-Chen Xu (Nanchang University), Xiao-Yong Li, Ao-Long Zhou, Jun-Qiang Song, Ke-Feng Deng (National University of Defense Technology)'
  },
  {
    title: 'SOOP: Efficient Distributed Graph Computation Supporting Second-Order Random Walks',
    text: 'Songjie Niu ( Institute of Computing Technology, Chinese Academy of Sciences and University of Chinese Academy of Sciences), Dongyan Zhou (Bytedance Technology)'
  },
  {
    title: 'Robustness Assessment of Asynchronous Advantage Actor-Critic Based on Dynamic Skewness and Sparseness Computation: A Parallel Computing View',
    text: 'Tong Chen, Ji-Qiang Liu, He Li, Shuo-Ru Wang, Wen-Jia Niu, En-Dong Tong (Beijing Jiaotong University), Liang Chang (Guilin University of Electronic Technology), Qi Alfred Chen ( University of California, Irvine), Gang Li (Deakin University)'
  }
])

const showAbstract = (paper) => {
  selectedPaper.value = paper
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>

.papers-container {
  .papers-header {
    margin-bottom: 40px;
    text-align: left;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }

    .search-input {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  .papers-list {
    .session-title {
      font-size: 1.3rem;
      color: #2c3e50;
    }

    .paper-items {
      padding: 20px;
      font-size: 20px;
      .paper-item {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }

        h4 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .authors {
          color: #666;
          margin-bottom: 5px;
        }

        .affiliation {
          color: #999;
          font-style: italic;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style> 