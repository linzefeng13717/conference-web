<template>
  <PageBase title="APPT 2025 Student Travel Grant">
    <div class="document-container">
      <div class="header-section">
        <h1>APPT 2025 Student Travel Grant</h1>
      </div>

      <div class="section">
        <h2>Introduction</h2>
        <p>APPT financially supports students to participate in workshops and main conferences. The grant can partially cover the student's food/travel or miscellaneous fees. The selection process will give higher priority to CCF student members and students who will provide necessary volunteer work during APPT 2025.</p>
      </div>

      <div class="section">
        <h2>Important Dates</h2>
        <p>All deadlines are AoE (Anywhere on Earth).</p>
        <table class="date-table">
          <tr>
            <td>Application Deadline:</td>
            <td>June 20, 2024 at 11:59 PM AoE</td>
          </tr>
          <tr>
            <td>Notifications:</td>
            <td>June 25, 2024</td>
          </tr>
        </table>
      </div>

      <div class="section">
        <h2>How to Apply</h2>
        <ol>
          <li>Please use the following subject line when sending your application: <font color="red">APPT 2025 Student Travel Grant Application for [Your Last Name, Your First Name].</font></li>
          <li>In the body of the email, please outline how you plan to provide necessary volunteer services for APPT, along with any ideas you may have. The statement should be <font color="red">less than 300 words</font> in English. If you are CCF Student member, please specify your membership ID.</li>
          <li>Please make sure you <font color="red">"cc" the email</font> to your adviser. We will not process your application if you do not meet this requirement.</li>
          <li>Please attach your <font color="red">CV (in English)</font> to the email.</li>
          <li>Finally, send your application to <a href="mailto:appttravelgrant25@163.com">appttravelgrant25@163.com</a></li>
        </ol>
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

    ol {
      padding-left: 1.5rem;
      margin: 0.8rem 0;
      
      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.8rem;
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