<template>
    <div class="repo-list">
      <div v-for="repo in paginatedRepos" :key="repo.id" class="repo-card">
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <div class="repo-links">
          <a :href="repo.html_url" target="_blank">View on GitHub</a>
          <router-link :to="{ name: 'RepoDetails', params: { id: repo.id } }" class="view-repo">View Repo</router-link>
        </div>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-if="!paginatedRepos.length && !loading">No Repos Found</div>
      <div class="pagination">
        <button :disabled="currentPageIndex === 0" @click="changePage(currentPageIndex - 1)">Previous</button>
        <button v-for="(page, index) in totalPages" :key="index" :class="{ active: index === currentPageIndex }" @click="changePage(index)">{{ page }}</button>
        <button :disabled="currentPageIndex === totalPages - 1" @click="changePage(currentPageIndex + 1)">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RepoList',
    props: {
      // perPage: {
      //   type: Number,
      //   required: true,
      // },
      perPage: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        reposList: [],
        page: 1,
        currentPageIndex: 0,
        perPage: 4,
        loading: true,
      };
    },
    methods: {
      async fetchRepos() {
        await new Promise((resolve) => setTimeout(resolve, 1700));
        try {
          const response = await axios.get('https://api.github.com/users/Marvy-E/repos');
          this.reposList = response.data;
          if (this.reposList.length === 0) {
      this.totalPages = 0;
    } else {
          this.totalPages = Math.ceil(this.reposList.length / this.perPage);
        }
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
      changePage(pageIndex) {
        this.currentPageIndex = pageIndex;
        this.page = pageIndex + 1;
      },
    },
    computed: {
      paginatedRepos() {
        if (!this.reposList || !this.reposList.length) {
          return [];
        }
        const startIndex = this.currentPageIndex * this.perPage;
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

  .pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}

.pagination button {
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #666;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  height: 30px;
}

.pagination button.active {
  background-color: #666;
  color: #fff;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

  </style>
  