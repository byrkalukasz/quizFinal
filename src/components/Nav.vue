<template>
    <div class='header'>
        Logo
        <button>Strona główna</button>
        <button @click="logout"> W </button>
    </div>
</template>

<script>
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'


export default {
    name: 'Header',
    setup() {
        const router = useRouter()
        const logout = () => {
            signOut(auth)
            router.push('/')
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