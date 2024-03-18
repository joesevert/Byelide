<script setup lang='ts'>
import { toRaw } from 'vue';
import { Drag, Delete } from '@icon-park/vue-next';
import { useEnvStore } from '@/stores/debug';
import { useAppEditorStore } from '@/stores/appEditor'
import { smoothDnD, type DropResult, dropHandlers } from 'smooth-dnd';
import { arrayMove } from '@/utils/array'

import { SmoothDnDContainer } from '@/components/SmoothDnd/SmoothDndContainer';
import { SmoothDndDraggagle } from '@/components/SmoothDnd/SmoothDndDraggable';
import { storeToRefs } from 'pinia';

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

const envStore = useEnvStore()
const appEditorStore = useAppEditorStore()

const {currentBlockId, blocks} = storeToRefs(appEditorStore)
const {selectBlock, updateBlocks} = appEditorStore

const applyDrag = <T extends any[]>(arr: T, dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult

  const result = [...arr]
  if(addedIndex === null) return result

  // 添加
  if(addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, {
      id: `${Math.random()}`, 
      ...payload
    })
  }
  // 移动
  if(addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }
  return result
}

</script>
<template>
  <SmoothDnDContainer
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
  >
    <SmoothDndDraggagle v-for="(block, i) in blocks" :key="block.id">
      <div class="block-wrapper" @click.stop="selectBlock(block.id)" :class="block.id">
        <component
          :is="$blocksMap[block.type].material"
          class="block"
          :blockInfo="block"
          :id="block.id"
        />
        <div
          :class="[
            'block-wrapper-indicator',
            {shown: envStore.debug, selected: currentBlockId === block.id}
          ]"
        >
          <div class="block-toolbar" v-if="currentBlockId === block.id">
            <div class="block-toolbar-item handle">
              <Drag></Drag>
            </div>
            <div class="block-toolbar-item" @click="blocks.splice(i, 1)">
              <Delete></Delete>
            </div>
          </div>
        </div>
      </div>
    </SmoothDndDraggagle>
  </SmoothDnDContainer>
</template>


<style scoped>
.block-wrapper {
  position: relative;
  margin-top: 16px;
  padding: 6px 4px;
}

.block {
  position: relative;
}

.block-wrapper-indicator {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 8px;
}

.block-wrapper-indicator.shown {
  border: 1px dashed var(--color-gray-300);
}

.block-wrapper-indicator.selected {
  border: 1px  solid var(--color-primary);
}

.block-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 5px;
  z-index: 1;
  gap: 4px;
  pointer-events: visible;
}

.block-toolbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.block-toolbar-item.handle {
  cursor: grab;
}


</style>