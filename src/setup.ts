// 物料插件化
import type { BlockType } from "./types/block";
import type { App } from "vue";
import QuoteBlock from "./blocks/basic/QuoteBlock.vue";
import HeroTitleBlock from '@/blocks/basic/HeroTitleBlock.vue';
import ViewBlock from '@/blocks/basic/ViewBlock.vue';
import ChartBlock from '@/blocks/basic/ChartBlock.vue';
import ImageBlock from '@/blocks/basic/ImageBlock.vue';
import ButtonBlock from '@/blocks/external/ButtonBlock.vue';
import FormBlock from '@/blocks/external/FormBlock.vue';
import NotesBlock from '@/blocks/external/NotesBlock.vue';

// 定义基础物料*5
const baseBlocks = [
  {
    type: 'quote',
    material: QuoteBlock
  },
  {
    type: 'heroTitle',
    material: HeroTitleBlock
  },
  {
    type: 'view',
    material: ViewBlock
  },
  {
    type: 'chart',
    material: ChartBlock
  },
  {
    type: 'image',
    material: ImageBlock
  }
]

class BlockSuite {
  private blocks = baseBlocks
  constructor() {}
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block: any) {
    this.blocks.push(block)
  }
  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite = new BlockSuite()

blockSuite.addBlock({
  type: 'button',
  material: ButtonBlock
})
blockSuite.addBlock({
  type: 'form',
  material: FormBlock
})
blockSuite.addBlock({
  type: 'notes',
  material: NotesBlock
})

const blocksMap = blockSuite.getBlocksMap()

export const blocksMapSymbol = Symbol('blocksMap')

export const setup = (app: App<Element>) => {
  const ins = {
    install(app: App<Element>) {
      app.provide(blocksMapSymbol, blocksMap)

      app.config.globalProperties.$blocksMap = blocksMap
    }
  }
  app.use(ins)
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $blocksMap: any 
  }
}
