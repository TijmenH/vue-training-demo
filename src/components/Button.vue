<template>
  <button v-on:click="$emit('handle-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
};
</script>

<style scoped>
button {
  padding: 12px;
  background-color: #3662a8;
  color: #fff;
}
</style>
