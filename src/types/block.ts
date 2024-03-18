export type BasicBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
  id: string,
  type: BlockType,
  label: string
}

export interface HeroTitleBlockInfo extends BaseBlockInfo {
  props: {
    content: string
  }
}

export interface ViewBlockInfo extends BaseBlockInfo {
  props: {
    fields: {
      id: string,
      type: string
    },
    fieldsProps: {
      width: number,
      visible: boolean
    }[]
    data: {id: string, value: string}[]
  }
}

export interface QuoteBlockInfo extends BaseBlockInfo {
  props: {
    content: string
  }
}

export interface ImageBlockInfo extends BaseBlockInfo {
  props: {
    url: string
  }
}

export interface ButtonBlockInfo extends BaseBlockInfo {
  props: {
    text: string
  }
}

export interface FormBlockInfo extends BaseBlockInfo {
  props: {
    fields: {
      type: string,
      label: string,
      palceholder?: string,
      required?: boolean
    }[]
  }
}

export type BlockInfo = 
  // basic
  HeroTitleBlockInfo | ViewBlockInfo | QuoteBlockInfo | ImageBlockInfo
  // External
  | ButtonBlockInfo | FormBlockInfo