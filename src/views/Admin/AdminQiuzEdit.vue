<template>
    <div class="admindashboard">  
        <Header></Header>
        <QuizList></QuizList>
    </div>
</template>

<script>
import QuizList from "../../components/Quiz.vue"
import Header from "../../components/AdminNav.vue"

export default {
    name: 'AdminQuizEdit',
    components: {
        QuizList,
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