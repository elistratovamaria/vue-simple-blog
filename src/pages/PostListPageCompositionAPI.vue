<template>
  <my-input
    v-model="searchQuery"
    placeholder="Поиск ..."
  ></my-input>
  <div class="app__buttons">
    <my-select
      v-model="selectedSort"
      :options="sortOptions"
    />
  </div>
  <post-list
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isPostsLoading"
  />
  <div v-else>Идет загрузка...</div>
</template>

<script>
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { usePosts } from "../hooks/usePosts";
import useSortedPosts from "../hooks/useSortedPosts";
import useSortedAndSearchedPosts from "../hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { sortedAndSearchedPosts, searchQuery } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      sortedAndSearchedPosts,
      searchQuery,
    };
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
