// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
import { getFirestore, getDocs, collection, where, query} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWkVKRnLZg8clJjARQ6N6IMnw9L_T5O-k",
  authDomain: "hello-world-5c7e7.firebaseapp.com",
  databaseURL: "https://hello-world-5c7e7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hello-world-5c7e7",
  storageBucket: "hello-world-5c7e7.appspot.com",
  messagingSenderId: "188091422041",
  appId: "1:188091422041:web:0bea4764195311699a6848",
  measurementId: "G-QEMGZ6TVX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export const getTask = () => getDocs(collection(db, 'Gegants'))