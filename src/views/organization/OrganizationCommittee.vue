<template>
  <page-base title="Organization Committee">
    <div class="committee-container">
      <div v-for="(section, index) in committees" 
           :key="index" 
           class="committee-section">
        <h2>{{ section.title }}</h2>
        <div class="members">
          <el-card v-for="(member, mIndex) in section.members" 
                   :key="mIndex"
                   class="member-card">
            <div class="member-info">
              <div class="avatar">
                <el-avatar :size="80" :src="peopleImage"/>
              </div>
              <div class="details">
                <h3>{{ member.name }}</h3>
                <p>{{ member.affiliation }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

defineProps({
  peopleImage: {
    type: String,
    default: new URL('/public/images/people_default.png', import.meta.url).href
  }
})

const committees = ref([
  {
    title: "General Chairs",
    members: [
      { name: "Dimitris Gizopoulos", affiliation: "University of Athens" },
      { name: "Chao Li", affiliation: "Shanghai Jiao Tong University" }
    ]
  },
  {
    title: "Program Chairs",
    members: [
      { name: "Xuehai Qian", affiliation: "Tsinghua University" },
      { name: "Boris Grot", affiliation: "University of Edinburgh" }
    ]
  },
  {
    title: "Sponsorship Chair",
    members: [
      { name: "Yi Wang", affiliation: "Shenzhen University" }
    ]
  },
  {
    title: "Local Arrangement Chair",
    members: [
      { name: "George Papadimitriou", affiliation: "University of Athens" }
    ]
  },
  {
    title: "Workshop co-Chairs",
    members: [
      { name: "Amelie Chi Zhou", affiliation: "Hong Kong Baptist University" },
      { name: "Shadi Ibrahim", affiliation: "INRIA" }
    ]
  },
  {
    title: "Tutorial co-Chairs",
    members: [
      { name: "Xiaofeng Hou", affiliation: "Shanghai Jiao Tong University" },
      { name: "Shaolei Ren", affiliation: "UC Riverside" }
    ]
  },
  {
    title: "Tech Forum co-Chairs",
    members: [
      { name: "Jidong Zhai", affiliation: "Tsinghua University" },
      { name: "Yang Hu", affiliation: "Tsinghua University" }
    ]
  },
  {
    title: "PhD Forum co-Chairs",
    members: [
      { name: "Liqiang Lu", affiliation: "Zhejiang University" },
      { name: "Dezun Dong", affiliation: "NUDT" }
    ]
  },
  {
    title: "Award co-Chairs",
    members: [
      { name: "Rui Hou", affiliation: "IIE/CAS" },
      { name: "Michael Huang", affiliation: "University of Rochester" }
    ]
  },
  {
    title: "Finance co-Chairs",
    members: [
      { name: "Songwen Pei", affiliation: "University of Shanghai for Sci and Tech" },
      { name: "Myoungseo Kim", affiliation: "SK hynix" }
    ]
  },
  {
    title: "Submission co-Chairs",
    members: [
      { name: "Youwei Zhuo", affiliation: "Peking University" },
      { name: "Jian Weng", affiliation: "King Abdullah University of Sci and Tech" }
    ]
  },
  {
    title: "Publication co-Chairs",
    members: [
      { name: "Xiaoli Gong", affiliation: "Nankai University" },
      { name: "Dongsheng Li", affiliation: "NUDT" }
    ]
  },
  {
    title: "Poster co-Chairs",
    members: [
      { name: "Lu Peng", affiliation: "Tulane University" },
      { name: "Fan Yao", affiliation: "University of Central Florida" }
    ]
  },
  {
    title: "Artifact Evaluation co-Chairs",
    members: [
      { name: "Zichen Xu", affiliation: "Nanchang University" },
      { name: "Huanle Xu", affiliation: "University of Macau" }
    ]
  },
  {
    title: "Student Competition co-Chairs",
    members: [
      { name: "Shuwen Deng", affiliation: "Tsinghua University" },
      { name: "Jiahua Lu", affiliation: "AMD" }
    ]
  },
  {
    title: "Travel Grant co-Chairs",
    members: [
      { name: "Jingwen Leng", affiliation: "Shanghai Jiao Tong University" },
      { name: "Xin Fu", affiliation: "University of Houston" }
    ]
  },
  {
    title: "Registration co-Chairs",
    members: [
      { name: "Mengyao Xie", affiliation: "ICT/CAS" },
      { name: "Yunhua Zhao", affiliation: "ICT/CAS" }
    ]
  },
  {
    title: "Web/Social Media co-Chairs",
    members: [
      { name: "Cen Chen", affiliation: "South China University of Technology" },
      { name: "Tongfeng Weng", affiliation: "National University of Singapore" }
    ]
  },
  {
    title: "Publicity co-Chairs",
    members: [
      { name: "Amro Awad", affiliation: "University of Oxford" },
      { name: "Kaoru Ota", affiliation: "Muroran Institute of Technology" },
      { name: "Marco Brocanelli", affiliation: "Ohio State University" },
      { name: "Myoungsoo Jung", affiliation: "KAIST" },
      { name: "Stéphane Zuckerman", affiliation: "CY Cergy Paris University" },
      { name: "Tiziano De Matteis", affiliation: "Vrije Universiteit Amsterdam" },
      { name: "Wei Li", affiliation: "The University of Sydney" },
      { name: "Zhenman Fang", affiliation: "Simon Fraser University" }
    ]
  }
])
</script>

<style lang="scss" scoped>
.committee-container {
  .committee-section {
    margin-bottom: 50px;

    h2 {
      text-align: center;
      font-size: 1.8rem;
      margin-bottom: 30px;
      color: #2c3e50;
    }

    .members {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      
      .member-card {
        transition: transform 0.3s;
        
        &:hover {
          transform: translateY(-5px);
        }

        .member-info {
          display: flex;
          align-items: center;
          gap: 20px;

          .details {
            h3 {
              font-size: 1.2rem;
              margin-bottom: 8px;
              color: #2c3e50;
            }

            p {
              color: #666;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
</style> 