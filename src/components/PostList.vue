<template>
  <div class="post" v-for="post in posts">
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
  </div>
</template>

<script>
</script>

<style scoped>
.post {
  margin: 0 0 15px 0;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 4px;
}
</style>