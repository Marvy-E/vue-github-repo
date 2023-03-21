<template>
    <div class="repo-details">
      <h1>{{ repo.name }}</h1>
      <p>{{ repo.description }}</p>
      <div class="details">
        <div class="detail">
          <strong>Language:</strong> {{ repo.language }}
        </div>
        <div class="detail">
          <strong>Stars:</strong> {{ repo.stargazers_count }}
        </div>
        <div class="detail">
          <strong>Watchers:</strong> {{ repo.watchers_count }}
        </div>
        <div class="detail">
          <strong>Forks:</strong> {{ repo.forks_count }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "RepoDetails",
    data() {
      return {
        repo: {},
      };
    },
    async mounted() {
        await new Promise((resolve) => setTimeout(resolve, 1700));
      const response = await axios.get(
        `https://api.github.com/repos/Marvy-E/${this.$route.params.id}`
      );
      this.repo = response.data;
    },
    methods: {
        redirectToRepos() {
            this.$router.push("/repos");
        },
    },
  };
  </script>
  
  <style scoped>

  .repo-details {
    max-width: 800px;
    margin: 2rem auto;
  }
  
  .repo-details h1 {
    font-size: 2rem;
  }
  
  .repo-details p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  
  .details {
    display: flex;
    margin-top: 1rem;
  }
  
  .detail {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  </style>
  
