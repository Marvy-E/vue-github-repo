<template>
    <div>
      <repo-list :repos="repos" :error="error" :loading="loading" :page="currentPage" :per-page="perPage" />
      <pagination :total="repos.length" :per-page="perPage" @change="changePage"></pagination>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import RepoList from '@/components/RepoList.vue';
  import Pagination from '@/components/Pagination.vue';
  
  export default {
    name: 'Home',
    components: {
      RepoList,
      Pagination,
    },
    data() {
      return {
        repos: [],
        error: null,
        loading: false,
        currentPage: 1,
        perPage: 6,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        axios
          .get(`https://api.github.com/users/Marvy-E/repos`)
          .then((response) => {
            this.repos = response.data;
          })
          .catch((error) => {
            this.error = error.message;
          })
          .finally(() => {
            this.loading = false;
          });
      },
      changePage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  