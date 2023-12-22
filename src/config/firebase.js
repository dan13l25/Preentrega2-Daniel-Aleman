import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/database"
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAycDsWtlwzKo1_6aTrCb9ubXFxXCa4DVc", 
  authDomain: "entrega-final-68fc4.firebaseapp.com",
  projectId: "entrega-final-68fc4",
  storageBucket: "entrega-final-68fc4.appspot.com",
  messagingSenderId: "358439539609",
  appId: "1:358439539609:web:2aa4919d8b9aa13e83f908"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db,app };
export const googleProvider = new GoogleAuthProvider()
/*export const db = firestore;
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { storage } from "firebase/storage"; // Importa storage directamente


const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storageData = firebase.storage();

export { auth, db, storage };*/
