import { ref } from 'vue'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const singup = async (email, password) => {
    error.value = null
    isPending.value = true

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if(!res) {
            throw new Error('Error to error')
        }

        error.value = null
        isPending.value = false
    }
    catch (err) { console.warn(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useSingup = () => {
    return {error, isPending, singup}
}

export default useSingup