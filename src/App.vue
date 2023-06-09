<template>
  <div class="container">
    <post-form />
    <post-list />
  </div>
</template>

<script>
import PostList from '@components/PostList';
import PostForm from '@components/PostForm';

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Описание поста'},
        { id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        { id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
}

.post {
  margin: 0 0 15px 0;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 4px;
}

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
