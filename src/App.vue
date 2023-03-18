<template>
  <div>
    <div>
      <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/repos">My Repos</router-link>
    <router-link to="/.*">404 Page</router-link>
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
      perPage: 5,
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