import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main';
import PostListPage from '../pages/PostListPage';
import About from '../pages/About';
import PostPage from '../pages/PostPage';
import PostListPageWithStore from '../pages/PostListPageWithStore';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostListPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostPage
  },
  {
    path: '/store',
    component: PostListPageWithStore
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;