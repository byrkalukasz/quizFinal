<template>
  <div id="login">
      <form class="logowanie">
          <button><router-link to="/AdminDashboard"> Administrator</router-link></button>
          <button><router-link to="/UserDashboard">User</router-link></button>
      </form>
  </div>
</template>

<script>

export default{
    name: 'Login',
    components: {
  }
}
</script>


<style scooped>
.logowanie
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
button
{
    margin: 10px;
}
input
{
    margin: 10px;
}
</style>
