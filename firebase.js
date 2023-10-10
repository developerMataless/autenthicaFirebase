// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaE9CiNuFdFh6ULti5EecaJDuAFE1y4e8",
  authDomain: "auto-michel.firebaseapp.com",
  projectId: "auto-michel",
  storageBucket: "auto-michel.appspot.com",
  messagingSenderId: "142041192553",
  appId: "1:142041192553:web:e1aedd9fcf2babdb4beaf8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

let app; // variável global
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const autentica = firebase.autentica() // variável