<template>
  <PageBase title="Visa Information">
    <div class="document-container">
      <div class="section">
        <h2>Visa Application Support</h2>
        <p>If you are required to apply for a short stay Schengen visa for Greece, you will find all the instructions here. The organizing committee can issue a supporting invitation letter for VISA applications for conference/workshop/tutorial organizers, registered conference attendees, registered workshops/tutorials attendees, and paper authors.</p>
      </div>

      <div class="section">
        <h2>How to Request an Invitation Letter</h2>
        <p>After you have registered, please send the following information to <a href="mailto:chaol@sjtu.edu.cn">chaol@sjtu.edu.cn</a> to apply for your visa invitation letter.</p>
        
        <div class="info-box">
          <h3>Required Information</h3>
          <ul>
            <li>Full name on passport</li>
            <li>Date of birth</li>
            <li>Passport number</li>
            <li>Email address</li>
            <li>Home address</li>
            <li>Company/Organization</li>
            <li>Country of citizenship</li>
          </ul>
        </div>

        <div class="note-box">
          <h3>Important Notes</h3>
          <p>It may take up to 3 working days for sending the letter of invitation after your initial request. In your email, please use the following subject line:</p>
          <div class="email-subject">
            <code>APPT 2025 Visa Letter for [Your_First_Name Your_Last_Name]</code>
          </div>
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

  .section {
    margin-bottom: 3rem;

    h2 {
      color: #2c3e50;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }

    p {
      color: #333;
      line-height: 1.6;
      margin: 0.8rem 0;
    }
  }

  .info-box {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 4px;
    margin: 1.5rem 0;

    h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
      margin: 0;

      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;

        &:before {
          content: "•";
          color: #004380;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
      }
    }
  }

  .note-box {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 4px;
    margin: 1.5rem 0;
    border-left: 3px solid #ddd;

    h3 {
      color: #2c3e50;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: normal;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin: 0.8rem 0;
      font-size: 0.95rem;
    }
  }

  .email-subject {
    background-color: #f1f1f1;
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
    font-family: monospace;
    word-break: break-all;

    code {
      color: #004380;
      font-weight: 500;
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
</style>