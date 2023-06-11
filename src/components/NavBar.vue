<template>
  <div class="navbar">
    <p @click="$router.push('/')">Vue 3</p>
    <nav class="nav">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar {
  margin: -10px -20px 20px -20px;
  padding: 10px 20px;
  background-color: lightgrey;
  color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar p {
  cursor: pointer;
}
.nav {
  display: flex;
  gap: 15px;
}
</style>