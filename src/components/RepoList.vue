<template>
    <div class="repo-list">
      <div v-for="repo in reposList" :key="repo.id" class="repo-card">
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <div class="repo-links">
        <a :href="repo.html_url" target="_blank">View on GitHub</a>
        <RouterLink to="/repo/:id" class="view-repo">View Repo</RouterLink>
        </div>
      </div>
      <div v-if="!reposList.length">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div class="pagination">
        <button :disabled="page === 1" @click="previousPage">Previous</button>
        <span>{{ page }}</span>
        <button :disabled="reposList.length < perPage" @click="nextPage">Next</button>
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
                reposList: [],
                page: 1,
                perPage: 5,
                totalPages: 0,
                loading: true,
            };
        },

    methods: {
      async fetchRepos() {
        await new Promise ((resolve) => setTimeout(resolve, 1700));
        this.loading = true;
        try {
          const response = await axios.get(`https://api.github.com/users/Marvy-E/repos`); 
          this.reposList = response.data;
          this.totalPages = Math.ceil(this.reposList.length / this.perPage);
        } catch (error) {
        } finally {
            this.loading = false;
        }
      },
    },
    computed: {
      paginatedRepos() {
        const startIndex = (this.page - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.reposList.slice(startIndex, endIndex);
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
    box-shadow: 2px 2px 5px rgb(69, 91, 84);
    font-family: quicksand;
  }
  
  .repo-card h3 {
    margin-top: 0;
  }
  
  .repo-card p {
    margin-bottom: 0;
  }
  
.repo-links {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
    padding: 5px;
}

.repo-links a {
    text-decoration: none;
    border: 1px solid rgb(169, 220, 203);
    padding: 5px;
    border-radius: 20px;
    color: #4f4a4a;
}

.repo-links a:hover {
    color: #4f4a4a;
    background-color: rgb(59, 151, 120);
    border-color: rgb(59, 151, 120);
}

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 0 5px;
  }

  .view-repo {
    border: 1px solid rgb(169, 220, 203);
    text-decoration: none;
    padding: 5px;
    border-radius: 20px;
    background-color: rgb(169, 220, 203);
    color: #4f4a4a;
  }

  .view-repo:hover {
    color: #4f4a4a;
    background-color: rgb(59, 151, 120);
    border-color: rgb(59, 151, 120);
  }
  </style>
  
