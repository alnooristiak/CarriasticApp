// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ1TctYqWm1G5lBVykgaaWsWUOzdp3hpE",
  authDomain: "carriastic-6400e.firebaseapp.com",
  projectId: "carriastic-6400e",
  storageBucket: "carriastic-6400e.appspot.com",
  messagingSenderId: "417824227135",
  appId: "1:417824227135:web:ba2b4cd828a5e9be2e9d8a",
  measurementId: "G-GW38N656E7",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

if (!firebase.app.length) {
  firebase.initialize(firebaseConfig);
}

export { firebase };
