<template>
    <div class="adding">
        <form class="quizcreate" @submit.prevent="handleSubmit">
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
            <button type="button" @click="addQuiz">Dodaj Quiz</button>
        </form>
    </div>    
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

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

        //tablica z id, trescia, poprawna odpowiedz
        //tablica z odpowiedziami

        //tabela {id, tresc, poprana odpowiedz tablica {odpowiedz}}

        return {questionList, quizName, answerNumber, answerList, formFirlds: ['answer'], Name, Correct, questionNumber}
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
        addQuiz()
        {
            const colRef = collection(db, 'Quiz_questions')
            addDoc(colRef,{
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
</style>