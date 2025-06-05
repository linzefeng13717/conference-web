<template>
  <PageBase title="Posters and Demo">
    <div class="document-container">
      <div class="header-section">
        <h1>Posters and Demo</h1>
      </div>

      <div class="section">
        <h2>TCArch Technical Meeting</h2>
        <ul>
          <li>
            <strong>DPU Accelerated Key-Value Store</strong><br>
            Bo Mao<br>
            Xiamen University
          </li>
          <li>
            <strong>From Chip Design to Chip Learning</strong><br>
            Zidong Du<br>
            Institute of Computing Technology
          </li>
          <li>
            <strong>Performance Optimization for Deduplication-based SSDs</strong><br>
            Suzhen Wu<br>
            Xiamen University
          </li>
          <li>
            <strong>Semi-Online Distillation via Prompt Joint Module Replacement</strong><br>
            Jingling Yuan<br>
            Wuhan University of Technology
          </li>
        </ul>
      </div>

      <div class="section">
        <h2>APPT Research Poster</h2>
        <ul>
          <li>
            <strong>DraEC: A Decentralized Routing Algorithm in Erasure-Coded Deduplication System</strong>
          </li>
          <li>
            <strong>Spatial-Aware Orchestration of LLM Attention on Waferscale Chips</strong>
          </li>
          <li>
            <strong>ACLP: Towards More Accurate Loop Prediction for High-Performance Processors</strong>
          </li>
          <li>
            <strong>DSL-SGD: Communication-Efficient Distributed Training via Delayed Gradient Synchronization</strong>
          </li>
          <li>
            <strong>Exploiting Large Language Models for Software-Defined Solid-State Drives Design</strong>
          </li>
          <li>
            <strong>Comber: QoS-aware and Efficient Deployment for Co-located Microservices and Best-Effort Tasks in Disaggregated Datacenters</strong>
          </li>
          <li>
            <strong>NISA-DV: Verification Framework for Neuromorphic Processors with Customized ISA</strong>
          </li>
          <li>
            <strong>ISChain: An In-Storage Version Chain Lookup Accelerator for Disk-Based MVCC Systems</strong>
          </li>
          <li>
            <strong>ReAC: A ReRAM-based Algorithm-Architecture Co-Design Accelerator for Recommendation Models</strong>
          </li>
          <li>
            <strong>Lembda: Optimizing LLM Inference on Embedded Platforms via CPU/FPGA Co-Processing</strong>
          </li>
          <li>
            <strong>EF-IMR: Embedded Flash with Interlaced Magnetic Recording Technology</strong>
          </li>
          <li>
            <strong>PerFedML: Benchmark for Personalized Federated Learning</strong>
          </li>
          <li>
            <strong>QDLoRA: Enhanced LoRA Fine-Tuning on Quantized LLMs via Integrated Low-Rank Decomposition</strong>
          </li>
        </ul>
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
      margin-bottom: 0.5rem;
    }
  }

  .section {
    margin-bottom: 2.5rem;

    h2 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin: 0.8rem 0;
      
      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.8rem;

        strong {
          color: #2c3e50;
        }
      }
    }
  }
}
</style>