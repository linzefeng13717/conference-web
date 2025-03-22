<template>
    <page-base title="Steering Committee">
      <div class="committee-container">
        <div v-for="(section, index) in committees" 
             :key="index" 
             class="committee-section">
          <h2>{{ section.title }}</h2>
          <div class="members">
            <el-card v-for="(member, mIndex) in section.members" 
                     :key="mIndex"
                     class="member-card">
              <div class="member-info">
                <div class="avatar">
                  <el-avatar 
                    :size="160" 
                    :src="getMemberImage(member.name)"
                    @error="handleImageError"
                  >
                    <img :src="peopleImage"/>
                  </el-avatar>
                </div>
                <div class="details">
                  <h3>{{ member.name }}</h3>
                  <p>{{ member.affiliation }}</p>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </page-base>
  </template>
  
  <script setup>
  import PageBase from '@/components/PageBase.vue'
  import { ref } from 'vue'
  
  const getMemberImage = (name) => {
    // 特殊情况处理
    const specialCases = {
      'Albert Zomaya': 'AlbertZomava',
      'Anand Sivasubramaniam': 'Anand_Sivasubramaniam',
      'Jack Dongarra': 'jack-dongarra',
      'Raikumar Buyya': 'Raikumar Buvya',
      'Schahram Dustdar': 'Schahram Dustdar,',
      'Yunji Chen': 'yunji chen'
    }
  
    // 检查是否是特殊情况
    const imageName = specialCases[name] || name
  
    // 根据不同的文件扩展名尝试获取图片
    const formats = {
      'Minyi Guo': '.jpeg',
      'Albert Zomaya': '.png',
      'Lieven Eeckhout': '.png',
      'Schahram Dustdar': '.png'
    }
  
    // 获取文件扩展名，默认为 .jpg
    const format = formats[name] || '.jpg'
    
    return `/images/${imageName}${format}`
  }
  
  // 修改默认头像
  const peopleImage = '/images/people_default.png'
  
  // 添加图片加载错误处理
  const handleImageError = (e) => {
    e.target.src = peopleImage
  }
  
  const committees = ref([
    {
      title: "Committee Members",
      members: [
        { name: "Ahmed Louri", affiliation: "George Washington University" },
        { name: "Albert Zomaya", affiliation: "The University of Sydney" },
        { name: "Anand Sivasubramaniam", affiliation: "Penn State University" },
        { name: "Bingsheng He", affiliation: "National University of Singapore" },
        { name: "Dean Tullsen", affiliation: "University of California, San Diego" },
        { name: "Hai Jin", affiliation: "Huazhong University of Science and Technology" },
        { name: "Jack Dongarra", affiliation: "University of Tennessee" },
        { name: "Jean-Luc Gaudiot", affiliation: "University of California, Irvine" },
        { name: "Jiwu Shu", affiliation: "Tsinghua University" },
        { name: "Josep Torrellas", affiliation: "University of Illinois at Urbana-Champaign" },
        { name: "Lieven Eeckhout", affiliation: "Ghent University" },
        { name: "Minyi Guo", affiliation: "Shanghai Jiao Tong University" },
        { name: "Per Stenstrom", affiliation: "Chalmers University of Technology" },
        { name: "Raikumar Buyya", affiliation: "The University of Melbourne" },
        { name: "Schahram Dustdar", affiliation: "Vienna University of Technology" },
        { name: "Weisong Shi", affiliation: "Wayne State University" },
        { name: "Xian-He Sun", affiliation: "Illinois Institute of Technology" },
        { name: "Yiran Chen", affiliation: "Duke University" },
        { name: "Yuan Xie", affiliation: "University of California, Santa Barbara" },
        { name: "Yunji Chen", affiliation: "Chinese Academy of Sciences" }
      ]
    }
  ])
  </script>
  
  <style lang="scss" scoped>
  .committee-container {
    .committee-section {
      margin-bottom: 50px;
  
      h2 {
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 30px;
        color: #2c3e50;
      }
  
      .members {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: 30px;
        
        .member-card {
          transition: transform 0.3s;
          
          &:hover {
            transform: translateY(-5px);
          }
  
          .member-info {
            display: flex;
            align-items: center;
            gap: 40px;
  
            .avatar {
              .el-avatar {
                border: 3px solid #004380;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                width: 160px;
                height: 160px;
              }
            }
  
            .details {
              flex: 1;
              h3 {
                font-size: 1.4rem;
                margin-bottom: 10px;
                color: #2c3e50;
              }
  
              p {
                color: #666;
                font-size: 1.1rem;
              }
            }
          }
        }
      }
    }
  }
  </style> 