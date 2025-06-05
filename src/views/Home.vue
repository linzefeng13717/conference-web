<template>
  <div class="home">
    <!-- 顶部大图区域 -->
    <div class="hero-container">
      <Carousel :slides="carouselSlides" :autoPlayInterval="5000" />
    </div>

    <!-- 主要内容区域 -->
    <div class="content-section">
      <!-- About APPT 独占一行 -->
      <div class="about-section">
        <h2>About APPT</h2>
        <p class="about-text">
          Welcome to the website of the 16th International Symposium on Advanced Parallel Processing Technology (APPT). Since its establishment in 1995, APPT has evolved into an ideal international forum for presenting thought-provoking ideas and advancing the frontiers of computing systems. This year, the theme of the conference is <b>Computing Reimagined</b>. APPT-2025 will mainly focus on the multidisciplinary challenges and innovations shaping the future of computer architecture and intelligent computing. The conference invites original contributions spanning theoretical breakthroughs, system-level optimizations, and real-world applications.
        </p>
        <p class="slogan">See you all in Athens!</p>
      </div>

      <!-- Announcements 和 Important Dates 并排 -->
      <div class="info-grid">
        <div class="announcements-section">
          <div class="section-card">
            <h2>Announcements</h2>
            <ul class="announcement-list">
              <li v-for="(announcement, index) in announcements" 
                  :key="index"
                  @click="showAnnouncementDetail(announcement)"
                  class="announcement-item">
                <span class="announcement-title">{{ announcement.title }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="dates-section">
          <div class="section-card">
            <h2>Important Dates</h2>
            <ul class="date-list">
              <li v-for="(date, index) in importantDates" :key="index">
                <span class="event">{{ date.event }}</span>
                <span class="date">{{ date.date }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加对话框组件 -->
    <el-dialog
      v-model="dialogVisible"
      :title="selectedAnnouncement?.title"
      width="50%"
      class="announcement-dialog"
      :close-on-click-modal="true"
      :show-close="false">
      <div class="dialog-content">
        <!-- <p class="dialog-date">{{ selectedAnnouncement?.date }}</p> -->
        <div class="dialog-body" v-html="selectedAnnouncement?.content"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
import Carousel from '@/components/Carousel.vue'

const carouselSlides = ref([
  {
    image: new URL('/public/images/BG_1.jpg', import.meta.url).href,
    alt: 'Conference Banner 1'
  },
  {
    image: new URL('/public/images/BG_2.png', import.meta.url).href,
    alt: 'Conference Banner 2'
  },
  {
    image: new URL('/public/images/BG_3.jpg', import.meta.url).href,
    alt: 'Conference Banner 3'
  }
])

const importantDates = ref([
  { event: "Paper Submission (Abstracts)", date: "April 06, 2025" },
  { event: "Paper Submission (Full Paper)", date: "April 13, 2025" },
  { event: "Paper Notification", date: "April 27, 2025" },
  { event: "Workshop/Tutorial Proposal", date: "March 31, 2025" },
])

const dialogVisible = ref(false)
const selectedAnnouncement = ref(null)

// 修改announcements数据结构
const announcements = ref([
  {
    title: "Conference registration is now open",
    date: "2025-01-15",
    content: `
      <p>We are pleased to announce that registration for APPT 2025 is now open!</p>
      <p>For more information, please visit our registration page.</p>
    `
  },
  {
    title: "Call for papers released",
    date: "2025-01-10",
    content: `
      <p>The Call for Papers for APPT 2025 is now available!</p>
    `
  },
  {
    title: "Important updates about submission deadlines",
    date: "2025-01-05",
    content: `
    `
  },
  {
    title: "Updated Deadline",
    date: "2025-01-05",
    content: `
      <p>Please note the following important deadlines:</p>
      <ul>
        <li>Abstract Submission: <b>April 06, 2025</b></li>
        <li>Full Paper Submission: <b>April 13, 2025</b></li>
      </ul>
      `
  }
])

const showAnnouncementDetail = (announcement) => {
  selectedAnnouncement.value = announcement
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.home {
  background-color: white;

  .hero-container {
    align-content: center;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 10px 40px;
    background-color: white;
    margin-bottom: 30px;
  }

  .hero-section {
    position: relative;
    height: 66vh;
    overflow: hidden;
    border-radius: 15px;

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
        font-size: 6rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .hero-logo {
          height: 7rem;
          filter: brightness(0) invert(1);
        }

        span {
          font-size: 6rem;
          line-height: 1;
        }
      }

      .conference-date,
      .conference-location {
        font-size: 2rem;
        margin: 0.5rem 0;
      }
    }
  }

  .content-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px 40px;
    background-color: white;
    margin-bottom: 40px;

    .about-section {
      margin-bottom: 0;
      text-align: left;
      padding: 20px 0;

      h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #eee;
      }

      .about-text {
        margin-bottom: 20px;
        line-height: 1.6;
      }

      .slogan {
        text-align: center;
        font-style: italic;
        font-size: 1.5rem;
        color: #666;
      }

      .theme-highlight {
        color: #409EFF;
        font-weight: 900;
        font-family: 'Playfair Display', serif;
        font-size: 1.2em;
        letter-spacing: 1px;
        display: inline;
        margin: 0 5px;
        font-style: italic;
        text-shadow: 2px 2px 4px rgba(64, 158, 255, 0.2);
      }

      .year-text {
        font-size: 0.8em;
        font-weight: normal;
        color: #666;
      }
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 60px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .section-card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      padding: 20px;
      height: 100%;

      h2 {
        margin-bottom: 20px;
        padding: 8px 15px;
        border-radius: 6px;
        background: #004380;
        color: white;
        font-size: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 67, 128, 0.2);
      }
    }

    .date-list,
    .announcement-list {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        
        &:last-child {
          border-bottom: none;
        }
      }
    }

    .date-list li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .event {
        font-weight: bold;
      }

      .date {
        color: #666;
      }
    }
  }
}

.announcement-item {
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 67, 128, 0.05);
    transform: translateX(5px);
  }

  .announcement-title {
    font-weight: 500;
    color: #004380;
  }
}

:deep(.announcement-dialog) {
  .el-dialog__header {
    background-color: #004380;
    margin: 0;
    padding: 20px;
    border-radius: 8px 8px 0 0;

    .el-dialog__title {
      color: white;
      font-size: 1.2rem;
    }

    .el-dialog__headerbtn {
      .el-dialog__close {
        color: white;
      }
    }
  }

  .el-dialog__body {
    padding: 30px;

    .dialog-content {
      .dialog-date {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 20px;
      }

      .dialog-body {
        line-height: 1.6;

        h4 {
          color: #004380;
          margin: 20px 0 10px;
        }

        ul {
          padding-left: 20px;
          margin: 10px 0;
        }

        p {
          margin: 10px 0;
        }
      }
    }
  }
}
</style> 