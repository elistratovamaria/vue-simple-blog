<template>
  <my-input
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    placeholder="Поиск ..."
  ></my-input>
  <div class="app__buttons">
    <my-button @click="showDialog"> Создать пост </my-button>
    <my-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
    />
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
  <div class="observer" v-intersection="loadMorePosts"></div>
</template>

<script>
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>


<style>
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
