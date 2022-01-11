import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// rather create an .env file and populate the strings in that file for safety
const firebaseConfig = {
    apiKey: "AIzaSyCcG7BGPdKTRxcdK7TMpL0wkHviGU0aAlY",
    authDomain: "fir-crud-react-3d90b.firebaseapp.com",
    projectId: "fir-crud-react-3d90b",
    storageBucket: "fir-crud-react-3d90b.appspot.com",
    messagingSenderId: "206334012285",
    appId: "1:206334012285:web:31078e6161b3ae667f7a14",
    measurementId: "G-Y3VXVT835N"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
// const analytics = getAnalytics(app);