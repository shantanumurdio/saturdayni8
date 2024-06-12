// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvAR-1TNPnnbjbmoDcEoyYeyCl0M7VuzE",
  authDomain: "saturdayni8-e5cb9.firebaseapp.com",
  projectId: "saturdayni8-e5cb9",
  storageBucket: "saturdayni8-e5cb9.appspot.com",
  messagingSenderId: "213670915987",
  appId: "1:213670915987:web:2a8965c22ad67437c90266",
  measurementId: "G-99JFGE2JRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;