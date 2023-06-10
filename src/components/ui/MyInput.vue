<template>
  <input 
    class="input"
    type="text"
    :value="modelValue"
    @input="updateInput"
  >
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(evt) {
        this.$emit('update:modelValue', evt.target.value);
      }
    }
  }
</script>

<style scoped>
.input {
  width: 100%;
  margin: 0 0 15px 0;
  padding: 10px 15px;
  border: 1px solid teal;
  border-radius: 4px;
  transition: 0.3s ease-out;
}

.input:hover,
.form__input:focus {
  opacity: 0.8;
}

.input:active {
  opacity: 0.6;
}
</style>