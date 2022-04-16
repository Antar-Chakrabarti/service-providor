import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCGHBsb1YS8004vFlY33jP0thQK0_SrDSM",
    authDomain: "assignment-10-8a1e0.firebaseapp.com",
    projectId: "assignment-10-8a1e0",
    storageBucket: "assignment-10-8a1e0.appspot.com",
    messagingSenderId: "263453007912",
    appId: "1:263453007912:web:4be4e39cba0a76aedc151d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;