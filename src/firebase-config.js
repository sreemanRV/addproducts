import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBW0MkIv4gSVvTJ-PpH0pn7boNgyzxpzHg",
    authDomain: "authreact-fea17.firebaseapp.com",
    projectId: "authreact-fea17",
    storageBucket: "authreact-fea17.appspot.com",
    messagingSenderId: "250755522293",
    appId: "1:250755522293:web:6ba0aa4960d3ea489cefbc",
    measurementId: "G-2J7BY2L06J"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  firebase.initializeApp(firebaseConfig);
  export const dataRef=firebase.database();
  export default firebase;