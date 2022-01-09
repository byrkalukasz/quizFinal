<template>
    <div class="admindashboard">  
        <Header></Header>
        <UserEdit></UserEdit>
    </div>
</template>

<script>
import UserEdit from "../../components/UserEdit.vue"
import Header from "../../components/AdminNav.vue"

export default {
    name: 'AdminUserEdit',
    components: {
        UserEdit,
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