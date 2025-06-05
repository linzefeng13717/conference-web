<template>
  <PageBase title="Workshops & Tutorials">
    <div class="document-container">
      <div class="section workshop-section">
        <h2>APPT 2025 Call for Workshops</h2>
        
        <div class="subsection">
          <h3>Introduction</h3>
          <p>The Advanced Parallel Processing Technologies (APPT) conference provides a premier platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, experiences, and challenges in the field of parallel processing. We invite proposals for workshops to be held in conjunction with the APPT conference, on July 14th, 2025. These workshops aim to explore novel ideas in specific areas of interest, foster collaboration, and facilitate discussions that can lead to new research directions.</p>
        </div>

        <div class="subsection">
          <h3>Topics</h3>
          <p>Workshops should align with the main conference's topics, including but not limited to:</p>
          <ul>
            <li>Parallel Architectures and Hardware Systems</li>
            <li>Software Foundations for Parallel Computing</li>
            <li>Distributed and Cloud Computing</li>
            <li>Parallel Algorithms and Applications</li>
            <li>System Support for Emerging Applications</li>
          </ul>
        </div>

        <div class="subsection">
          <h3>Important Dates</h3>
          <table class="info-table">
            <tr>
              <td>Workshop proposals due:</td>
              <td>May 1st, 2025</td>
            </tr>
            <tr>
              <td>Workshop notification:</td>
              <td>May 9th, 2025</td>
            </tr>
          </table>
          <p class="note">All deadlines are Anywhere on Earth (AoE)</p>
        </div>

        <div class="subsection">
          <h3>Submission Information</h3>
          <p>We welcome proposals for workshops that are either half-day or full-day in length. Proposals should be written in English, not exceed 5 pages, and include the following information:</p>
          <ul>
            <li>Title and acronym for the workshop</li>
            <li>Short biography of the organizers (5-10 lines)</li>
            <li>Abstract on the workshop theme</li>
            <li>Expected length of the workshop</li>
            <li>Publicity plan for attracting submissions or attendees</li>
            <li>Tentative list of Program Committee (PC) members with their affiliations</li>
          </ul>
          <p>Workshop proposals should be submitted to Workshop co-chairs directly via email. Please add <strong>[APPT Workshop Submission]</strong> in email title.</p>
          <div class="contact-info">
            <p>Amelie Chi Zhou: <a href="mailto:amelie.czhou@gmail.com">amelie.czhou@gmail.com</a></p>
            <p>Shadi Ibrahim: <a href="mailto:shadi.ibrahim@inria.fr">shadi.ibrahim@inria.fr</a></p>
          </div>
        </div>

        <div class="subsection">
          <h3>Workshop Co-Chairs</h3>
          <table class="info-table">
            <tr>
              <td>Amelie Chi Zhou</td>
              <td>Hong Kong Baptist University</td>
            </tr>
            <tr>
              <td>Shadi Ibrahim</td>
              <td>INRIA</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="section tutorial-section">
        <h2>APPT 2025 Call for Tutorials</h2>
        
        <div class="subsection">
          <h3>Introduction</h3>
          <p>The APPT 2025 Organizing Committee invites proposals for tutorials to be presented at the conference on <b>Monday, July 14th, 2025</b>. We seek high-quality tutorials on foundational and emerging topics relevant to parallel processing technology and of interest to the APPT community. Tutorials will provide in-depth coverage of specific areas within parallel processing, distributed systems, heterogeneous computing, or related fields. Each tutorial will be either a <b>half-day</b> or <b>full-day</b> session.</p>
        </div>

        <div class="subsection">
          <h3>Proposal Requirements</h3>
          <p>Proposals should be one to two pages long and include the following information:</p>
          <ol>
            <li>Title of the tutorial</li>
            <li>Abstract of the tutorial</li>
            <li>Organizers (names, email addresses, affiliations and short bios)</li>
            <li>Expected duration of the workshop/tutorial (i.e., half day or full day)</li>
            <li>Past Occurrences (if applicable). Provide the location (i.e., which conference), date, number of published papers (if any), and number of attendees at the last event</li>
            <li>Presenters (names, short bios and topics)</li>
            <li>Expected minimum and maximum number of participants</li>
          </ol>
        </div>

        <div class="subsection">
          <h3>Important Dates</h3>
          <table class="info-table">
            <tr>
              <td>Submission Deadline:</td>
              <td>April 29th, 2025</td>
            </tr>
            <tr>
              <td>Notification:</td>
              <td>May 6th, 2025</td>
            </tr>
          </table>
          <p class="note">All deadlines are Anywhere on Earth (AoE)</p>
        </div>

        <div class="subsection">
          <h3>Submission Information</h3>
          <p>Proposals should be submitted as a PDF file of at most 2 pages. Please submit tutorial proposal to <a href="mailto:xfhelen@sjtu.edu.cn">xfhelen@sjtu.edu.cn</a></p>
        </div>

        <div class="subsection">
          <h3>Tutorial Co-Chairs</h3>
          <table class="info-table">
            <tr>
              <td>Xiaofeng Hou</td>
              <td>Shanghai Jiao Tong University</td>
            </tr>
            <tr>
              <td>Shaolei Ren</td>
              <td>UC Riverside</td>
            </tr>
          </table>
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
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    h2 {
      color: #2c3e50;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }
  }

  .subsection {
    margin-bottom: 2rem;

    h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    p {
      color: #333;
      line-height: 1.6;
      margin: 0.8rem 0;
    }

    ul, ol {
      padding-left: 1.5rem;
      margin: 0.8rem 0;
      
      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
    }
  }

  .info-table {
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

  .note {
    font-style: italic;
    color: #666;
    margin-top: 0.5rem;
  }

  .contact-info {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;

    p {
      margin: 0.5rem 0;
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