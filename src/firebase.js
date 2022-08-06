import {initializeApp } from 'firebase/app'; // imported the firebase by "firebaseapp" name
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlBkKEFWuh9q9EKTlJppqMjjbtSUzvIRE",
    authDomain: "school-directory-fdb71.firebaseapp.com",
    projectId: "school-directory-fdb71",
    storageBucket: "school-directory-fdb71.appspot.com",
    messagingSenderId: "808293954655",
    appId: "1:808293954655:web:5c9387e086f3f46d3117ea",
    measurementId: "G-GM6QW9934P"
  };

  initializeApp(firebaseConfig); // initialinzing the main database from this local file

  const db=getFirestore(); // importing the firestore database as db

  export default db;