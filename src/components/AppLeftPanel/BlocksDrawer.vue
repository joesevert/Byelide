<script setup lang='ts'>
import { blocksBaseMetaList } from '@/constants/blocksBaseMeta';
import { SmoothDnDContainer } from '../SmoothDnd/SmoothDndContainer';
import { SmoothDndDraggagle } from '../SmoothDnd/SmoothDndDraggable';

</script>
<template>
  <div class="blocks-drawer-wrapper">
    <h3 class="drawer-title">组件</h3>
    <SmoothDnDContainer
      behaviour="copy"
      group-name="blocks"
      orientation="vertical"
      :get-child-payload="(index: number) => blocksBaseMetaList[index]"
      tag="div"
      class="blocks-list"
    >
      <SmoothDndDraggagle v-for="d in blocksBaseMetaList" :key="d.type">
        <div class="blocks-item">
          <div class="block-icon-wrapper">
            <component :is="d.icon"/>
          </div>
          <span class="block-name">{{ d.name }}</span>
        </div>
      </SmoothDndDraggagle>
    </SmoothDnDContainer>
  </div>
</template>


<style scoped>
.blocks-drawer-wrapper {
  width: 100%;
}

.drawer-title {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bolder);
  margin-bottom: 8px;
}

.blocks-list {
  --grid-item-color: #1edb5b;
  display: grid;
  /* align-items: center; */
  grid-template-columns: repeat(3,1fr);
  gap: 2px;
  margin: 0 -12px;
  padding-bottom: 8px;
}

.blocks-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  transition: background-color 0.125s ease 0s;
  padding: 8px 0;
  cursor: pointer;
  user-select: none;
}

.blocks-item:hover {
  background-color: var(--color-gray-200);
}

.block-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-bottom: 4px;
  color: var(--color-white);
  font-size: var(--font-size-large);
  background-color: var(--grid-item-color);
}

.block-name {
  margin-top: 4px;
  font-size: var(--font-size-small);
}
</style>