import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwt0utc1p2FQd6_TYG3m_a4sIanEkwhQ",
  authDomain: "auth-test-37d83.firebaseapp.com",
  projectId: "auth-test-37d83",
  storageBucket: "auth-test-37d83.appspot.com",
  messagingSenderId: "26051406411",
  appId: "1:26051406411:web:8647b076b8faf8321efbce"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }