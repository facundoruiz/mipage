
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
//Update the below URL with the appropriate version if necessary.
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfWJI-HGKNf0j1twCfDYbDfURriYEV-I",
  authDomain: "htc-lite.firebaseapp.com",
  projectId: "htc-lite",
  storageBucket: "htc-lite.appspot.com",
  messagingSenderId: "203972745663",
  appId: "1:203972745663:web:120b790e6347f32718a90a",
  measurementId: "G-04BQ462LVL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));


//!TODO ////////////////////////////////////////////////////-   AUTH

export const userSignUp = async() => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Your account has been created!");
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage)
  })
}

export const userSignIn = async() => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
  .then((userCredential) => {
      const user = userCredential.user;
      alert("You have signed in successfully!");
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage)
  })
}

export const checkAuthState = async() => {
  onAuthStateChanged(auth, user => {
      if(user) {
          authForm.style.display = 'none';
          secretContent.style.display = 'block';
      }
      else {
          authForm.style.display = 'block';
          secretContent.style.display = 'none';
      }
  })
}

export const userSignOut = async() => {
  await signOut(auth);
}