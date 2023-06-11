import { ref, computed } from "vue";

export default function useSortedPosts(posts) {
  const selectedSort = ref('');
  const sortedPosts = computed(() => {
    return [...posts.value].sort((postA, postB) =>
      postA[selectedSort.value]?.localeCompare(postB[selectedSort.value])
    );
  });
  return {
    selectedSort,
    sortedPosts
  }
}