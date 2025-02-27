<template>
  <page-base title="Competition">
    <div class="competition-container">
      <div class="competition-intro">
        <h2>APPT 2025 Programming Competition</h2>
        <p class="description">
          Join us for an exciting programming competition focused on parallel computing and algorithm optimization.
        </p>
      </div>

      <el-tabs class="competition-tabs">
        <el-tab-pane label="Overview">
          <div class="tab-content">
            <h3>Competition Overview</h3>
            <p>The competition will focus on solving real-world parallel computing challenges...</p>
            
            <h4>Prize Pool</h4>
            <div class="prizes">
              <el-card v-for="(prize, index) in prizes" :key="index" class="prize-card">
                <h3>{{ prize.place }}</h3>
                <p class="amount">{{ prize.amount }}</p>
              </el-card>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Rules">
          <div class="tab-content">
            <h3>Competition Rules</h3>
            <ul class="rules-list">
              <li v-for="(rule, index) in rules" :key="index">
                {{ rule }}
              </li>
            </ul>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Registration">
          <div class="tab-content">
            <h3>How to Register</h3>
            <p>Please fill out the registration form below...</p>
            <el-button type="primary" class="register-button">
              Register Now
            </el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const prizes = ref([
  { place: '1st Place', amount: '$3,000' },
  { place: '2nd Place', amount: '$2,000' },
  { place: '3rd Place', amount: '$1,000' }
])

const rules = ref([
  'Teams must consist of 2-3 members',
  'All team members must be currently enrolled students',
  'Solutions must be implemented using provided frameworks',
  'Code must be original and created during the competition',
  'Teams must present their solutions to the judges'
])
</script>

<style lang="scss" scoped>
.competition-container {
  .competition-intro {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }

    .description {
      font-size: 1.1rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .competition-tabs {
    .tab-content {
      padding: 20px;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        color: #2c3e50;
      }

      h4 {
        font-size: 1.3rem;
        margin: 30px 0 20px;
        color: #2c3e50;
      }

      p {
        color: #666;
        line-height: 1.6;
      }

      .prizes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 20px;

        .prize-card {
          text-align: center;
          transition: transform 0.3s;

          &:hover {
            transform: translateY(-5px);
          }

          h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .amount {
            font-size: 1.5rem;
            color: #409EFF;
            font-weight: bold;
          }
        }
      }

      .rules-list {
        list-style-type: disc;
        padding-left: 20px;
        
        li {
          margin-bottom: 10px;
          color: #666;
          line-height: 1.6;
        }
      }

      .register-button {
        margin-top: 30px;
        padding: 12px 30px;
        font-size: 1.1rem;
      }
    }
  }
}
</style> 