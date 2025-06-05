<template>
  <PageBase title="Young Scholar Forums (YSF)">
    <div class="document-container">
      <div class="header-section">
        <h1>Young Scholar Forum (YSF) Call for Abstracts</h1>
        <p class="event-info">July 16, Athens, Greece</p>
      </div>
      
      <div class="section">
        <h2>Introduction</h2>
        <p>
          The APPT 2025 Young Scholar Forum provides a unique opportunity for outstanding PhD students, recent graduates, and young faculty members to present their research in computer architecture. This forum serves as a platform for participants to share their dissertation work, receive constructive feedback from leading experts, and engage in meaningful discussions with peers and mentors.
        </p>
        <p>
          Held as part of the APPT 2025 conference, the forum will feature six invited speakers, each presenting for 15 minutes, followed by 5 minutes of Q&A. It aims to create an interactive environment that fosters knowledge exchange and encourages young researchers to refine their ideas and gain visibility in the field.
        </p>
      </div>

      <div class="section">
        <h2>Important Dates</h2>
        <table class="date-table">
          <tr>
            <td>Submission Deadline:</td>
            <td>May 5th, 2025</td>
          </tr>
          <tr>
            <td>Notification of Acceptance:</td>
            <td>May 9th, 2025</td>
          </tr>
          <tr>
            <td>Forum Date:</td>
            <td>July 16th, 2025 (afternoon session)</td>
          </tr>
        </table>
      </div>

      <div class="section">
        <h2>Submission Information</h2>
        <p>
          Interested applicants can submit their work via email to <a href="mailto:dong@nudt.edu.cn">dong@nudt.edu.cn</a> and <a href="mailto:liqianglu@zju.edu.cn">liqianglu@zju.edu.cn</a>. The submission should include a 2-page extended abstract outlining the novelties and key contributions of the applicant's research. The abstract should also include the applicant's name, affiliation, and a brief bio. We accept self-application and nominations from supervisors/team leaders.
        </p>
      </div>

      <div class="section">
        <h2>PhD Forums Co-Chairs</h2>
        <div class="chairs-list">
          <div class="chair">
            <h3>Dezun Dong</h3>
            <p>National University of Defense Technology</p>
          </div>
          <div class="chair">
            <h3>Liqiang Lu</h3>
            <p>Zhejiang University</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Selected Speakers</h2>
        <ul>
          <li>
            <strong>Data-driven Logic Design Automation for Processors</strong><br>
            Shuyao Cheng<br>
            Institute of Computing Technology, CAS
          </li>
          <li>
            <strong>A Two Level Neural Approach Combining Off-Chip Prediction with Adaptive Prefetch Filtering</strong><br>
            Alexandre Valentin Jamet<br>
            Barcelona Supercomputing Center (BSC)
          </li>
          <li>
            <strong>Enabling Application Adaptability and Live Migration in Heterogeneous Embedded Systems using WebAssembly</strong><br>
            Marius Kreutzer<br>
            FZI Research Center for Information Technology / Karlsruhe Institut of Technology (KIT)
          </li>
          <li>
            <strong>Computation and Data Movement Orchestration via Tile-Centric Compilation</strong><br>
            Size Zheng<br>
            ByteDance Seed and Tsinghua University
          </li>
          <li>
            <strong>Accelerating Trapped-Ion Quantum Computing via Software Optimization</strong><br>
            Chenghong Zhu<br>
            The Hong Kong University of Science and Technology (Guangzhou)
          </li>
          <li>
            <strong>Towards High Performance Next-Gen Autonomous Systems</strong><br>
            Lingyu Sun<br>
            Shanghai Jiao Tong University
          </li>
          <li>
            <strong>Hardware/Software Co-Design for Large-Scale Emerging Applications</strong><br>
            Yufeng Gu<br>
            University of Michigan
          </li>
        </ul>
      </div>
    </div>
  </PageBase>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
</script>

<style lang="scss" scoped>
.document-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  
  .header-section {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      color: #2c3e50;
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #2c3e50;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: normal;
    }

    .event-info {
      color: #666;
      font-size: 1.2rem;
    }
  }

  .section {
    margin-bottom: 2.5rem;

    h2 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }

    h3 {
      color: #2c3e50;
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem;
    }

    p {
      color: #333;
      line-height: 1.6;
      margin: 0.8rem 0;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin: 0.8rem 0;
      
      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
    }

    .date-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;

      tr {
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }

        td {
          padding: 0.8rem;
          line-height: 1.6;
          color: #333;

          &:first-child {
            font-weight: bold;
            width: 40%;
          }
        }
      }
    }

    .submission-details {
      .email-addresses {
        margin: 1rem 0;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 4px;
        text-align: center;

        a {
          color: #004380;
          text-decoration: none;
          font-weight: bold;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .note {
        margin-top: 1.5rem;
        font-style: italic;
        color: #666;
      }
    }

    .chairs-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 1rem;

      .chair {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 4px;
        text-align: center;

        h3 {
          margin: 0 0 0.5rem 0;
          color: #004380;
        }

        p {
          margin: 0;
          color: #666;
        }
      }
    }

    a {
      color: #004380;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>