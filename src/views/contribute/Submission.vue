<template>
  <page-base title="Submission">
    <div class="submission-guidelines">
      <!-- <h2>Submission Guidelines</h2> -->
      <div class="guidelines-content">
        <p>
          Submitted papers must be unpublished and not currently under consideration elsewhere for publication. Only electronic submissions with PDF format will be considered. Submissions in PDF format should be up to 12 pages (full paper) in the <b>Springer LNCS style</b> , which can be downloaded from the Springer Web site. Priority is given to full papers of significant scientific content. The page limit for technical content (including all tables and figures). Accepted papers will be included in the proceedings of APPT 2021.<br/>
          <b>The submission web page for APPT 2021 is:</b><br/>
          <a href="https://easychair.org/conferences/?conf=appt2021"><b>https://easychair.org/conferences/?conf=appt2021</b></a><br/>
          For your convenience, we have summarized in the Author Guidelines document how a proceedings paper should be structured, how elements (headings, figures, references) should be formatted using the predefined styles of LNCS, etc. The PDF of the Authors Guidelines can be downloaded <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">here</a>. Springer has developed LaTeX style files and Word templates to help you prepare your paper. LaTeX is the preferred format (especially for texts containing several formulae), but Word templates are also available. Zip files containing the complete sets of instructions and templates for the different text preparation systems can be downloaded from <a href="https://www.springer.com">https://www.springer.com</a>. You can also find all the details about the author instructions on this website.<br/>
          In order to ensure that the reviewing effort is focused on the highest quality submissions, the reviewing process will be a two-step one. (1) The program chairs will filter out submissions deemed inappropriate, either due to writing, topics or content, and such papers will not receive reviews, only a rejection notice; all authors will be notified whether their paper passed or not this first filtering stage. (2) The papers will then be distributed to program committee members for a traditional and thorough reviewing process.<br/>
          APPT 2021 utilizes a double-blind review process. The authors should not apprise any information about their names or institutions in the submitted paper. Besides authors' names and institutions, other hints of identity should also be removed from the submitted paper. The authors should also be careful when naming files mentioned in the paper, for example, file names like Joe.Smith.dvi should be removed.<br/>
          It is also important for the authors to use care in referring to related work, especially their own. Citation of their own previous work is still required, as it is necessary for the reviewer to grasp the context. However, the authors must not use any terms like "my" or "our" to refer previous work. Instead, they should discuss their own past work in the third person. The authors should also cite anonymous work when necessary, meanwhile, they should also send the deanonymized reference to the PC chair in separate email.<br/>
        </p>
        <!-- <p>
          Papers should be submitted electronically through the conference submission system.
          All submissions must be original and not simultaneously submitted to another journal or conference.
        </p>
        
        <h3>Paper Format</h3>
        <ul>
          <li>Papers must be written in English</li>
          <li>Maximum length: 12 pages including figures and references</li>
          <li>Format: Follow the Springer LNCS template</li>
          <li>Submit in PDF format</li>
        </ul>

        <el-button type="primary" class="submit-button">
          Submit Your Paper
        </el-button>

        <div class="template-download">
          <h3>Templates</h3>
          <div class="template-buttons">
            <el-button>LaTeX Template</el-button>
            <el-button>Word Template</el-button>
          </div>
        </div> -->
      </div>
    </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
</script>

<style lang="scss" scoped>
.submission-guidelines {
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .guidelines-content {
    p {
      margin-bottom: 20px;
      line-height: 1.6;
    }

    h3 {
      margin: 30px 0 15px;
      font-size: 1.5rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 30px;

      li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
    }

    .submit-button {
      display: block;
      margin: 40px auto;
      padding: 12px 30px;
      font-size: 1.1rem;
    }

    .template-download {
      text-align: center;
      margin-top: 40px;

      h3 {
        margin-bottom: 20px;
      }

      .template-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
      }
    }
  }
}
</style> 