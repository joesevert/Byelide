<script setup lang='ts'>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    required: true
  }
})

console.log(props)
</script>
<template>
  <div class="button">
    button
  </div>
</template>


<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 80px;
  padding: 0px 12px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  background-color: var(--color-primary);
}
</style>