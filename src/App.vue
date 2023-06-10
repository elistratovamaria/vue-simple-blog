<template>
  <div class="app">
    <my-input v-model="searchQuery" placeholder="Поиск ..."></my-input>
    <div class="app__buttons">
      <my-button @click="showDialog"> Создать пост </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div class="observer" ref="observer"></div>
    <!-- <div class="page-wrapper">
      <div 
        class="page" 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        :class="{
          'page--current': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </div> -->
  </div>
</template>

<script>
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import axios from "axios";
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
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        throw new Error(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((postA, postB) =>
        postA[this.selectedSort]?.localeCompare(postB[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // }
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

.page-wrapper {
  display: flex;
  gap: 5px;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  border: 1px solid teal;
  cursor: pointer;
}

.page--current {
  color: white;
  background-color: teal;
}

.observer {
  height: 5px;
}
</style>
