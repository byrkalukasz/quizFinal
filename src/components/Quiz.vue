<template>
    <div class="quiz">
            <div class="question">
                //J9KiWV8D7xKZokze11ah
                <table  v-for="question in questionList" :key="question.id">
                    <td>
                        <th>{{ question.Tresc }}</th>
                    </td>
                    <td v-for="q in questionList" :key="q.id">
                        <tr> {{ q.odp }}</tr>
                    </td>
                </table>
            </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs} from 'firebase/firestore'

export default {
    name: 'quiz',
    setup() {
        const questionList  = ref([])
        const colRef = collection(db, 'Quiz_questions')

        getDocs(colRef)
            .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                console.log(docs)
                questionList.value = JSON.parse(docs[0].Questions)
                console.log(questionList)
            })

        return { questionList }
    },
}
</script>

<style scoped>
.quiz
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
</style>

