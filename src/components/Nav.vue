<template>
    <div class='header'>
        Logo
        <button>Strona główna</button>
        <button @click="logout"> Wyloguj </button>
    </div>
</template>

<script>
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'


export default {
    name: 'Header',
    setup() {
        const logout = () => {
            signOut(auth)
        }
        
        return { logout }
    },
    components: {

    }
}
</script>

<style scooped>
.header
{
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0%;
    top: 0%;
    background: orange;
}
button
{
    display: inline-grid;
}
</style>