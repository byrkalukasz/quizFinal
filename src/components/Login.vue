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
          <div v-if="error">{{ error }}</div>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '../firebase'
import { collection, getDocs, where, query} from 'firebase/firestore'
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
        let userList  = ref([])

        const zaloguj = async () => {
            await login(email.value, password.value)
            if(!error.value){
                let colRef = collection(db, 'Userd')
                colRef = query(colRef, where("Login", '==', email.value))
                    getDocs(colRef)
                    .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                userList.value = docs[0].Role
                console.log(userList.value)
                if(userList.value == "Admin")
                {
                router.push('/Context')
                }else
                {
                    router.push('/UserDashboard')
                }

            })
                
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
