<template>
    <div class="admindashboard">  
        <Header></Header>
        <div class="userData">
        <label for="ID">ID: {{ id }}</label>
        <label for="email">Email: {{ email }}</label>
        <label for="test">Rola: {{ rola }}</label>
        <button v-if="rola == 'User'" @click="handleUpdateAdmin(id)">Zmień rolę na Administratora </button>
        <button v-if="rola == 'Admin'" @click="handleUpdateUser(id)">Zmień rolę na Usera </button>
    </div>
    </div>
</template>

<script>
import Header from "../../components/AdminNav.vue"
import { ref } from 'vue'
import { db } from '../../firebase'
import { useRouter } from 'vue-router'
import {doc, collection, getDocs, where, query, updateDoc} from 'firebase/firestore'

export default {
    name: 'AdminUserEdit',
    props: [ 'email' ],
    data() {
        return {
            login: this.email,
            rola: '',
            id: ''
        }
    },
    setup(){
        const router = useRouter()
        const handleUpdateAdmin = (id) => {
            const docRef = doc(db, "Userd", id)

            updateDoc(docRef, {
                Role: "Admin"
            })
            router.push('/AdminUserList')
        }
        const handleUpdateUser = (id) => {
            const docRef = doc(db, "Userd", id)

            updateDoc(docRef, {
                Role: "User"
            })
            router.push('/AdminUserList')
        }

        return {handleUpdateAdmin,handleUpdateUser}
    },
    mounted() {
        console.log(this.login)
        const userList  = ref([])
        let colRef = collection(db, 'Userd')
        colRef = query(colRef, where('Login','==',this.login))

        getDocs(colRef)
            .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                console.log(docs)
                userList.value = docs
                this.rola = docs[0].Role
                this.id = docs[0].id
                console.log(userList)
            })
    },
    components: {
        Header
    }
}
</script>

<style scoped>
.admindashboard
{
    width: 100%;
    height: 100;
    display: grid;
    
}
.userData
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
</style>