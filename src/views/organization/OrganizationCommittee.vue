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
                <el-avatar :size="80" src="https://img1.qunarzz.com/travel/d4/1808/54/b16fa07503233b5.jpg_r_640x480x70_d4008e38.jpg"/>
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

const committees = ref([
  {
    title: "General Chairs",
    members: [
      { name: "John Doe", affiliation: "University of Example" },
      { name: "Jane Smith", affiliation: "Research Institute A" }
    ]
  },
  {
    title: "Program Chairs",
    members: [
      { name: "Alice Johnson", affiliation: "Tech University" },
      { name: "Bob Wilson", affiliation: "Institute of Computing" }
    ]
  },
  {
    title: "Local Organization Committee",
    members: [
      { name: "Carol Brown", affiliation: "Host University" },
      { name: "David Lee", affiliation: "Local Institute" }
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