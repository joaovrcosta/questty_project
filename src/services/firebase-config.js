import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYG-KToODN74sZDaihD8qDTBreBKlhXAo",
  authDomain: "questty-web-app.firebaseapp.com",
  databaseURL: "https://questty-web-app-default-rtdb.firebaseio.com",
  projectId: "questty-web-app",
  storageBucket: "questty-web-app.appspot.com",
  messagingSenderId: "419668746550",
  appId: "1:419668746550:web:56f5c11107f4401e895397"
};




const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
