<template>
  <div class="app">
    <div class="app__buttons">
      <my-button @click="showDialog"> Создать пост </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import axios from "axios";
import MySelect from "./components/ui/MySelect.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        throw new Error(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((postA, postB) => postA[this.selectedSort]?.localeCompare(postB[this.selectedSort]));
    }
  },
  watch: {

  },
};
</script>


<style>
* {
  box-sizing: border-box;
}

.app {
  margin: 0 auto;
  padding: 0 20px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
