import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDK4qr5pHy78DnWAxnbO2OCffgXdxdyb-w",
    authDomain: "qrmeterotomatis.firebaseapp.com",
    projectId: "qrmeterotomatis",
    storageBucket: "qrmeterotomatis.appspot.com",
    messagingSenderId: "333388328113",
    appId: "1:333388328113:web:4406d16a6a5c763eb58690",
    databaseURL: "https://qrmeterotomatis-default-rtdb.firebaseio.com",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export default database;