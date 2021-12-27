import { initializeApp } from 'firebase/app'
import {  getFirestore } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC4oG_6JrE_iJIFc-FiWo2DDxA1EbYbT90",
    authDomain: "quiz-1d733.firebaseapp.com",
    projectId: "quiz-1d733",
    storageBucket: "quiz-1d733.appspot.com",
    messagingSenderId: "73527108371",
    appId: "1:73527108371:web:d4a2f7491671b3e163f0e6"
  }
  
initializeApp(config)
  
const db = getFirestore()

export { db }