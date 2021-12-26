import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyC4oG_6JrE_iJIFc-FiWo2DDxA1EbYbT90",
    authDomain: "quiz-1d733.firebaseapp.com",
    projectId: "quiz-1d733",
    storageBucket: "quiz-1d733.appspot.com",
    messagingSenderId: "73527108371",
    appId: "1:73527108371:web:d4a2f7491671b3e163f0e6"
  };
  
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const userdCollection = db.collection('Userd')

export default db;

//Tworzeie usera
export const createUser = user => {
    return userdCollection.add(user)
}
  
//Pobranie listy userów

//Pobranie danych konkretnego usera
export const getUser = async login => {
    const user = await userdCollection.doc(login).get()
    return user.exist ? user.data() : null
}

//Aktualizacja usera
export const updateUser = (id, user) => {
    return userdCollection.doc(id).update(user)
}

export const useLoadUses = () => {
    const users = ref([])
    const close = userdCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}