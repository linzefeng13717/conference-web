<template>
  <el-header class="header">
    <div class="header-content">
      <!-- <div class="logo-container">
        <img src="../assets/logo.png" alt="APPT Logo" class="logo">
        <span class="conference-name">APPT 2025</span>
      </div> -->
      
      <el-menu 
        mode="horizontal" 
        :router="true"
        class="nav-menu"
        :ellipsis="false"
        background-color="darkblue"
        text-color="white"
        active-text-color="white">
        <el-menu-item index="/">Home</el-menu-item>
        
        <el-sub-menu index="contribute">
          <template #title>Contribute</template>
          <el-menu-item index="/contribute/call-for-paper">Call for Paper</el-menu-item>
          <el-menu-item index="/contribute/submission">Submission</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="organization">
          <template #title>Organization</template>
          <el-menu-item index="/organization/committee">Organization Committee</el-menu-item>
          <el-menu-item index="/organization/program-committee">Program Committee</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/speaker">Speaker</el-menu-item>
        <el-menu-item><a href="https://xupsh.github.io/ccc2021/" target="_blank" >Competition</a></el-menu-item>
        <!-- index="/competition" -->
        <el-sub-menu index="program">
          <template #title>Program</template>
          <el-menu-item index="/program/forums">Forums</el-menu-item>
          <el-menu-item index="/program/papers">Accepted Papers</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: darkblue;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 0;

  .header-content {
    max-width: 1400px; // 限制最大宽度
    margin: 0 auto; // 居中
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo-container {
    display: flex;
    align-items: center;
    min-width: 200px; // 确保logo区域有足够空间
    
    .logo {
      height: 40px;
      margin-right: 10px;
    }

    .conference-name {
      font-size: 1.2rem;
      font-weight: bold;
      color: whitesmoke;
    }
  }

  .nav-menu {
    border: none;
    flex: 1;
    background-color: darkblue;
    justify-content: flex-start;
    margin-left: 40px;

    :deep(.el-menu-item),
    :deep(.el-sub-menu__title) {
      padding: 0 16px;
      font-size: 1rem;
      display: flex;
      color: white;
      align-items: center;
      line-height: 60px;
      height: 60px;

      &:hover {
        background-color: transparent !important;
      }

      &.is-active {
        background-color: transparent !important;
      }
    }

    :deep(.el-menu-item) {
      &::after {
        display: none !important;
      }
    }

    :deep(.el-sub-menu) {
      &:hover {
        .el-sub-menu__title {
          background-color: transparent !important;
        }
      }

      .el-sub-menu__title {
        padding-right: 24px; // 为下拉箭头留出空间
        position: relative;

        .el-sub-menu__icon-arrow {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          color: white; // 箭头颜色设为白色
          font-size: 12px; // 调整箭头大小
        }
      }
    }
  }
}

// 响应式设计
@media screen and (max-width: 1200px) {
  .header {
    .nav-menu {
      margin-left: 20px;

      :deep(.el-menu-item),
      :deep(.el-sub-menu__title) {
        padding: 0 12px;
      }

      :deep(.el-sub-menu__title) {
        padding-right: 20px;
      }
    }
  }
}
</style> 