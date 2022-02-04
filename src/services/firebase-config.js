import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1THTLe3qTqEzWlQKQdjDxpOXhbBNm6Sw",
  authDomain: "questty-aa15d.firebaseapp.com",
  databaseURL: "https://questty-aa15d-default-rtdb.firebaseio.com",
  projectId: "questty-aa15d",
  storageBucket: "questty-aa15d.appspot.com",
  messagingSenderId: "314661919515",
  appId: "1:314661919515:web:6f0eb709c24cae17b211be",
  measurementId: "G-JNHGHJ0XYW"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
