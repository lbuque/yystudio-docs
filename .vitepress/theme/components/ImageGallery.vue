<template>
  <div class="image-gallery">
    <div class="gallery-container">
      <button 
        v-if="images.length > 2"
        @click="previousImage" 
        class="nav-button prev-button"
        :disabled="currentIndex === 0"
      >
        ‹
      </button>
      
      <div class="image-display">
        <div class="image-row">
          <div 
            v-for="(image, index) in visibleImages"
            :key="image.src"
            class="image-item"
            :class="{ 'single-image': visibleImages.length === 1 }"
          >
            <img :src="image.src" :alt="image.alt" />
            <div v-if="image.label" class="image-label">{{ image.label }}</div>
          </div>
        </div>
      </div>
      
      <button 
        v-if="images.length > 2"
        @click="nextImage" 
        class="nav-button next-button"
        :disabled="currentIndex >= images.length - imagesPerView"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentIndex = ref(0)

// 根据图片数量决定每次显示几张
const imagesPerView = computed(() => {
  return props.images.length <= 2 ? props.images.length : 2
})

const visibleImages = computed(() => {
  if (props.images.length <= 2) {
    return props.images
  }
  
  const endIndex = Math.min(currentIndex.value + imagesPerView.value, props.images.length)
  return props.images.slice(currentIndex.value, endIndex)
})

const nextImage = () => {
  if (currentIndex.value < props.images.length - imagesPerView.value) {
    currentIndex.value++
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToImage = (index) => {
  // 确保选中的图片在可见范围内
  if (props.images.length > 2) {
    const maxStartIndex = props.images.length - imagesPerView.value
    currentIndex.value = Math.min(index, maxStartIndex)
  }
}
</script>

<style scoped>
.image-gallery {
  margin: 20px 0;
}

.gallery-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  position: relative;
}

.image-display {
  flex: 1;
  max-width: 800px;
  text-align: center;
}

.image-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
}

.image-item {
  flex: 1;
  max-width: 50%;
  text-align: center;
}

.image-item.single-image {
  max-width: 100%;
}

.image-item img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-item img:hover {
  transform: scale(1.02);
}

.image-label {
  margin-top: 12px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.nav-button {
  background: #ffffff;
  border: 2px solid #e1e5e9;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.nav-button:hover:not(:disabled) {
  background: #007acc;
  color: white;
  border-color: #007acc;
  transform: scale(1.1);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .gallery-container {
    padding: 16px;
    gap: 12px;
  }
  
  .image-row {
    flex-direction: column;
    gap: 16px;
  }
  
  .image-item {
    max-width: 100%;
  }
  
  .image-item img {
    width: 250px;
    height: 250px;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .image-label {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .gallery-container {
    flex-direction: column;
    gap: 16px;
  }
  
  .image-item img {
    width: 200px;
    height: 200px;
  }
  
  .nav-button {
    position: relative;
  }
  
  .prev-button,
  .next-button {
    order: 2;
  }
  
  .image-display {
    order: 1;
  }
}
</style>
