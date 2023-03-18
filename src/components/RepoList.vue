<template>
    <div class="repo-list">
      <div v-for="repo in repos" :key="repo.id" class="repo-card">
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank">View on GitHub</a>
      </div>
      <div v-if="!repos.length">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div class="pagination">
        <button :disabled="page === 1" @click="previousPage">Previous</button>
        <span>{{ page }}</span>
        <button :disabled="repos.length < perPage" @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    props: {
      total: {
        type: Number,
        required: true,
      },
      perPage: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        repos: [],
        page: 1,
        error: '',
      };
    },
    methods: {
      async fetchRepos() {
        try {
          const response = await axios.get(`https://api.github.com/users/Marvy-E/repos`, {
            params: {
              page: this.page,
              per_page: this.perPage,
            },
          });
          this.repos = response.data;
        } catch (error) {
          this.error = error.message;
        }
      },
      async nextPage() {
        this.page++;
        await this.fetchRepos();
      },
      async previousPage() {
        this.page--;
        await this.fetchRepos();
      },
    },
    mounted() {
      this.fetchRepos();
    },
  };
  </script>
  
  <style>

  .repo-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .repo-card {
    width: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .repo-card h3 {
    margin-top: 0;
  }
  
  .repo-card p {
    margin-bottom: 0;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 0 5px;
  }
  </style>
  
