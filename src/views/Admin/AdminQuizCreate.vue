<template>
    <div class="admindashboard">  
        <Header></Header>
        <QuizAdd></QuizAdd>
    </div>
</template>

<script>
import QuizAdd from "../../components/AddQuiz.vue"
import Header from "../../components/AdminNav.vue"

export default {
    name: 'AdminQuizCreate',
    components: {
        QuizAdd,
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
</style>