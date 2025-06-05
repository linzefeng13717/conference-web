<template>
  <PageBase title="APPT History">
    <div class="history-content">
      <h2>History and Development of APPT</h2>
      <p class="intro">Advanced Parallel Processing Technology (APPT) is the flagship international conference organized by the China Computer Federation (CCF) Technical Committee on Computer Architecture (TCArch). It aims to provide an ideal environment for researchers in both academia and industry to present thought-provoking ideas related to all aspects of computer architecture, computing systems, and emerging technologies.</p>

      <div class="history-section">
        <h3>Development Stages</h3>
        <div class="timeline">
          <div v-for="stage in developmentStages" :key="stage.period" class="stage-card">
            <h4>{{ stage.period }}</h4>
            <h5>{{ stage.title }}</h5>
            <div class="stage-content" v-html="stage.content"></div>
          </div>
        </div>
      </div>

      <div class="conference-table">
        <h3>Conference History (2003-2023)</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Year and Time</th>
                <th>Location</th>
                <th>PC Co-Chairs</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="conf in conferenceHistory" :key="conf.year">
                <td>{{ conf.time }}</td>
                <td>{{ conf.location }}</td>
                <td>{{ conf.chairs }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="future-conferences">
        <h3>Upcoming Conferences</h3>
        <div class="conference-grid">
          <div v-for="conf in upcomingConferences" :key="conf.year" class="conference-card">
            <h4>APPT {{ conf.year }}</h4>
            <p class="location">{{ conf.location }}</p>
            <p class="chairs">{{ conf.chairs }}</p>
          </div>
        </div>
      </div>
    </div>
  </PageBase>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const bannerImage = ref(new URL('@/assets/BG3.png', import.meta.url).href)

const developmentStages = ref([
  {
    period: '1995-2002',
    title: 'A Bilateral Workshop',
    content: 'The origins of APPT can be traced back to the collaboration between China and Germany in the field of parallel processing technologies. Starting as a bilateral workshop between CCF TCArch and Fraunhofer Institute (GMD FIRST), it established a strong foundation for international cooperation. A significant milestone was reached in 1999 when the conference proceedings were first published by Springer in the LNCS series.'
  },
  {
    period: '2003-2023',
    title: 'An International Biennial Conference',
    content: 'APPT evolved into an international biennial conference, expanding beyond China and Germany to include venues in Spain, Sweden, and Switzerland. This period saw significant growth in submissions and international participation.'
  },
  {
    period: '2025 and Beyond',
    title: 'An Annual Conference',
    content: 'APPT enters a new era as an annual conference, aiming to keep pace with rapid technological advancements and provide more frequent opportunities for global academic exchange. The conference continues to uphold its principles of openness, collaboration, and innovation.'
  }
])

const conferenceHistory = ref([
  { time: 'Sep 17-19, 2003', location: 'Xiamen, China', chairs: 'Xingming Zhou, Ming Xu, Stefan Jähnichen, Jiannong Cao' },
  { time: 'Oct 27-28, 2005', location: 'Hong Kong, China', chairs: 'Jiannong Cao, Wolfgang Nejdl, Ming Xu' },
  { time: 'Nov 22-23, 2007', location: 'Guangzhou, China', chairs: 'Ming Xu, Yinwei Zhan, Jiannong Cao, Yijun Liu' },
  { time: 'Aug 24-25, 2009', location: 'Rapperswil, Switzerland', chairs: 'Yong Dou, Ralf Gruber, Josef M. Joller' },
  { time: 'Sep 26-27, 2011', location: 'Shanghai, China', chairs: 'Olivier Temam, Pen-Chung Yew, Binyu Zang' },
  { time: 'Aug 27-28, 2013', location: 'Stockholm, Sweden', chairs: 'Chenggang Wu, Albert Cohen' },
  { time: 'Aug 20-21, 2015', location: 'Jinan, China', chairs: 'Yunji Chen, Paolo Lenne, Qing Ji' },
  { time: 'Aug 29-29, 2017', location: 'Santiago de Compostela, Spain', chairs: 'Guangyu Sun, Yiran Chen' },
  { time: 'Aug 15-16, 2019', location: 'Tianjin, China', chairs: 'Pen-Chung Yew, Per Stenström' },
  { time: 'Dec 09-15, 2021', location: 'Online', chairs: 'Chao Li, Yun Liang, Xuehai Qian, Amro Awad' },
  { time: 'Aug 04-06, 2023', location: 'Nanchang, China', chairs: 'Chao Li, Zhenhua Li, Li Shen, Fan Wu' }
])

const upcomingConferences = ref([
  { year: 2025, location: 'Athens, Greece', chairs: 'PC Co-Chairs: Xuehai Qian and Boris Grot' },
  { year: 2026, location: 'TBD', chairs: 'PC Co-Chairs: TBD' }
])
</script>

<style lang="scss" scoped>
.history-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  .intro {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 3rem;
    max-width: 900px;
  }

  h2 {
    color: #004380;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  h3 {
    color: #333;
    margin: 2.5rem 0 1.5rem;
    font-size: 1.6rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;

    .stage-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);

      h4 {
        color: #004380;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }

      h5 {
        color: #666;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .stage-content {
        line-height: 1.6;
        color: #555;
      }
    }
  }

  .conference-table {
    margin: 3rem 0;
    
    .table-container {
      overflow-x: auto;
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        
        th, td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background: #004380;
          color: white;
        }

        tr:nth-child(even) {
          background: #f8f9fa;
        }
      }
    }
  }

  .conference-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    .conference-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-5px);
      }

      h4 {
        color: #004380;
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }

      .location {
        color: #666;
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }

      .chairs {
        color: #555;
        font-size: 0.9rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .history-content {
    padding: 1rem;

    .conference-table {
      .table-container {
        table {
          th, td {
            padding: 0.75rem;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style> 