<template>
  <div id="login">
      <form class="logowanie" @submit.prevent="zaloguj">
          <h3>Zaloguj</h3>
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" required>
          <label for="password">Hasło</label>
          <input type="password" name="password" v-model="password" required>
          <button> Zaloguj</button>
          <button><router-link to="/Register"> Zarejestruj</router-link></button>
          <button>Zapomniałem hasła</button>
          <div v-if="error">{{ error }}</div>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '../composables/useLogin'
import getUser from '../composables/getUser'

export default{
    name: 'Login',
    setup() {
        const { user } = getUser()
        const email = ref('')
        const password = ref('')
        const { login, error } = useLogin()
        const router = useRouter()

        const zaloguj = async () => {
            await login(email.value, password.value)
            console.log(user.value.email)
            if(!error.value){
                if(user.value.email == 'lukasz.byrka1@gmail.com')
                {
                router.push('/Context')
                }
                else
                {
                router.push('/UserDashboard')
                }
            }
        }

        return { email, password, zaloguj, error, user}
    },
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
