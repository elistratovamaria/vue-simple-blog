<template>
  <form class="form" @submit.prevent action="#" method="post">
    <h3 class="form__title">Создание поста</h3>
    <my-input
      v-model="post.title"
      v-focus
      type="text"
      placeholder="Название"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <my-button class="form__button"
      @click="createPost"
      type="submit"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
import MyInput from './ui/MyInput.vue';
export default {
  components: { MyInput },
  data() {
    return {
      post : {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form__title {
  margin: 0 0 20px 0;
}

.form__button {
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
}
</style>