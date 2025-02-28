<template>
  <div class="home">
    <div class="hero-section">
      <img src="@/assets/BG.png" 
           alt="Conference Banner"
           class="hero-image">
      <div class="hero-content">
        <h1 class="conference-title">
          The 16th International Symposium on<br>
          Advanced Parallel Processing Technology (APPT)
        </h1>
        <h2 class="conference-location">Athens, Greece · July 13-17, 2025</h2>
      </div>
    </div>

    <div class="content-section">
      <div class="about-section">
        <h2>About APPT</h2>
        <p>
          <b>APPT aims to provide an ideal forum for thought-provoking ideas. The theme for APPT 2025 is: <span class="theme-highlight">Computing Reimagined</span></b>
        </p>
        <p>
          APPT is a flagship biennial international conference of the <b>China Computer Federation (CCF) Technical Committee on Computer Architecture (TCArch) </b>. It has become the major forum for Chinese computer architects and system designers to better engage with international colleagues, develop better mutual understanding, and build stronger academic ties. It aims to provide an ideal environment for researchers in both academia and industry to present thought-provoking ideas related to all aspects of computer architecture.
        </p>
      </div>

      <el-card class="more-info" shadow="hover">
        <template #header>
          <div class="card-header">
            <span class="title"><b>More Information About APPT</b></span>
            <el-button 
              class="expand-button" 
              :icon="isExpanded1 ? 'el-icon-minus' : 'el-icon-plus'"
              @click="isExpanded1 = !isExpanded1"
              circle
              text
            />
          </div>
        </template>
        <div class="text item" v-show="isExpanded1">
          This year APPT will be co-located with the <b>27th National Conference of Information Storage</b> (NCIS'21). NCIS is the flagship conference organized by China Computer Federation (CCF) Technical Committee on Information Storage.<br/>Specifically, APPT and NCIS are part of the newly created <b>CCF System Conference (CCFSys)</b>. The technical program for each affiliated conference is independently administered, with each responsible for its own meeting's content and proceedings. This model facilitates communication among researchers in the related fields.
        </div>
      </el-card>

      <el-card class="more-info" shadow="hover">
        <template #header>
          <div class="card-header">
            <span class="title"><b>Collaboration with JCST</b></span>
            <el-button 
              class="expand-button" 
              :icon="isExpanded2 ? 'el-icon-minus' : 'el-icon-plus'"
              @click="isExpanded2 = !isExpanded2"
              circle
              text
            ></el-button>
          </div>
        </template>
        <div class="text item" v-show="isExpanded2">
          To build a richer conference program, we are exploring a new way of collaboration with the Journal of Computer Science and Technology (JCST). JCST is the first English Language Journal of computing technology published in China. Being a highly respected journal (SCIe, CCF Rank-B), it is distributed throughout the world through Springer and covered in many authoritative indexing/abstracting systems. The impact factor of JCST is 1.185 in 2018.
        </div>
      </el-card>

      <el-card class="more-info" shadow="hover">
        <template #header>
          <div class="card-header">
            <span class="title"><b>Collaboration with JCST</b></span>
            <el-button 
              class="expand-button" 
              :icon="isExpanded3 ? 'el-icon-minus' : 'el-icon-plus'"
              @click="isExpanded3 = !isExpanded3"
              circle
              text
            />
          </div>
        </template>
        <div class="text item" v-show="isExpanded3">
          We setup a special issue on JCST (APPT track). Papers submitted to JCST's APPT Track are required to be presented on the conference upon acceptance. These papers will be published by JCST and included in the APPT 2021 conference program as a special session. However, they have nothing to do with the submission process, reviewing process, and publication process of APPT. Dual submission/publication is prohibited. APPT aims to provide a forum for JCST to advertise itself and to better disseminate its ideas.
        </div>
      </el-card>

      <div class="important-dates">
        <h2>Important Dates</h2>
        <div class="date-cards">
          <el-card v-for="(date, index) in importantDates" 
                   :key="index" 
                   class="date-card">
            <h3>{{ date.event }}</h3>
            <p>{{ date.date }}</p>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded1 = ref(false)
const isExpanded2 = ref(false)
const isExpanded3 = ref(false)

const importantDates = ref([
  { 
    event: "Paper Submission (Abstracts)", 
    date: "March 31, 2025, 11:59PM AOE" 
  },
  { 
    event: "Paper Submission (Full Paper)", 
    date: "April 06, 2025, 11:59PM AOE" 
  },
  { 
    event: "Paper Notification", 
    date: "April 27, 2025" 
  },
  { 
    event: "Workshop/Tutorial Proposal", 
    date: "March 31, 2025, 11:59PM AOE" 
  },
  { 
    event: "WIP/Poster Submission", 
    date: "April 27, 2025, 11:59PM AOE" 
  },
  { 
    event: "Conference", 
    date: "July 13-17, 2025" 
  }
])
</script>

<style lang="scss" scoped>
.home {
  .hero-section {
    position: relative;
    height: 66vh;
    overflow: hidden;

    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

      .conference-title {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.4;
      }

      .conference-location {
        font-size: 1.8rem;
        margin-top: 1rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      }
    }
  }

  .content-section {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;

    .about-section {
      text-align: left;
      margin-left: 0;
      margin-bottom: 60px;

      h2 {
        font-size: 2rem;
        margin-bottom: 20px;
      }

      p{
        font-size: 1.2rem;
        line-height: 2;
      }

      .theme-highlight {
        color: #007bff;  // 将黄色 #FFD700 改为蓝色 #007bff
        font-weight: bold;
      }
    }

    .important-dates {
      margin-top: 40px;

      h2 {
        text-align: center;
        margin-bottom: 30px;
      }

      .date-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;

        .date-card {
          text-align: center;
          transition: transform 0.3s;
          padding: 15px;

          h3 {
            font-size: 1.1rem;
            margin-bottom: 10px;
            color: #2c3e50;
          }

          p {
            color: #666;
            font-size: 0.9rem;
          }

          &:hover {
            transform: translateY(-5px);
          }
        }
      }
    }

    .more-info {
      margin-bottom: 20px;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #eee;
        background-color: #f8f9fa;

        .title {
          font-size: 1.1rem;
          font-weight: 500;
          color: #2c3e50;
        }

        .expand-button {
          font-size: 1.2rem;
          color: #606266;
          transition: all 0.3s ease;
          background-color: #fff;
          border: 1px solid #dcdfe6;
          padding: 8px;
          
          &:hover {
            color: var(--el-color-primary);
            background-color: #f0f7ff;
            border-color: var(--el-color-primary);
          }

          &:active {
            background-color: #e6f1fc;
          }
        }
      }

      .text.item {
        padding: 20px;
        color: #606266;
        line-height: 1.6;
        transition: all 0.3s ease;
      }
    }
  }
}
</style> 