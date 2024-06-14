// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDNaMOYOOKg6Lsa4oSXsZZ4IzqHLQi-Beg',
    authDomain: 'expense-tracker-v1-76285.firebaseapp.com',
    projectId: 'expense-tracker-v1-76285',
    storageBucket: 'expense-tracker-v1-76285.appspot.com',
    messagingSenderId: '175947447790',
    appId: '1:175947447790:web:bcc18d194127f5d08462ff',
    measurementId: 'G-1X0260EXZK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

// firebase login
// firebase init
// firebase deploy
