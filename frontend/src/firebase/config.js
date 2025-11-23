import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCEjbvzeaFEGIvFxh2p05zxTsHgXT49aqY",
  authDomain: "compaint-system-38e52.firebaseapp.com",
  projectId: "compaint-system-38e52",
  storageBucket: "compaint-system-38e52.firebasestorage.app",
  messagingSenderId: "945866576430",
  appId: "1:945866576430:web:645493691f1c3ae6a4c5bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export default app;
