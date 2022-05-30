// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQYBH5i9cTtDHZtX4C3XUQ8mbl89YSMyQ",
  authDomain: "ema-jhon-simple-aab25.firebaseapp.com",
  projectid: "ema-jhon-simple-aab25",
  storageBucket: "ema-jhon-simple-aab25.appspot.com",
  messagingSenderid: "458161269664",
  appid: "1:458161269664:web:2b908531cddeaa38ab52c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;