import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeJLt5P8MTVAmULewgkandVQQRCP1BgRo",
  authDomain: "myvi-ae89d.firebaseapp.com",
  projectId: "myvi-ae89d",
  storageBucket: "myvi-ae89d.appspot.com",
  messagingSenderId: "110930661927",
  appId: "1:110930661927:web:8f27212d906e2345073402"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
