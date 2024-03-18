import { ref } from "vue";
import { defineStore } from "pinia";
import { blocks as blocksData } from "@/mocks/blocks";
// import type { BlockInfo } from "@/types/block";

export const useAppEditorStore = defineStore('appStore', () => {
  const currentBlockId = ref<string | null>(null)
  const blocks = ref(blocksData)

  function selectBlock(id: string) {
    currentBlockId.value = id
    // console.log(currentBlockId.value)
  }

  function updateBlocks(newBlocks: typeof blocksData) {
    blocks.value = newBlocks
  }

  function updateBlock(id: string, content?: string ) {
    blocks.value = blocks.value.map((block) => {
      if (block.id === id) {
        block.props.content = content
      }
      return block
    })
  }
  return {currentBlockId, blocks, selectBlock, updateBlock, updateBlocks}
})