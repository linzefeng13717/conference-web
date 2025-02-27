<template>
  <el-header class="header">
    <div class="header-content">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="APPT Logo" class="logo">
        <span class="conference-name">APPT 2025</span>
      </div>
      
      <el-menu 
        mode="horizontal" 
        :router="true"
        class="nav-menu">
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

        <!-- <el-sub-menu index="registration">
          <template #title>Registration</template>
          <el-menu-item index="/registration/venue">Venue</el-menu-item>
          <el-menu-item index="/registration/guidelines">Guidelines</el-menu-item>
        </el-sub-menu> -->
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
  background: #fff;
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
      color: #2c3e50;
    }
  }

  .nav-menu {
    border: none;
    flex: 1;
    justify-content: flex-start; // 菜单项靠左对齐
    margin-left: 40px; // 与logo保持一定距离

    :deep(.el-menu-item),
    :deep(.el-sub-menu__title) {
      padding: 0 16px; // 减小菜单项之间的间距
      font-size: 0.95rem; // 稍微减小字体大小
      display: flex;
      align-items: center;
      line-height: 60px;
      height: 60px;
    }

    :deep(.el-sub-menu__title) {
      padding-right: 24px; // 为下拉箭头留出空间
      position: relative;

      .el-sub-menu__icon-arrow {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    :deep(.el-sub-menu) {
      &:hover {
        .el-sub-menu__title {
          color: var(--el-menu-hover-text-color);
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