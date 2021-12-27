<template>
    <div class="userdashboard">  
        <Header></Header>
        <QuizList></QuizList>
        
    </div>
</template>

<script>
import QuizList from "../../components/QuizList.vue"
import Header from "../../components/Nav.vue"

export default {
    name: 'UserDashboard',
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