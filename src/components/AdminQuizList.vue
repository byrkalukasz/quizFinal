<template>
    <div class="quizlist" >
        <table>
            <tr>
                <th>Id</th>
                <th>Nazwa</th>
            </tr>
            <tr v-for="quiz in quizList" :key="quiz.Nazwa">
                <td>{{ quiz.id }}</td>
                <td>{{ quiz.Name }}</td>
                <td><router-link :to="{ name: 'Quiz', params: { quizID: quiz.id}}"><button>Edytuj Quiz</button></router-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs} from 'firebase/firestore'

export default {
    name: 'AdminQuizList',
    components: {
        
    },
    setup() {
        const quizList  = ref([])
        const colRef = collection(db, 'Quiz')

        getDocs(colRef)
            .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                console.log(docs)
                quizList.value = docs
                console.log(quizList)
            })

        return { quizList }
    },
}
</script>

<style scoped>
.quizlist
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    background: white;
}
table,th,td{
    border-collapse: collapse;
    border: 1px solid black;
}
</style>