import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// rather create an .env file and populate the strings in that file for safety

const firebaseConfig = {
  // data has been removed for saftey reasons, fetch api details from firebase data settings 

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
// const analytics = getAnalytics(app);
