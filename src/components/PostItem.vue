<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <my-button type="button">Удалить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from './ui/MyButton';

export default {
  components: {
    MyButton
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}

</script>

<style>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px 0;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 4px;
}
</style>