<template>
  <div id="register">   
      <form class="rejestracja" @submit.prevent="handleSubmit">
          <h3>Rejestracja</h3>
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" required>
          <label for="email">Hasło</label>
          <input type="password" name="password" v-model="password" required>
          <button>Zarejestruj</button>
          <div v-if="error">{{ error }}</div>
          <button><router-link to="/"> Masz już konto? Zaloguj</router-link></button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { useRouter } from 'vue-router'
import { addDoc, collection } from 'firebase/firestore'
import useSingup from '../composables/useSingup'

export default{
    name: 'Register',
    components: {
  },
  setup() {
      const email = ref('')
      const password = ref('')

      const { singup, error} = useSingup()
      const router = useRouter()

      const handleSubmit = async () => {
          await singup(email.value, password.value)

          if(!error.value) {
              const colRef = collection(db, 'Userd')
              await addDoc(colRef,{
                  Login: email.value,
                  Role: 'User'
              }
              )
              router.push('/')
          }
      }

      return {email, password, handleSubmit, error}
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
