<template>
  <page-base title="Program Committee">
    <div class="committee-container">
      <div class="section">
        <h2>Program Committee</h2>
        <div class="committee-list">
          <el-table :data="programCommittee" style="width: 100%">
            <el-table-column prop="name" label="Name" width="300"/>
            <el-table-column prop="affiliation" label="Affiliation"/>
          </el-table>
        </div>
      </div>

      <div class="section">
        <h2>External Review Committee</h2>
        <div class="committee-list">
          <el-table :data="externalReviewCommittee" style="width: 100%">
            <el-table-column prop="name" label="Name" width="300"/>
            <el-table-column prop="affiliation" label="Affiliation"/>
          </el-table>
        </div>
      </div>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const programCommittee = ref([
  { name: "Abdullah Muzahid", affiliation: "Texas A&M University" },
  { name: "Ahmed Louri", affiliation: "George Washington University" },
  { name: "Amro Awad", affiliation: "University of Oxford" },
  { name: "Bahar Asgari", affiliation: "University of Maryland" },
  { name: "Bei Yu", affiliation: "The Chinese University of Hong Kong" },
  { name: "Changhee Jung", affiliation: "Purdue University" },
  { name: "Cheng Li", affiliation: "University of Science and Technology of China" },
  { name: "Cong Hao", affiliation: "Georgia Tech" },
  { name: "Dong Dai", affiliation: "University of Delaware" },
  { name: "Haiyu Mao", affiliation: "King's College London" },
  { name: "Huiyang Zhou", affiliation: "NC State University" },
  { name: "Hung-Wei Tseng", affiliation: "University of California, Riverside" },
  { name: "Jidong Zhai", affiliation: "Tsinghua University" },
  { name: "Jung Ho Ahn", affiliation: "Seoul National University" },
  { name: "Marc Casas", affiliation: "Barcelona Supercomputing Center" },
  { name: "Mingzhe Zhang", affiliation: "Ant Group" },
  { name: "Nan Guan", affiliation: "City University of Hong Kong" },
  { name: "Osman S. Unsal", affiliation: "Barcelona Supercomputing Center" },
  { name: "Peng Lu", affiliation: "Tulane University" },
  { name: "Raikumar Buyya", affiliation: "The University of Melbourne" },
  { name: "Rui Hou", affiliation: "IIE/CAS" },
  { name: "Shadi Ibrahim", affiliation: "INRIA" },
  { name: "Shuang Chen", affiliation: "Huawei" },
  { name: "Trevor E. Carlson", affiliation: "National University of Singapore" },
  { name: "Xiaochen Guo", affiliation: "Samsung" },
  { name: "Xiaoyao Liang", affiliation: "Shanghai Jiao Tong University" },
  { name: "Xin Fu", affiliation: "Huston University" },
  { name: "Yu Hua", affiliation: "Huazhong University of Science and Technology" },
  { name: "Yun Liang", affiliation: "Peking University" },
  { name: "Yufei Ding", affiliation: "UCSD" },
  { name: "Yungang Bao", affiliation: "ICT/CAS" }
])

const externalReviewCommittee = ref([
  { name: "Chao Li", affiliation: "Shanghai Jiao Tong University" },
  { name: "Chenxi Wang", affiliation: "ICT/CAS" },
  { name: "Guangyu Sun", affiliation: "Peking University" },
  { name: "Hailong Yang", affiliation: "Beihang University" },
  { name: "Hao Zheng", affiliation: "University of Central Florida" },
  { name: "Huiming Cui", affiliation: "ICT/CAS" },
  { name: "Jie Zhang", affiliation: "Peking University" },
  { name: "Jieming Yin", affiliation: "Nanjing University of Posts and Telecommunications" },
  { name: "Jingweng Leng", affiliation: "Shanghai Jiao Tong University" },
  { name: "Lei Jiang", affiliation: "Indiana University Bloomington" },
  { name: "Lei Liu", affiliation: "Beihang University" },
  { name: "Lide Duan", affiliation: "Samsung" },
  { name: "Mingyu Gao", affiliation: "Tsinghua University" },
  { name: "Rong Chen", affiliation: "Shanghai Jiao Tong University" },
  { name: "Shigang Li", affiliation: "Beijing University of Posts and Telecommunications" },
  { name: "Shouyi Yin", affiliation: "Tsinghua University" },
  { name: "Xiaoyi Lu", affiliation: "UC Merced" },
  { name: "Yang Hu", affiliation: "Tsinghua University" },
  { name: "Youyou Lu", affiliation: "Tsinghua University" },
  { name: "Yubin Xia", affiliation: "Shanghai Jiao Tong University" },
  { name: "Zidong Du", affiliation: "ICT/CAS" }
])
</script>

<style lang="scss" scoped>
.committee-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  .section {
    margin-bottom: 3rem;

    h2 {
      color: #2c3e50;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }
  }

  .committee-list {
    margin-bottom: 2rem;
    
    :deep(.el-table) {
      --el-table-header-bg-color: #2c3e50;
      --el-table-header-text-color: #fff;
      
      th {
        font-weight: bold;
        text-align: center;
      }
      
      td {
        text-align: center;
      }
      
      tr:hover > td {
        background-color: #f5f7fa;
      }
    }
  }
}
</style> 