import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main';
import PostListPage from '../pages/PostListPage';
import About from '../pages/About';
import PostPage from '../pages/PostPage';
import PostListPageWithStore from '../pages/PostListPageWithStore';
import PostListPageCompositionAPI from '../pages/PostListPageCompositionAPI';

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
  },
  {
    path: '/composition',
    component: PostListPageCompositionAPI
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;