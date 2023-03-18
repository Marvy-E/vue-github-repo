<template>
  <div>
    <div>
      <nav>
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/repos" class="router-link">My Repos</router-link>
    <router-link to="/.*" class="router-link">404 Page</router-link>
    </nav>
    <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      repos: [],
      page: 1,
      perPage: 6,
    };
  },
  computed: {
    pagedRepos() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.repos.slice(start, end);
    },
  },
  methods: {
    async fetchRepos() {
      const response = await axios.get(`https://api.github.com/users/Marvy-E/repos`);
      this.repos = response.data;
    },
    changePage(page) {
      this.page = page;
    },
  },
  mounted() {
    this.fetchRepos();
  },
};
</script>

<style>
/* Style for router-link */
.router-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  float: right;
  font-size: 1.2em;
}

.router-link:hover {
  background-color: #eee;
}

</style>