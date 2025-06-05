<template>
  <PageBase title="Accepted Papers">
    <div class="document-container">
      <div class="header-section">
        <h1>Accepted Papers</h1>
      </div>

      <div class="section">
        <h2>Regular Paper</h2>
        <ul>
          <li>
            <strong>NFMap: Node Fusion Optimization for Efficient CGRA Mapping with Reinforcement Learning</strong>
          </li>
          <li>
            <strong>DACO: Unlocking Latent Dataflow Opportunities in Edge-side SIMT Accelerators</strong>
          </li>
          <li>
            <strong>TwinStore: Secure Key-Value Stores Made Faster with Hybrid Trusted/Untrusted Storage</strong>
          </li>
          <li>
            <strong>QRAMsim: Efficiently Simulating, Analyzing, and Optimizing Large-scale Quantum Random Access Memory</strong>
          </li>
          <li>
            <strong>Unifying Two Operators with One PIM: Leveraging Hybrid Bonding for Efficient LLM Inference</strong>
          </li>
          <li>
            <strong>Achieving Efficient Temporal Graph Transformation on the GPU</strong>
          </li>
          <li>
            <strong>Cochain: Architectural Support Mechanism for Blockchain-based Task Scheduling</strong>
          </li>
          <li>
            <strong>ATLAS: Efficient Dynamic GNN System through Abstraction-Driven Incremental Execution</strong>
          </li>
          <li>
            <strong>The Bleak Future of Fully Homomorphic Encryption: from a Storage I/O Perspective</strong>
          </li>
          <li>
            <strong>A Unified Synthesis Framework for Dataflow Accelerators through Multi-Level Software and Hardware Intermediate Representations</strong>
          </li>
          <li>
            <strong>GASgraph: A GPU-accelerated Streaming Graph Processing System based on SubHPMAs</strong>
          </li>
          <li>
            <strong>Segmentation-Aware Optimization of Collective for Waferscale Chips</strong>
          </li>
          <li>
            <strong>Area-Efficient Automated Logic Design with Monte-Carlo Tree Search</strong>
          </li>
          <li>
            <strong>CeDMA: Enhancing Memory Efficiency of Heterogeneous Accelerator Systems Through Central DMA Controlling</strong>
          </li>
          <li>
            <strong>AsymServe: Demystifying and Optimizing LLM Serving Efficiency on CPU Acceleration Units</strong>
          </li>
          <li>
            <strong>LASM: A Lightweight and General TEE Secure Monitor Framework</strong>
          </li>
          <li>
            <strong>PAMM: Adaptive Memory Management for CXL-/UB-Based Heterogeneous Memory Pooling Systems</strong>
          </li>
        </ul>
      </div>

      <div class="section">
        <h2>Short Paper</h2>
        <ul>
          <li>
            <strong>DyQNet: Optimizing Dynamic Entanglement Routing with Online Request in Quantum Network</strong>
          </li>
          <li>
            <strong>Veyth: Adaptive Container Placement for Optimizing Cross-Server Network Traffic of Microservice Applications</strong>
          </li>
          <li>
            <strong>Identifying Potential Anomalous Operations in Graph Neural Network Training</strong>
          </li>
          <li>
            <strong>TokenSim: Enabling Hardware and Software Exploration for Large Language Model Inference Systems</strong>
          </li>
          <li>
            <strong>Defect-aware Task Scheduling and Mapping for Redundancy-Enhanced Spatial Accelerators</strong>
          </li>
          <li>
            <strong>Accelerating Large-Scale Out-of-GPU-Core GNN Training with Two-Level Historical Caching</strong>
          </li>
          <li>
            <strong>STAMP: Accelerating Second-order DNN Training Via ReRAM-based Processing-in-Memory Architecture</strong>
          </li>
          <li>
            <strong>Irregular Sparsity-Enabled Search-In-Memory Engine for Accelerating Spiking Neural Networks</strong>
          </li>
          <li>
            <strong>Understand Data Preprocessing for Effective End-to-End Training of DNN</strong>
          </li>
          <li>
            <strong>SparseTem: Boosting the Efficiency of CNN-Based Video Encoders by Exploiting Temporal Continuity</strong>
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