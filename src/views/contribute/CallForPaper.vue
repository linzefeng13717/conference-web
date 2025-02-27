<template>
  <page-base title="Call For Paper">
    <div class="topics-section">
      <h2>Topics of Interest</h2>
      <div class="topics-content">
        <p>
          We invite original paper submissions related to (but not limited to) the following topics:
        </p>
        <ul>
          <li><b>Parallel Architectures and Hardware Systems</b></li>
          <p>
            - General-purpose and domain-specific parallel architectures and accelerators<br/>
            - Memory systems for parallel and distributed systems<br/>
            - Networks and interconnects<br/>
            - Parallel I/O and storage systems<br/>
            - Power-efficient architectures<br/>
            - Warehouse-scale computer architectures and systems<br/>
            - Parallel and distributed embedded systems
          </p>
          <li><b>Software Foundations for Parallel Computing</b></li>
          <p>
            - Parallel programming languages, programming models and compilers<br/>
            - Domain-specific languages for parallel and distributed systems<br/>
            - Programming environments and tools<br/>
            - Runtime systems<br/>
            - Operating systems and system virtualization<br/>
            - Resource management<br/>
            - High availability, reliability and fault tolerance<br/>
            - Scalability in parallel systems and software<br/>
            - Performance modeling, analysis and tuning tools
          </p>
          <li><b>Distributed and Cloud computing</b></li>
          <p>
            - Reliability, availability and security in distributed and cloud systems<br/>
            - Distributed and cloud storage systems<br/>
            - Distributed caching, and query processing<br/>
            - Workload characterization of cloud systems<br/>
            - Managing, debugging, and diagnosing of cloud systems<br/>
            - Peer-to-peer computing<br/>
            - Grid computing<br/>
            - Pervasive and mobile computing architectures
          </p>
          <li><b>Parallel Algorithms and Applications</b></li>
          <p>
            - Design and analysis of novel numerical and combinatorial parallel algorithms<br/>
            - Protocols for resource management<br/>
            - Communication and synchronization on parallel and distributed systems<br/>
            - Parallel algorithms handling power, mobility, and resilience<br/>
            - Massively parallel applications<br/>
            - Fault-tolerance of algorithms<br/>
            - Network algorithms, scheduling and load balancing
          </p>
          <li><b>System Support for Emerging Applications</b></li>
          <p>
            - Natural language processing<br/>
            - Speech synthesis and recognition<br/>
            - Computer vision<br/>
            - Secure architecture<br/>
            - Trusted computing, Block Chain<br/>
            - Quantum computing
          </p>
        </ul>
      </div>
    </div>

    <!-- <div class="important-dates">
      <h2>Important Dates</h2>
      <div class="date-cards">
        <el-card v-for="(date, index) in importantDates" 
                 :key="index" 
                 class="date-card">
          <h3>{{ date.event }}</h3>
          <p>{{ date.date }}</p>
        </el-card>
      </div>
    </div> -->
  </page-base>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
import { ref } from 'vue'

const importantDates = ref([
  { event: "Paper Submission", date: "June 1, 2025" },
  { event: "Notification", date: "July 1, 2025" },
  { event: "Camera Ready", date: "August 1, 2025" },
  { event: "Conference", date: "September 1, 2025" }
])
</script>

<style lang="scss" scoped>
.topics-section {
  margin-bottom: 40px;
  
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .topics-content {
    max-width: 800px;
    margin: 0 auto;
    
    p {
      margin-bottom: 20px;
      line-height: 1.6;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
      
      li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
    }
  }
}

.important-dates {
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .date-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    .date-card {
      text-align: center;
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}
</style> 