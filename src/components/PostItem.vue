<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <my-button 
        type="button"
        @click="$router.push(`/posts/${post.id}`)"
      >Открыть
      </my-button>
      <my-button 
        type="button"
        @click="$emit('remove', post)"
      >Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
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

.post__buttons {
  display: flex;
  gap: 15px;
}
</style>