// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvEvmeOri0166GEU1TEgDVKvXvv6dKbKA",
  authDomain: "myfirstapp-de4de.firebaseapp.com",
  projectId: "myfirstapp-de4de",
  storageBucket: "myfirstapp-de4de.appspot.com",
  messagingSenderId: "635975662063",
  appId: "1:635975662063:web:0021c890c011857edd1e1a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}