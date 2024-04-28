import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDW14Jt_SUDAJSTS2oBaLAhEXjWU_dMrKM",
    authDomain: "first-firebase-project-140ed.firebaseapp.com",
    projectId: "first-firebase-project-140ed",
    storageBucket: "first-firebase-project-140ed.appspot.com",
    messagingSenderId: "765113390327",
    appId: "1:765113390327:web:d35f86449c165d71bfeff2"
  };



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}  

export {firebase}