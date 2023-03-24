import { createRouter, createWebHistory } from 'vue-router';
import RepoDetails from '@/components/RepoDetails.vue';
import RepoList from '@/components/RepoList.vue';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },  
  {
      path: '/repos',
      name: 'RepoList',
      component: RepoList,
    },
    {
      path: '/repo/:id',
      name: 'RepoDetails',
      component: RepoDetails,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;





{/* <ul>
        <li v-for="repo in pagedRepos" :key="repo.id">
          <router-link :to="{ name: 'repo', params: { id: repo.id } }">{{ repo.name }}</router-link>
        </li>
      </ul>
      <pagination :total="repos.length" :per-page="perPage" @change="changePage"></pagination> */}