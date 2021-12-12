import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRSKNvXIfnYuR3PB4F_5uaugmvaRgWrHo",
    authDomain: "chat-b5ade.firebaseapp.com",
    projectId: "chat-b5ade",
    storageBucket: "chat-b5ade.appspot.com",
    messagingSenderId: "136181909389",
    appId: "1:136181909389:web:66ea39d280e47d733e1fc4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);