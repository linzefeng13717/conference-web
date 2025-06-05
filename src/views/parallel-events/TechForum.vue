<template>
    <PageBase title="Technology & Innovation Forum">
      <div class="document-container">
        <div class="header-section">
          <h1>Technology & Innovation Forum</h1>
          <p class="date-location">July 15, Athens, Greece</p>
        </div>
  
        <div class="section">
          <h2>Introduction</h2>
          <p>The APPT 2025 Technology & Innovation Forum is an event that foster collaboration across academic researchers and technology professionals. Our experts will showcase cutting-edge technologies and demonstrate innovative solutions to solve real-world problems. Join us to see firsthand how advanced computing technology is reshaping the future. The forum will feature 1 invited keynote speakers, and 6-8 discussion topics.</p>
        </div>
  
        <div class="section">
          <h2>Tech Forums Co-Chairs</h2>
          <div class="chairs-list">
            <p>Jidong Zhai, Tsinghua University</p>
            <p>Yang Hu, Tsinghua University</p>
          </div>
        </div>
  
        <div class="section">
          <h2>Talk Schedule</h2>
          <p>TBD</p>
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
  
      .date-location {
        color: #666;
        font-size: 1.2rem;
        // font-style: italic;
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
  
    .chairs-list {
      p {
        color: #333;
        line-height: 1.6;
        margin: 0.5rem 0;
      }
    }
  }
  </style> 