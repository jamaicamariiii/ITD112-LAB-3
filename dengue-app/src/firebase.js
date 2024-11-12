// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8b5oaNQOZzWT_745kJzuiY9wtwBmr4ls",
  authDomain: "lab3final-8f8d4.firebaseapp.com",
  projectId: "lab3final-8f8d4",
  storageBucket: "lab3final-8f8d4.firebasestorage.app",
  messagingSenderId: "1082366412586",
  appId: "1:1082366412586:web:918b1f68f9dca0df6cc053",
  measurementId: "G-783PD8PCHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
const db = getFirestore(app);
let analytics;
if (typeof window !== "undefined") { // Ensure analytics is only initialized in the browser
  analytics = getAnalytics(app);
}

export { db, analytics };
