// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAnrdEV5bFuXRUZJQ19uNVTR78oEfqEadg",
  authDomain: "autostuff-766cd.firebaseapp.com",
  projectId: "autostuff-766cd",
  storageBucket: "autostuff-766cd.appspot.com",
  messagingSenderId: "159375266211",
  appId: "1:159375266211:web:1728402b8ca2b489630a16",
  measurementId: "G-3JH8NBGBW1"
};

// orig
/*
const firebaseConfig = {
  apiKey: "AIzaSyCI8RSCscuLKRqO0J624xDBBFDVqaCjBb0",
  authDomain: "cars-project-6cf91.firebaseapp.com",
  projectId: "cars-project-6cf91",
  storageBucket: "cars-project-6cf91.appspot.com",
  messagingSenderId: "139507892748",
  appId: "1:139507892748:web:f163c6ecc29efa1c61e429",
  measurementId: "G-HF59JYNXXV"
};

*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)