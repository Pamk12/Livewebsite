// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZO2QqrHfoeUAdyFWOZMHe_1uIuC1WNSo",
  authDomain: "firstwebsite-f8aca.firebaseapp.com",
  projectId: "firstwebsite-f8aca",
  storageBucket: "firstwebsite-f8aca.appspot.com",
  messagingSenderId: "622468074002",
  appId: "1:622468074002:web:74a616d8c3b8a22ddd26cb",
  measurementId: "G-G6SG4GCJHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);