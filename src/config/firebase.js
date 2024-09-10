import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9ZSCnOfeyOu-6_2HM2IErSV37QboMcE4",
  authDomain: "blog-e2a95.firebaseapp.com",
  projectId: "blog-e2a95",
  storageBucket: "blog-e2a95.appspot.com",
  messagingSenderId: "1096213877045",
  appId: "1:1096213877045:web:a5f190407e77e70d817c7c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
