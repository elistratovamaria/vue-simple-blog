<template>
  <form class="form" @submit.prevent action="#" method="post">
    <h3 class="form__title">Создание поста</h3>
    <input
      class="form__input"
      :value="title"
      @input="title = $event.target.value"
      type="text"
      placeholder="Название"
    />
    <input
      class="form__input"
      :value="body"
      @input="body = $event.target.value"
      type="text"
      placeholder="Описание"
    />
    <button class="form__button" @click="createPost" type="form__submit">
      Создать
    </button>
  </form>
</template>

<script>
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
  align-self: center;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease-out;
  cursor: pointer;
}

.form__button:hover,
.form__button:focus {
  opacity: 0.8;
}

.form__button:active {
  opacity: 0.6;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
}
</style>