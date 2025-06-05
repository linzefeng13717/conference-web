<template>
  <PageBase title="Camera-Ready Instructions">
    <div class="document-container">
      <div class="header-section">
        <h1>Camera-Ready Instructions</h1>
      </div>

      <div class="section">
        <h2>Instructions</h2>
        <p>Please follow the instructions below and send camera-ready papers to the publication chair.</p>
      </div>

      <div class="section">
        <h2>Download Package</h2>
        <div class="download-section">
          <a href="/files/camera-ready-package.zip" download>Download Camera-Ready Package</a>
        </div>
      </div>

      <div class="section">
        <h2>Important Dates</h2>
        <div class="deadline-section">
          <p>Camera-Ready Submission Deadline: June 01, 2025</p>
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
  }

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

  .download-section {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 4px;
    text-align: center;

    a {
      color: #004380;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .deadline-section {
    p {
      color: #333;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
}
</style>