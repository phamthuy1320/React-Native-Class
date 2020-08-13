import firebase from  'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAbvWbzrU0pP-K1UkADeipVvWzKA1993lM",
    authDomain: "week7chatsfirebase.firebaseapp.com",
    databaseURL: "https://week7chatsfirebase.firebaseio.com",
    projectId: "week7chatsfirebase",
    storageBucket: "week7chatsfirebase.appspot.com",
    messagingSenderId: "235792133974",
    appId: "1:235792133974:web:e6261e41dbe0d9687230f7",
    measurementId: "G-DW1KVJ90HE"
})

const database = firebase.database();

export default database;