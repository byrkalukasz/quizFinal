<template>
<div class="userlist">
    <table>
        <tr>
            <th>Email</th>
            <th>Admin</th>
        </tr>
        <tr v-for="user in userList" :key="user.Login">
            <td> {{ user.Login }} </td>
            <td> {{ user.Role }} </td>
            <td><router-link :to="{ name: 'User', params: { email: user.Login }}"><button>Edycja</button></router-link></td>
        </tr>
    </table>
</div>    
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs} from 'firebase/firestore'


export default {
    name: 'UserList',
    setup() {
        const userList  = ref([])
        const colRef = collection(db, 'Userd')

        getDocs(colRef)
            .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                console.log(docs)
                userList.value = docs
                console.log(userList)
            })

        return { userList }
    },
    mounted()
    {

    }
}
</script>

<style scoped>
.userlist
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
table,th,td{
    border-collapse: collapse;
    border: 1px solid black;
}
</style>
