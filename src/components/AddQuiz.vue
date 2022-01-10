<template>
    <div class="adding">
        <form class="quizcreate" @submit.prevent="handleSubmit" v-if="Edit == 1">
            <label>Podaj nazwę pytania</label>
            <input type="text" v-model="Name">
            <table>
                <tr v-for="item in answerNumber" :key="item">
                    <td>Odpowiedz</td>
                    <td><input type="text" :name="item" v-model="formFirlds[item]"></td>
                </tr>
            </table>
            <label>Podaj poprawną odpowiedz</label>
            <input type="text" v-model="Correct">
            <button type="button" @click="increment">Dodaj odpowiedz</button>
            <button type="button" @click="addAnswersToList">Dodaj pytanie</button>
            <button type="button" @click="summary">Zatwierdz pytania</button>
        </form>
        <form class="quizName" v-if="Edit == 2">
            <label>Podaj nazwę Quizu</label>
            <input type="QuizName" v-model="qName">
            <button type="button" @click="addQuiz(qName)">Zatwierdz pytania</button>
        </form>
    </div>    
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { addDoc, collection, getDocs, where, query } from 'firebase/firestore'

export default {
    
    name: 'adding',
    setup()
    {

    },
    data()
    {
        const questionList = ref([])
        const quizName = ref([])
        const answerList = ref([])
        const answerNumber = 1
        const questionNumber = 1
        const Name = ref([])
        const Correct = ref('')
        const Edit = 1
        const QuizUID = ''

        //tablica z id, trescia, poprawna odpowiedz
        //tablica z odpowiedziami

        //tabela {id, tresc, poprana odpowiedz tablica {odpowiedz}}

        return {QuizUID,Edit, questionList, quizName, answerNumber, answerList, formFirlds: ['answer'], Name, Correct, questionNumber}
    },
    methods:
    {
        increment() {
            this.answerNumber++
        },
        addAnswersToList()
        {
            for(var i = 1; i <= this.answerNumber; i++)
            {
                console.log(this.formFirlds[i])
                this.answerList.push({name:this.formFirlds[i]})
            }
            let result = this.answerList
            console.log(result)
            let test = result
            console.log(test)
            console.log(this.Name)
            let spr = ({id: this.questionNumber, Tresc: this.Name, correct: this.Correct, odp: result})
            this.questionList.push((spr))
            this.questionNumber++
            this.Name = ''
            this.Correct = ''
            for(var j = 1; j <= this.answerNumber; j++)
            {
                this.formFirlds[j] = ''
            }
            console.log(this.questionList)
        },
        summary()
        {
            this.Edit++
        },
        addQuiz(quizName)
        {
            //Dodanie to tabeli z nazwa quizu
            let quizRef = collection(db, "Quiz")
            addDoc(quizRef,{
                Name: quizName
            })
            //Pobranie ID quizu
                quizRef = query(quizRef, where("Name", '==', quizName))
                getDocs(quizRef)
                    .then(snapshot => {
                        let docs = []
                        snapshot.docs.forEach(doc => {
                        docs.push({ ...doc.data(), id: doc.id})
                        this.QuizUID = docs[0].id})
                        console.log(this.QuizUID)
                    })
            //Dodanie do tabeli z pytaniami
            const colRef = collection(db, 'Quiz_questions')
            addDoc(colRef,{
                Quiz_id: this.QuizUID,
                Questions: this.questionList
              }
              )
                //TO DO: Dodanie nazwy do Quizu
                //TO DO: odczytanie uidu Quizu
                //TO DO: Zapisanie do tabeli z pytaniami
        },
        
        //Dodac do tabeli quiz

        //Pobrac id quizu

        //Dodac pytania do bazy
    }
}
</script>

<style scoped>
.quizcreate
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
.quizName
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
</style>