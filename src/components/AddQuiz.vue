<template>
    <div class="adding">
        <form class="quizcreate">
            <label>Podaj nazwę pytania</label>
            <input>
            <table>
                <tr v-for="item in answerNumber" :key="item">
                    <td>Odpowiedz</td>
                    <td><input></td>
                </tr>
            </table>
            <label>Podaj poprawną odpowiedz</label>
            <input>
            <button @click="increment">Dodaj odpowiedz</button>
            <button>Dodaj pytanie</button>
            <button>Dodaj Quiz</button>
        </form>
    </div>    
</template>

<script>
import { ref } from 'vue'


export default {
    
    name: 'adding',
    setup()
    {

    },
    data()
    {
        const questionList = ref([])
        const quizName = ref([])
        const answerNumber = 1
        //liczba pytan, liczba odpowiedzi do pytania

        //tablica z id, trescia, poprawna odpowiedz
        //tablica z odpowiedziami

        //tabela {id, tresc, poprana odpowiedz tablica {odpowiedz}}

        return {questionList, quizName, answerNumber}
    },
    methods:
    {
        increment() {
            this.answerNumber++
        }
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