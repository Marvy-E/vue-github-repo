<template>
    <div class="error-page">
      <div class="img-container">
        <img src="../assets/404.png" alt="404" class="img-404" />
      </div>
      <div class="error-container">
        <h2>Oh no!</h2>
        <p>The page you are looking for does not exist.</p>
        <RouterLink to="/" class="error-home">Go Home</RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  
<style>
  .error-page {
    align-items: center;
    display: flex;
  }
  
  .img-404 {
    width: 500px;
    height: 500px;
  }

  .error-home {
    border: 1px solid rgb(169, 220, 203);
    text-decoration: none;
    padding: 10px;
    border-radius: 20px;
    background-color: rgb(169, 220, 203);
    color: #4f4a4a;
  }

  .error-home:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: rgb(59, 151, 120);
  }

  .error-container p {
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: quicksand;
  }
</style>