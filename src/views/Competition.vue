<template>
  <PageBase title="Competition">
    <div class="document-container">
      <div class="header-section">
        <h1>APPT 2025 Programming Competition</h1>
        <p class="description">
          Join us for an exciting programming competition focused on parallel computing and algorithm optimization.
        </p>
      </div>

      <div class="section">
        <h2>Overview</h2>
        <p>The competition will focus on solving real-world parallel computing challenges...</p>
      </div>

      <div class="section">
        <h2>Competition Rules</h2>
        <ul>
          <li>Teams must consist of 2-3 members</li>
          <li>All team members must be currently enrolled students</li>
          <li>Solutions must be implemented using provided frameworks</li>
          <li>Code must be original and created during the competition</li>
          <li>Teams must present their solutions to the judges</li>
        </ul>
      </div>

      <div class="section">
        <h2>Prize Pool</h2>
        <table class="prize-table">
          <tr>
            <td>1st Place:</td>
            <td>$3,000</td>
          </tr>
          <tr>
            <td>2nd Place:</td>
            <td>$2,000</td>
          </tr>
          <tr>
            <td>3rd Place:</td>
            <td>$1,000</td>
          </tr>
        </table>
      </div>

      <div class="section">
        <h2>Registration</h2>
        <p>Please fill out the registration form below...</p>
        <div class="button-container">
          <el-button type="primary" class="register-button">Register Now</el-button>
        </div>
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
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.1rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto;
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

    .prize-table {
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

          &:last-child {
            color: #409EFF;
            font-weight: bold;
          }
        }
      }
    }

    .button-container {
      text-align: center;
      margin-top: 2rem;

      .register-button {
        padding: 12px 30px;
        font-size: 1.1rem;
      }
    }
  }
}
</style> 