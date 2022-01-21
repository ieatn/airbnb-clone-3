import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFBCY3BBtGo02CKwc26DN9zLr8HNeaipQ",
  authDomain: "airbnbclone-5e954.firebaseapp.com",
  projectId: "airbnbclone-5e954",
  storageBucket: "airbnbclone-5e954.appspot.com",
  messagingSenderId: "868300162566",
  appId: "1:868300162566:web:8448ea9fce70e3efbce587",
  measurementId: "G-7XTTL4VCTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.render(<App />, document.getElementById('root'));
