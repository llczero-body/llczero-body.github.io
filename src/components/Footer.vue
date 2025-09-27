<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const technologies = [
  { name: 'Vue 3', icon: 'vuejs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Vite', icon: 'vite' },
  { name: 'SCSS', icon: 'sass' },
]
</script>

<template>
   <el-affix style="width: 100%" position="bottom" :offset="0">
  <FrostedGlass>
    <footer class="footer-wrapper  frosted-calss-text">
      <div class="footer-content">
        <div class="tech-section">
          <div class="tech-list">
            <span v-for="tech in technologies" :key="tech.name" class="tech-item">
              {{ tech.name }}
            </span>
          </div>
        </div>
        
        <div class="copyright-section">
          <p>&copy; {{ currentYear }} llczero-body. 保留所有权利。</p>
          <p class="built-with">使用现代Web技术构建</p>
        </div>
      </div>
    </footer>
  </FrostedGlass>
  </el-affix>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .tech-section {
      h3 {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: #fff;
      }

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .tech-item {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          transition: all 0.3s ease;

          &:hover {
            cursor: pointer;
            transform: translateY(-2px);
          }
        }
      }
    }

    .copyright-section {
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);

      p {
        color: #303133;
        margin: 0.5rem 0;
        font-size: 0.9rem;
      }

      .built-with {
        font-style: italic;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .footer-wrapper {
    .footer-content {
      .tech-section {
        .tech-list {
          justify-content: center;

          .tech-item {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>