<template>
  <footer class="footer">
    <!-- Sponsors Section -->
    <div class="sponsors-section">
      <div class="sponsor-tier">
        <h2>Diamond Sponsors</h2>
        <div class="sponsor-logos">
          <!-- 赞助商logo -->
        </div>
      </div>
      <div class="sponsor-tier">
        <h2>Platinum Sponsors</h2>
        <div class="sponsor-logos">
          <!-- 赞助商logo -->
        </div>
      </div>
      <div class="sponsor-tier">
        <h2>Gold Sponsors</h2>
        <div class="sponsor-logos">
          <!-- 赞助商logo -->
        </div>
      </div>
    </div>

    <!-- 原有的 Partners Section
    <div class="partners-section">
      <h2 class="section-title">PARTNERS & SPONSORS</h2>
      <div class="footer-content">
        <div class="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li><a href="#">Email</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Address</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Supporters</h3>
          <ul>
            <li><a href="#">Supporter 1</a></li>
            <li><a href="#">Supporter 2</a></li>
            <li><a href="#">Supporter 3</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="copyright">
      © Copyright 2025 Design by xxx
    </div> -->
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #004380;
  color: #fff;
  padding: 40px 0 20px;

  .sponsors-section {
    max-width: 1200px;
    margin: 0 auto 40px;
    padding: 0 20px;

    .sponsor-tier {
      margin-bottom: 30px;

      h2 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 20px;
        color: #fff;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .sponsor-logos {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        
        img {
          max-height: 60px;
          filter: brightness(0) invert(1); // 使logo变为白色
          opacity: 0.8;
          transition: opacity 0.3s;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .partners-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .section-title {
      text-align: center;
      font-weight: bold;
      margin-bottom: 30px;
      text-transform: uppercase;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;

      .footer-column {
        flex: 1;
        min-width: 200px;

        h3 {
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            margin-bottom: 8px;

            a {
              color: #fff;
              text-decoration: none;
              opacity: 0.8;
              transition: opacity 0.3s;

              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .copyright {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 0.9rem;
    opacity: 0.8;
  }
}
</style> 