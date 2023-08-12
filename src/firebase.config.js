import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5jfaX3QzCPQwFyWn7KvdjqBI7dEbt_UI",
    authDomain: "learners-loft.firebaseapp.com",
    projectId: "learners-loft",
    storageBucket: "learners-loft.appspot.com",
    messagingSenderId: "368782417357",
    appId: "1:368782417357:web:bf7cc6cf1f183e3eaa3884"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()