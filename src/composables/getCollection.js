import { getDocs, collection } from 'firebase/firestore'
import { ref } from 'vue'
import { db } from '../firebase'

const GetCollection = () => {
    const userList = ref(null)

    let collectionRef = getDocs(collection(db, "Userd"));
    collectionRef.forEach((doc) => {
        let results = []
        results.push({...doc.data(), id: doc.id})
        userList.value = results
        console.log(results)
    })
    
    return { userList }
}


export default GetCollection