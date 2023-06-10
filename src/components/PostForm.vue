<template>
  <form class="form" @submit.prevent action="#" method="post">
    <h3 class="form__title">Создание поста</h3>
    <input
      class="form__input"
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <input
      class="form__input"
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
export default {
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
.form__input {
  width: 100%;
  margin: 0 0 15px 0;
  padding: 10px 15px;
  border: 1px solid teal;
  border-radius: 4px;
  transition: 0.3s ease-out;
}

.form__input:hover,
.form__input:focus {
  opacity: 0.8;
}

.form__input:active {
  opacity: 0.6;
}

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