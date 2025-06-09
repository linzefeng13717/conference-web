<template>
  <PageBase title="APPT Artifact Evaluation">
    <div class="document-container">
      <div class="header-section">
        <h1>APPT Artifact Evaluation</h1>
      </div>

      <div class="section">
        <h2>Introduction</h2>
        <p>The APPT Best Artifact Award recognizes the best papers in terms of reproducibility. Up to two-three comprehensively reproduced papers are carefully selected and the awards are presented during the awards session of the APPT conference. Each award comes with a honorarium medal/certificate. The criteria for the award broadly include: (i) coverage, (ii) ease of reproducibility, (iii) flexibility, and (iv) portability.</p>
        <p>Specifically, the award recognizes reproducible papers that did the extra mile and provided artifacts that are fully and easily reproducible and offer increased flexibility (being able to add workloads, data and exhibiting similar behavior with published results) and portability (ideally, portable to more than one operating system and across versions).</p>
      </div>

      <div class="section">
        <h2>Important Dates</h2>
        <p>All deadlines are AoE (Anywhere on Earth).</p>
        <table class="date-table">
          <tr>
            <td>Artifact submission:</td>
            <td>Friday, June 20, 2025 (mandatory for tool papers)</td>
          </tr>
          <tr>
            <td>Completion/notification of the smoke-test:</td>
            <td>Wednesday, June 25, 2025</td>
          </tr>
          <tr>
            <td>Artifact notification:</td>
            <td>Monday, June 30, 2025</td>
          </tr>
        </table>
      </div>

      <div class="section">
        <h2>Submission Information</h2>
        <p>Please submit your artifact description, as well as your original paper, with a docker image link to our evaluation email: <a href="mailto:xuz@ncu.edu.cn">xuz@ncu.edu.cn</a>.</p>
      </div>

      <div class="section">
        <h2>AE Co-Chairs</h2>
        <table class="date-table">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Affiliation</th>
          </tr>
          <tr>
            <td>Zichen Xu</td>
            <td><a href="mailto:xuz@ncu.edu.cn">xuz@ncu.edu.cn</a></td>
            <td>Nanchang University</td>
          </tr>
        </table>
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

    p {
      color: #333;
      line-height: 1.6;
      margin: 0.8rem 0;
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

        td, th {
          padding: 0.8rem;
          line-height: 1.6;
          color: #333;
          text-align: center;

          &:first-child {
            font-weight: bold;
            width: 40%;
          }
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