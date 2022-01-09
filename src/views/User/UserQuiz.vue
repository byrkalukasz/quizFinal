<template>
    <div class="UserQuiz">  
        <Header></Header>
        <QuizList></QuizList>
    </div>
</template>

<script>
import QuizList from "../../components/Quiz.vue"
import Header from "../../components/Nav.vue"

export default {
    name: 'UserQuiz',
    components: {
        QuizList,
        Header
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
</style>