<template>
    <div class="admindashboard">
        
        <Header></Header>
        <QuizList></QuizList>
        
    </div>
</template>

<script>
import QuizList from "../../components/QuizList.vue"
import Header from "../../components/Header.vue"

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