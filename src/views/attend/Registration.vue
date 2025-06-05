<template>
  <PageBase title="Registration">
    <div class="document-container">
      <div class="header-section">
        <h1>Registration Information</h1>
      </div>

      <div class="section">
        <h2>Registration</h2>
        <p>Early registration will end at 11:59 PM AoE on June 5, 2025</p>
        <div class="registration-link">
          <a href="https://conf.ccf.org.cn/conf/en/signup/add.htm?meetingId=m1356677395851120640174349869701" class="register-button">Register Now</a>
        </div>
      </div>

      <div class="section">
        <h2>Main Conference Registration Fees</h2>
        <table class="fee-table">
          <tr>
            <th>Type</th>
            <th>Early</th>
            <th>Late/On-site</th>
          </tr>
          <tr>
            <td>CCF Member</td>
            <td>CNY 3200</td>
            <td>CNY 4000</td>
          </tr>
          <tr>
            <td>CCF Non-Member</td>
            <td>CNY 3600</td>
            <td>CNY 4500</td>
          </tr>
          <tr>
            <td>CCF Student Member</td>
            <td>CNY 2400</td>
            <td>CNY 3000</td>
          </tr>
          <tr>
            <td>Student Non-Member</td>
            <td>CNY 2800</td>
            <td>CNY 3500</td>
          </tr>
        </table>
      </div>

      <div class="section">
        <h2>1-Day Workshops & Tutorials Registration Fees</h2>
        <table class="fee-table">
          <tr>
            <th>Type</th>
            <th>Early</th>
            <th>Late/On-site</th>
          </tr>
          <tr>
            <td>CCF Member</td>
            <td>CNY 800</td>
            <td>CNY 1000</td>
          </tr>
          <tr>
            <td>CCF Non-Member</td>
            <td>CNY 1200</td>
            <td>CNY 1500</td>
          </tr>
          <tr>
            <td>CCF Student Member</td>
            <td>CNY 450</td>
            <td>CNY 600</td>
          </tr>
          <tr>
            <td>Student Non-Member</td>
            <td>CNY 600</td>
            <td>CNY 800</td>
          </tr>
        </table>
      </div>

      <div class="section">
        <h2>Add-Ons: Extra Tickets</h2>
        <table class="fee-table">
          <tr>
            <th>Category</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Reception</td>
            <td>CNY 350</td>
          </tr>
          <tr>
            <td>Banquet</td>
            <td>CNY 500</td>
          </tr>
        </table>
      </div>

      <div class="section notes">
        <h2>Notes</h2>
        <p>The main conference full registration package includes:</p>
        <ol>
          <li>Entrance for all parallel events.</li>
          <li>One reception ticket and one banquet ticket.</li>
        </ol>
        <p>Attendees who are registered only for the 1-day workshops & tutorials must purchase extra tickets for the reception and banquet if they wish to attend these events.</p>
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
      list-style-type: decimal;
      padding-left: 1.5rem;
      margin: 0.8rem 0;
      
      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
    }
  }

  .registration-link {
    text-align: center;
    margin: 2rem 0;

    .register-button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #004380;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #003366;
      }
    }
  }

  .deadline-info {
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    margin-top: 1rem;
    font-style: italic;
  }

  .fee-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;

    tr {
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      th, td {
        padding: 0.8rem;
        line-height: 1.6;
        color: #333;
        text-align: center;

        &:first-child {
          text-align: left;
          width: 40%;
        }
      }

      th {
        background-color: #f8f9fa;
        font-weight: bold;
      }
    }
  }

  .notes {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 4px;
    margin-top: 2rem;

    h2 {
      color: #004380;
      border-bottom: none;
    }
  }
}
</style>