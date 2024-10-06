// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdSSJjOesEx3TcTsqdn8ZAf-sKH_UypSE",
    authDomain: "apex-crm-437802.firebaseapp.com",
    projectId: "apex-crm-437802",
    storageBucket: "apex-crm-437802.appspot.com",
    messagingSenderId: "250243550020",
    appId: "1:250243550020:web:00b6afbc344febb3ba6511",
    measurementId: "G-9F2KZV98ZD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
