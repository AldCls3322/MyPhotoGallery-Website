import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6B7su5EyEQrBewS7JLvHnwbfE2JIptPE",
    authDomain: "photogallery-website.firebaseapp.com",
    projectId: "photogallery-website",
    storageBucket: "photogallery-website.appspot.com",
    messagingSenderId: "892743735762",
    appId: "1:892743735762:web:4bbd7c4f51a8b71c60d00b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; // special tipe of data that firestore can use

export { projectStorage, projectFirestore, timestamp };