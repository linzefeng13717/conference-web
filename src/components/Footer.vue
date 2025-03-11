<template>
  <footer class="footer">
    <div class="copyright">
      © 2025 APPT Conference. All rights reserved. 
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
        沪ICP备2025115986号
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #004380;
  color: #fff;
  padding: 20px 0;
  text-align: center;

  .copyright {
    font-size: 0.9rem;
    opacity: 0.8;
    
    a {
      color: #fff;
      text-decoration: none;
      margin-left: 10px;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style> 