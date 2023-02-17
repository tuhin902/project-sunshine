// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNivjdzjBSMRkzlxJscGCbMmuY8Mi81LM",
    authDomain: "atom-59a1b.firebaseapp.com",
    projectId: "atom-59a1b",
    storageBucket: "atom-59a1b.appspot.com",
    messagingSenderId: "529234020422",
    appId: "1:529234020422:web:4ce378e7cba2535332a247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;