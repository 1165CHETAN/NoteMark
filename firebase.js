import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDPnmKB3R7tmgAqv6sX2bg0YJZP5fFK-qs",
  authDomain: "react-notes-96581.firebaseapp.com",
  projectId: "react-notes-96581",
  storageBucket: "react-notes-96581.appspot.com",
  messagingSenderId: "739695086572",
  appId: "1:739695086572:web:446c445099960ebe134ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
