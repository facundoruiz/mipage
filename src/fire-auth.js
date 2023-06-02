  //Update the below URL with the appropriate version if necessary.
  import { initializeApp } from 'firebase/app';
  import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged,
      signOut
  //Update the below URL with the appropriate version if necessary.
  } from "firebase/auth";

 

  // INSERT YOUR FIREBASE CONFIG OBJECT HERE



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



  secretContent.style.display = 'none';

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
