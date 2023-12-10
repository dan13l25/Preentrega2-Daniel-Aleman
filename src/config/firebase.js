import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAycDsWtlwzKo1_6aTrCb9ubXFxXCa4DVc",
  authDomain: "entrega-final-68fc4.firebaseapp.com",
  projectId: "entrega-final-68fc4",
  storageBucket: "entrega-final-68fc4.appspot.com",
  messagingSenderId: "358439539609",
  appId: "1:358439539609:web:2aa4919d8b9aa13e83f908"
};

const app = initializeApp(firebaseConfig);
export const db =   getFirestore(app)


