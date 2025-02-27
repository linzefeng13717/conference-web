<template>
  <page-base title="Forums">
    <div class="forums-container">
      <div class="schedule-header">
        <h2>Forum Schedule</h2>
        <p>All times are in GMT+8 (China Standard Time)</p>
      </div>

      <el-timeline class="forum-timeline">
        <el-timeline-item
          v-for="(forum, index) in forums"
          :key="index"
          :timestamp="forum.time"
          :type="forum.type">
          <el-card class="forum-card">
            <h3>{{ forum.title }}</h3>
            <p class="speaker">Chair: {{ forum.chair }}</p>
            <p class="location">Location: {{ forum.location }}</p>
            <div class="topics">
              <h4>Topics:</h4>
              <ul>
                <li v-for="(topic, tIndex) in forum.topics" 
                    :key="tIndex">{{ topic }}</li>
              </ul>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const forums = ref([
  {
    time: '9:00 - 10:30',
    type: 'primary',
    title: 'Opening Forum: Future of Parallel Computing',
    chair: 'Prof. John Smith',
    location: 'Main Hall A',
    topics: [
      'Next Generation Computing Architecture',
      'Emerging Parallel Programming Models',
      'Industry Applications and Challenges'
    ]
  },
  {
    time: '11:00 - 12:30',
    type: 'success',
    title: 'Special Forum: AI and Parallel Processing',
    chair: 'Dr. Maria Garcia',
    location: 'Conference Room B',
    topics: [
      'Distributed AI Systems',
      'Parallel Training Algorithms',
      'Hardware Acceleration for AI'
    ]
  },
  // Add more forums...
])
</script>

<style lang="scss" scoped>
.forums-container {
  .schedule-header {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #2c3e50;
    }

    p {
      color: #666;
    }
  }

  .forum-timeline {
    max-width: 800px;
    margin: 0 auto;

    .forum-card {
      h3 {
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: #2c3e50;
      }

      .speaker, .location {
        color: #666;
        margin-bottom: 10px;
      }

      .topics {
        margin-top: 15px;

        h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;

          li {
            color: #666;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style> 