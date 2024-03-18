<script setup lang='ts'>
import type { QuoteBlockInfo } from '@/types/block';
import { useForm, useField, useFieldArray } from 'vee-validate';

const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

const emits = defineEmits(['change'])

const {values, validate, defineInputBinds} = useForm()
const {fields, push} = useFieldArray('blocks')

const content = defineInputBinds('content')
</script>
<template>
  <div>
    {{ props.blockInfo.type }}
  </div>
    <!-- {{ props.blockInfo.type }} -->
    <input class="content-input" v-bind="content"  @change="emits('change', $event.target.value)"/>
    <input v-for="field in fields" :key="field.key" class="content-input" v-model="field.value"/>
    <button @click="push(new Date().toLocaleTimeString())">添加</button>
  
</template>


<style scoped>
.content-input {
  border-radius: 8px;
  width: 100%;
  margin: 10px 0 10px 0;
  padding: 0 8px;
  height: 32px;
  outline-style: none;
  border: 1px solid var(--color-gray-400);
}
</style>