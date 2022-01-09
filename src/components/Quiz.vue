<template>
<Header></Header>
    <div class="quiz">
            <div class="question" v-if="questionList.length">
                {{ questionList[question].id}}. {{ questionList[question].Tresc }}
                <ul>
                    <li v-for="q in questionList[question].odp" :key="q.name"><input type="radio" name="answer" :value="q.name">{{ q.name }} </li>
                </ul>
            <button @click="increment" v-if="answer < questionList.length">Następne pytanie</button>
            <button @click="summary" v-if="answer == questionList.length">Podsumowanie</button>
            </div>
        <div class="summary">
            <ul>
                <li v-for="s in summaryList" :key="s.id"></li>
            </ul>
            </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs} from 'firebase/firestore'
import Header from '../components/Nav.vue'

export default {
    props: ['ID'],
     components: {
        Header
    },
    name: 'quiz',
    data() {
        const answerList = ref([])
        let summaryList = ref([])
        const q = ["Quiz_questions", "==", this.ID]
        return {question: 0, answer: 1, summaryList, q, answerList }
    },
    setup() {
        let colRef = collection(db, 'Quiz_questions')
        const questionList  = ref([])

        getDocs(colRef)
            .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                console.log(docs)
                questionList.value = docs[0].Questions
            })

            return { questionList}
    },
    mounted() {

        
    },
    methods: {
        increment() {
            let ele = document.getElementsByName('answer');
            let ans;
            for(var i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                ans = ele[i].value
            }
                if(ans == this.questionList[this.question].correct)
                this.summaryList.push({Odpowiedz:"Poprawna",TwojaOdpowiedz:ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                else
                this.summaryList.push({Odpowiedz:"Błędna",TwojaOdpowiedz:ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                
            this.question++
            this.answer++
            
        },
        summary()
        {
            let question = document.getElementsByClassName(".question");
            let summary = document.getElementsByClassName('.summary');
            let ele = document.getElementsByName('answer');
             for(var i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                this.ans = ele[i].value
                                                }
                if(this.ans == this.questionList[this.question].correct)
                this.summaryList.push({Odpowiedz:"Poprawna",TwojaOdpowiedz:this.ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                else
                this.summaryList.push({Odpowiedz:"Błędna",TwojaOdpowiedz:this.ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                console.log(this.summaryList)
                question.style.display = 'none'
                summary.style.display = 'show'
        }
    }
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

