<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.button {
  padding: 10px 20px;
  text-align: center;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease-out;
  cursor: pointer;
}

.button:hover,
.button:focus {
  opacity: 0.8;
}

.button:active {
  opacity: 0.6;
}
</style>