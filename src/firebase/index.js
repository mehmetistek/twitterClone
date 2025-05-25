import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAl_z1K4uQZoVM2cnoJCo8SgnaCaXs_DE8",
  authDomain: "hi-twitter-61130.firebaseapp.com",
  projectId: "hi-twitter-61130",
  storageBucket: "hi-twitter-61130.appspot.com",
  messagingSenderId: "445031840452",
  appId: "1:445031840452:web:1f770e57addee9d635a791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth referensını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

//veritabanının referansını al
export const db = getFirestore(app);
// storage referansını al 
export const storage = getStorage(app);