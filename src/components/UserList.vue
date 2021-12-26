<template>
<div class="userlist">
    <table>
        <thead>
            <th>ID</th>
            <th>Login</th>
            <th>Email</th>
            <th>Admin</th>
        </thead>
        <tbody>
            <tr v-for="{ id, Login, Email, Admin } in users" :key="id">
                <td> {{ id }} </td>
                <td> {{ Login }} </td>
                <td> {{ Email }} </td>
                <td> {{ Admin }} </td>
            </tr>
        </tbody>
    </table>
</div>    
</template>

<script>
import { useLoadUses } from "../firebase"

export default {
    name: 'UserList',
    data() {
        return {list:undefined}
    },
    setup() {
    const users = useLoadUses()
    console.log(users)
    return users
    }
}
</script>

<style scoped>

</style>
