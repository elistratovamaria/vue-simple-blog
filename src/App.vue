<template>
  <div>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Описание поста'},
        { id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        { id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
      ]
      
    }
  },
  
}
</script>


<style>
* {
  box-sizing: border-box;
}

.post {
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>
