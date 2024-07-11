import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";

function App() {

const firebaseConfig = {
  apiKey: "AIzaSyB6tBN9cCTfqflOi8BEBsSgjJc_r6vAT0w",
  authDomain: "e-cart-87bf3.firebaseapp.com",
  projectId: "e-cart-87bf3",
  storageBucket: "e-cart-87bf3.appspot.com",
  messagingSenderId: "790552606247",
  appId: "1:790552606247:web:afe042284d390adda04002",
  measurementId: "G-Q851YYDNFN"
};

useEffect(()=>{
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("hello");
},[])

 return <div>
 <h1>Hello World</h1>
 <Link to="about">About Us</Link>
</div>
}

export default App
