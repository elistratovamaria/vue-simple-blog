import axios from "axios";
import { ref, onMounted } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const page = ref(1);
  const fetching = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: page.value,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(
        response.headers["x-total-count"] / limit
      );
      posts.value = response.data;
    } catch (e) {
      throw new Error(e);
    } finally {
      isPostsLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    posts,
    totalPages,
    isPostsLoading
  }
}