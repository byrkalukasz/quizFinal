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