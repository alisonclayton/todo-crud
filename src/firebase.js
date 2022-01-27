import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8x9irzqyPqLgFF6eqHJfjeSu3LgMX3gI",
    authDomain: "todo-crud-91dab.firebaseapp.com",
    projectId: "todo-crud-91dab",
    storageBucket: "todo-crud-91dab.appspot.com",
    messagingSenderId: "603164202822",
    appId: "1:603164202822:web:0eeaadd590063472343747",
    measurementId: "G-1932HCC311"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }