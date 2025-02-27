<template>
  <div class="page-container">
    <div class="hero-banner">
      <img :src="bannerImage" :alt="title" class="banner-image">
      <h1 class="page-title">{{ title }}</h1>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  bannerImage: {
    type: String,
    default: "https://img1.qunarzz.com/travel/d4/1808/54/b16fa07503233b5.jpg_r_640x480x70_d4008e38.jpg"
  }
})
</script>

<style lang="scss" scoped>
.page-container {
  .hero-banner {
    position: relative;
    height: 33vh;
    overflow: hidden;

    .banner-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .page-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
  }

  .content {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
  }
}
</style> 