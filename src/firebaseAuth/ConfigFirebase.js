// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ1TctYqWm1G5lBVykgaaWsWUOzdp3hpE",
  authDomain: "carriastic-6400e.firebaseapp.com",
  projectId: "carriastic-6400e",
  storageBucket: "carriastic-6400e.appspot.com",
  messagingSenderId: "417824227135",
  appId: "1:417824227135:web:ba2b4cd828a5e9be2e9d8a",
  measurementId: "G-GW38N656E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);