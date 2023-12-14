// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRdOpfVTRjAMJ_0qMudMYNujS_hYr2X0",
  authDomain: "coffee-store-763bd.firebaseapp.com",
  projectId: "coffee-store-763bd",
  storageBucket: "coffee-store-763bd.appspot.com",
  messagingSenderId: "253619123972",
  appId: "1:253619123972:web:b60ea9ed128dcfadaa4251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;