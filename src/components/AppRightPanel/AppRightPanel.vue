<script setup lang='ts'>
import { computed } from 'vue';
import QuoteSetting from './QuoteSetting.vue'
import { blocks } from '@/mocks/blocks'
import { useAppEditorStore } from '@/stores/appEditor';
import { blocksBaseMeta } from '@/constants/blocksBaseMeta';

const appEditorStore = useAppEditorStore()

const blocksMap = computed(() => {
  return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
})

const currentBlockInfo = computed(() => {
  console.log(appEditorStore.currentBlockId)
  if(!appEditorStore.currentBlockId) return null
  console.log(blocksMap.value[appEditorStore.currentBlockId])
  return blocksMap.value[appEditorStore.currentBlockId]

})
console.log(currentBlockInfo)

</script>
<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header" :class="currentBlockInfo">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-oanel-content">
        <QuoteSetting :blockInfo="currentBlockInfo" @change="(val) => appEditorStore.updateBlock(currentBlockInfo().id, val)" />
      </div>
      
    </template>
    

  </div>
</template>


<style scoped>
.app-right-panel-wrapper {
  width: var(--panel-width);

}

.app-right-panel-header {
  height: 44px;
  font-weight: var(--font-weight-bolder);
  padding: 0 16px 0 20px;
  line-height: 44px;
}

.app-right-oanel-content {
  padding: 0 16px 0 20px;
}
</style>