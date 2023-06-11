import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((postA, postB) =>
        postA[state.selectedSort]?.localeCompare(postB[state.selectedSort])
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      commit('setPostLoading', true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(
          response.headers["x-total-count"] / state.limit
        ));
        commit('setPosts', response.data);
      } catch (e) {
        throw new Error(e);
      } finally {
        commit('setPostLoading', false);
      }
    },
    async loadMorePosts({state, commit}) {
      commit('setPage', state.page += 1);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(
          response.headers["x-total-count"] / state.limit
        ));
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  namespaced: true
}