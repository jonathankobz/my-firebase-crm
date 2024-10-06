// Import Firebase modules from the CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

// Your Firebase configuration
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
const auth = getAuth();
const firestore = getFirestore();


