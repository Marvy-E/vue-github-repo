<template>
    <div class="home">
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* margin: -50px 0 0 -50px; */
  width: 50%;
  padding: 50px;
  border: 1px solid rgb(169, 220, 203);
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgb(69, 91, 84);
  font-family: quicksand;
}

.home h1 {
  padding: 10px;
}

.home p{
  padding: 10px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #4f4a4a;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: rgb(169, 220, 203);
  border: 1px solid rgb(169, 220, 203);
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
  color: #4f4a4a;
  background-color: rgb(59, 151, 120);
  border-color: rgb(59, 151, 120);
}
</style>