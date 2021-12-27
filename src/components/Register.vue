<template>
  <div id="register">   
      <form class="rejestracja">
          <input type="text">
          <input type="text">
          <button>Zarejestruj</button>
            <button><router-link to="/"> Masz już konto? Zaloguj</router-link></button>
      </form>
  </div>
</template>

<script>

export default{
    name: 'Register',
    components: {
  }
}
</script>


<style scooped>
.rejestracja
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
