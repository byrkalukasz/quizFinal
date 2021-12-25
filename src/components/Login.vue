<template>
  <div id="login">
      
      <form class="logowanie">
          <input type="text">
          <input type="text">
          <button><router-link to="/AdminDashboard"> Zaloguj</router-link></button>
          <button>Zarejestruj</button>
          <button>Zapomniałem hasła</button>
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
