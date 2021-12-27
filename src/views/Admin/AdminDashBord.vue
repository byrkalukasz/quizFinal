<template>
    <div class="admindashboard">
        
        <Header></Header>
        <QuizList></QuizList>
        
    </div>
</template>

<script>
import QuizList from "../../components/Quiz.vue"
import Header from "../../components/Nav.vue"

export default {
    name: 'AdminDashboard',
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