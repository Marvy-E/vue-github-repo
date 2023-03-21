<template>
  <div class="app-home">
    <header>
        <img alt="Vue logo" src="./assets/logo.png" class="image">
      <nav>
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/repos" class="router-link">My Repos</router-link>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>

    <footer>
      <p>&copy; 2023 My GitHub Repos</p>
      <a href="#top">Back to the Top</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
}
//   data() {
//     return {
//       repos: [],
//       page: 1,
//       perPage: 6,
//     };
//   },
//   computed: {
//     pagedRepos() {
//       const start = (this.page - 1) * this.perPage;
//       const end = start + this.perPage;
//       return this.repos.slice(start, end);
//     },
//   },
//   methods: {
//     async fetchRepos() {
//       const response = await axios.get(`https://api.github.com/users/Marvy-E/repos`);
//       this.repos = response.data;
//     },
//     changePage(page) {
//       this.page = page;
//     },
//   },
//   mounted() {
//     this.fetchRepos();
//   },
// };
</script>

<style>
/* Style for router-link */
* {
  margin: 0;
  padding: 0;
}

.app-home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.router-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  font-size: 1.2em;
  font-family: quicksand;
  font-weight: 500;
}

.router-link:hover {
  background-color: rgb(59, 151, 120);
}

footer {
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #4f4a4a;
  bottom: 0%;
  font-family: quicksand;
}

.image {
  display: flex;
  width: 50px;
  height: 50px;
}

footer a {
  text-decoration: none;
  color: #4f4a4a;
  cursor: pointer;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(169, 220, 203);
}
</style>