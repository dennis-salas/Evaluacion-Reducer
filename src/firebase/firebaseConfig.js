import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC4RSMyoZ75a240JzVR81-b1riS7craZxI",
    authDomain: "evaluacion-reducer.firebaseapp.com",
    projectId: "evaluacion-reducer",
    storageBucket: "evaluacion-reducer.appspot.com",
    messagingSenderId: "103781549331",
    appId: "1:103781549331:web:06af11758e75b42fcf86e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}