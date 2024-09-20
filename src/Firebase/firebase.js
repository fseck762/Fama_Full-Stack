// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAavZ9QIyzgfC3_qbKOnk2cBKMAVodyeuE",
  authDomain: "photo-gallery-88b11.firebaseapp.com",
  projectId: "photo-gallery-88b11",
  storageBucket: "photo-gallery-88b11.appspot.com",
  messagingSenderId: "944033261327",
  appId: "1:944033261327:web:a8ab799103f7411679007a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const projectStorage = getStorage(app);

// Initialize store
 const projectFirestore = getFirestore(app);

 export{projectStorage, projectFirestore};