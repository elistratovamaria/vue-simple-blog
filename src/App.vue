<template>
  <div class="container">
    <my-button
      @click="showDialog"
    >
    Создать пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list
      :posts="posts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import axios from 'axios';
export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        throw new Error(e);
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
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
