<template>
  <page-base title="Speakers">
    <div class="notstart">
      <b>This event has not been determined yet, but will be available soon.
      Sorry for the inconvenience. </b> 
      </div>
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const dialogVisible = ref(false)
const selectedSpeaker = ref(null)

const speakers = ref([
  {
    name: "Prof. Alan Turing",
    title: "Distinguished Professor",
    affiliation: "University of Computing",
    image: "https://img1.qunarzz.com/travel/d4/1808/54/b16fa07503233b5.jpg_r_640x480x70_d4008e38.jpg",
    talkTitle: "The Future of Artificial Intelligence",
    bio: "Professor Turing is a renowned expert in artificial intelligence and computing theory..."
  },
  {
    name: "Dr. Grace Hopper",
    title: "Chief Scientist",
    affiliation: "Tech Research Institute",
    image: "https://img1.qunarzz.com/travel/d4/1808/54/b16fa07503233b5.jpg_r_640x480x70_d4008e38.jpg",
    talkTitle: "Innovations in Programming Languages",
    bio: "Dr. Hopper is a pioneer in computer programming and software development..."
  }
])

const showBio = (speaker) => {
  selectedSpeaker.value = speaker
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.notstart{
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 40px;
}

.speakers-container {
  .speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    
    .speaker-card {
      transition: transform 0.3s;
      
      &:hover {
        transform: translateY(-5px);
      }

      .speaker-image {
        height: 200px;
        overflow: hidden;
        margin: -20px -20px 20px;
        
        .el-image {
          width: 100%;
          height: 100%;
        }
      }

      .speaker-info {
        text-align: center;

        h3 {
          font-size: 1.4rem;
          margin-bottom: 8px;
          color: #2c3e50;
        }

        h4 {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 8px;
        }

        .affiliation {
          color: #666;
          margin-bottom: 15px;
        }

        .talk-info {
          margin: 15px 0;
          text-align: left;

          h5 {
            font-weight: bold;
            margin-bottom: 5px;
          }

          p {
            color: #666;
          }
        }
      }
    }
  }
}
</style> 