<template>
    <div class="UserQuiz">  
        <Header></Header>
        <div class="quiz">
            <div class="question" v-if="questionList.length" v-show="summar == 0">
                {{ questionList[question].id}}. {{ questionList[question].Tresc }}
                <ul>
                    <li v-for="q in questionList[question].odp" :key="q.name"><input type="radio" name="answer" :value="q.name">{{ q.name }} </li>
                </ul>
            <button @click="increment" v-if="answer < questionList.length">Następne pytanie</button>
            <button @click="summary" v-if="answer == questionList.length">Podsumowanie</button>
            </div>
        <div class="summary" v-show="summar == 1">
            Twój wynik to {{ correctAns }} na {{ allAns }}
            <ul>
                <li v-for="s in summaryList" :key="s.id">Twoja odpowiedz: {{s.TwojaOdpowiedz}} - Poprawna odpowiedz: {{ s.OdpowiedzQuizu }} - Twoja odpowiedz była: {{ s.Odpowiedz }}</li>
            </ul>
            <button @click="save">Zapisz podejście</button>
            </div>
    </div>
    </div>
</template>

<script>
import Header from "../../components/Nav.vue"
import { ref } from 'vue'
import { db } from '../../firebase'
import { useRouter } from 'vue-router'
import { collection, getDocs, addDoc} from 'firebase/firestore'

export default {
    name: 'UserQuiz',
    props: ['ID'],
    components: {
        Header
    },
    data() {
        const answerList = ref([])
        let summaryList = ref([])
        const q = ["Quiz_questions", "==", this.ID]
        const summar = 0
        const correctAns = 0
        const allAns = 0
        const router = useRouter()
        return {question: 0, answer: 1, summaryList, q, answerList, summar, correctAns, allAns, router }
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
                console.log(docs[0])
                questionList.value = docs[0].Questions
            })

            return { questionList }
    },
    mounted() {
            for(var i = 0; i < this.questionList.length; i++)
            {
                console.log(this.ID)
                if(this.questionList[i].Quiz_id !== this.ID)
                {
                    console.log(this.ID)
                    console.log("hehe")
                }
                console.log("hehe")
            }
        
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
                {
                this.allAns++
                this.correctAns++
                this.summaryList.push({Odpowiedz:"Poprawna",TwojaOdpowiedz:ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                }else{
                this.summaryList.push({Odpowiedz:"Błędna",TwojaOdpowiedz:ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                this.allAns++
                }
                this.question++
            this.answer++
            
        },
        summary()
        {
            this.summar++
            let ele = document.getElementsByName('answer');
             for(var i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                this.ans = ele[i].value
                                                }
                if(this.ans == this.questionList[this.question].correct)
                {
                this.allAns++
                this.correctAns++
                this.summaryList.push({Odpowiedz:"Poprawna",TwojaOdpowiedz:this.ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                }else
                {this.summaryList.push({Odpowiedz:"Błędna",TwojaOdpowiedz:this.ans, OdpowiedzQuizu:this.questionList[this.question].correct})
                this.allAns++
                }console.log(this.summaryList)
        },
        save()
        {
            let quizRef = collection(db, "Quiz_history")
            addDoc(quizRef,{
                All: this.allAns,
                Correct: this.correctAns,
                Login:'test' ,
                Quiz_ID: this.ID
            })
            this.router.push('/UserDashBoard')
        }
    }
}
</script>

<style scoped>
.UserQuiz
{
    width: 100%;
    height: 100;
    display: grid;
    
}
.quiz
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
.summary{
    display: grid;
}
</style>