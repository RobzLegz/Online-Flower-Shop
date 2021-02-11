import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCF2PWhoGnnGDlFaBog97bvu2xaWvUxj7s",
    authDomain: "beruvainagi.firebaseapp.com",
    projectId: "beruvainagi",
    storageBucket: "beruvainagi.appspot.com",
    messagingSenderId: "814475863638",
    appId: "1:814475863638:web:af1c209b956849b7813df7",
    measurementId: "G-16Z23Q5SJX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;