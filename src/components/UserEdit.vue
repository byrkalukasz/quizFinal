<template>
    <div class="userData">
        <label for="email">Email: {{ email }}</label>
        <label for="test">Rola {{ rola }}</label>
        <button>Zmień rolę na Administratora </button>
        <button>Zmień rolę na Usera </button>
    </div>
</template>

<script>
//import { db } from '../firebase'
//import { collection, getDocs} from 'firebase/firestore'

export default {
    name: 'UserEdit',
    props: [ 'email' ],
    data() {
        return {
            login: this.email,
            rola: ''
        }
    },
    mounted() {
        console.log(this.login)
    }
    
}
</script>

<style scoped>
.userData
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
}
</style>