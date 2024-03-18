<script setup lang='ts'>
import { ref } from 'vue';
import LaptopPreviewer from './LaptopPreviewer.vue';
import MobilePreviewer from './MobilePreviewer.vue';
import type { PreviewType } from './type';

const PreviewMode = ref<PreviewType>('laptop')

const handleModeChange = (mode: PreviewType) => {
  PreviewMode.value = mode
}

</script>
<template>
  <div class="layout-content">
    <LaptopPreviewer
      v-if="PreviewMode === 'laptop'"
      :key="'laptop'"
      :preview-mode="PreviewMode"
      @preview-mode-change="handleModeChange"
    />
    <MobilePreviewer
      v-if="PreviewMode === 'mobile'"
      :key="'Mobile'"
      :preview-mode="PreviewMode"
      @preview-mode-change="handleModeChange"
    />
  </div>
</template>


<style scoped>
.layout-content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  flex: 1;
  background-color: var(--color-gray-100);
}
</style>