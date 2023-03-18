<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" class="image">
          <h1>Welcome to my GitHub Repositories App</h1>
          <p>Click the button below to view a list of my repositories:</p>
          <router-link to="/repos" class="btn btn-primary">View Repositories</router-link>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 10px;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: #337ab7;
  border: 1px solid #2e6da4;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn:hover,
.btn:focus,
.btn:active {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.image {
  display: flex;
  width: 50px;
  height: 50px;
}
</style>