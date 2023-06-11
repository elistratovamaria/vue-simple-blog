<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

  export default {
    name: 'my-dialog',
    mixins: [toggleMixin]
  }
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  min-width: 300px;
  margin: auto;
  padding: 25px;
  background-color: white;
  border-radius: 12px;
}
</style>