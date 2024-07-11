// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export 
const firebaseConfig = {
  apiKey: "AIzaSyB6tBN9cCTfqflOi8BEBsSgjJc_r6vAT0w",
  authDomain: "e-cart-87bf3.firebaseapp.com",
  projectId: "e-cart-87bf3",
  storageBucket: "e-cart-87bf3.appspot.com",
  messagingSenderId: "790552606247",
  appId: "1:790552606247:web:afe042284d390adda04002",
  measurementId: "G-Q851YYDNFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app)
