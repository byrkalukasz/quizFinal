<template>
    <div class="admindashboard">  
        <Header></Header>
        <UserList></UserList>
    </div>
</template>

<script>
import UserList from "../../components/UserList.vue"
import Header from "../../components/AdminNav.vue"

export default {
    name: 'AdminDashboard',
    components: {
        UserList,
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