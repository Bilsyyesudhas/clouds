// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import {getdatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCP9wScWAuwmbServMyZ970yhiGPcyPKws",
  authDomain: "todoapp-eeeb7.firebaseapp.com",
  databaseURL: 'https://capecloud-b64b1-default-rtdb.firebaseio.com',
  projectId: "capecloud-b64b1",
  storageBucket: "gs://capecloud-b64b1.appspot.com/",
  messagingSenderId: "715067470333",
  appId: "1:715067470333:android:ca0688ebc76e3d0aeb2994"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
export const db=getdatabase(app);
// export default app;