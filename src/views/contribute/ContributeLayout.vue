<template>
  <div class="contribute-layout">
    <div class="hero-container">
      <div class="hero-section">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contribute-layout {
  .hero-container {
    padding: 10px 10px;  // 恢复到和Home.vue一样的内边距
    background-color: #fff;
  }

  .hero-section {
    position: relative;
    height: 40vh;  // 进一步减小高度
    overflow: hidden;
    border-radius: 15px;
    background: #fff;
    max-width: 900px;  // 进一步减小最大宽度
    margin: 0 auto;
    
    .content-wrapper {
      width: 100%;    
      height: 100%;   
      object-fit: cover;  
      max-width: 700px;  // 减小内容区域宽度
      margin: 0 auto;
      padding: 20px;
    }
  }
}
</style> 