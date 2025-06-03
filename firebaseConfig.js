import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEXxxW4F1bdMv9v8m2Kgxxf49q_nmZiL8",
  authDomain: "movie-app-63b71.firebaseapp.com",
  projectId: "movie-app-63b71",
  storageBucket: "movie-app-63b71.appspot.com",
  messagingSenderId: "470226869218",
  appId: "1:470226869218:web:e971dd1b735425291837bb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const apiRoute =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEXxxW4F1bdMv9v8m2Kgxxf49q_nmZiL8";

const projectId = "movie-app-63b71";
const apiKey = "AIzaSyBEXxxW4F1bdMv9v8m2Kgxxf49q_nmZiL8";

export { app, auth, db, apiRoute, projectId, apiKey };
