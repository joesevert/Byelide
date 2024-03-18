<script setup lang='ts'>
import { ref } from 'vue';
import {Page, SmartOptimization} from '@icon-park/vue-next'

import BlocksDrawer from './BlocksDrawer.vue';
import OutlineDrawer from './OutlineDrawer.vue';

type DrawerMode = 'outline' | 'blocks' | null

const isDrawerShow = ref<DrawerMode>('outline')
// console.log(isDrawerShow.value)

const toggleDrawer = (drawerMode: DrawerMode = null) => {
  if(drawerMode == isDrawerShow.value) {
    isDrawerShow.value = null
    return
  }
  isDrawerShow.value = drawerMode
}


</script>
<template>
  <div class="app-left-panel-wrapper">
    <div class="app-left-panel-bar" :style="{boxShadow: '1px 0px 0px var(--color-gray-300)'}">
      <div 
        :class="['app-left-panel-item', isDrawerShow === 'outline' && 'active']"
        @click="toggleDrawer('outline')"
      >
        <Page size="20" :style="{lineheight: 0.7}"/>
      </div>
      <div 
        :class="['app-left-panel-item', isDrawerShow === 'blocks' && 'active']"
        @click="toggleDrawer('blocks')"
      >
        <SmartOptimization size="20" :style="{lineheight: 0.7}"/>
      </div>
    </div>
    <Transition name="app-left-panel-drawer">
      <div v-if="!!isDrawerShow" class="app-left-panel-drawer">
        <div class="app-left-panel-drawer-content">
          <component 
            v-if="!!isDrawerShow"
            :is="isDrawerShow == 'outline' ? OutlineDrawer : BlocksDrawer"/>
        </div>      
      </div>
    </Transition>
  </div>
</template>


<style scoped>
.app-left-panel-wrapper {
  position: relative;
  display: flex;
  z-index: 4;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-left-panel-bar {
  width: 60px;
  height: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-left-panel-item {
  width: 42px;
  height: 42px;
  display: flex;
  margin: 8px 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  user-select: none;
}

.app-left-panel-item.active {
  color: var(--color-gray-900);
  background-color: var(--color-gray-200);
}

.app-left-panel-item:hover {
  background-color: var(--color-gray-200);
  transition: all 0.2s ease-in-out;
}

.app-left-panel-drawer {
  width: calc(var(--panel-width) - 60px);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
  overflow: hidden;
}

.app-left-panel-drawer-content {
  width: calc(var(--panel-width) - 60px);
  height: 100%;
  padding: 16px;
}
</style>