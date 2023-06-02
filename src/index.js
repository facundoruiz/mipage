import './front.css';


// ------- serviceWorker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('serverwork.js').then(reg => {
                console.log('Registration successful', reg);
                // registerNotification();
            })
            .catch(e => console.error('Error during service worker registration:', e));
    });


} else {
    console.warn('Service Worker is not supported');
}

  //Update the below URL with the appropriate version if necessary.
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged,
      signOut
  //Update the below URL with the appropriate version if necessary.
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
 

  // INSERT YOUR FIREBASE CONFIG OBJECT HERE



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const userEmail = document.querySelector("#userEmail");
  const userPassword = document.querySelector("#userPassword");
  const authForm = document.querySelector("#authForm");
  const secretContent = document.querySelector("#secretContent");
  const signUpButton = document.querySelector("#signUpButton");
  const signInButton = document.querySelector("#signInButton");
  const signOutButton = document.querySelector("#signOutButton");

  secretContent.style.display = 'none';

  const userSignUp = async() => {
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

  const userSignIn = async() => {
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

  const checkAuthState = async() => {
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

  const userSignOut = async() => {
      await signOut(auth);
  }

  checkAuthState();

  signUpButton.addEventListener('click', userSignUp);
  signInButton.addEventListener('click', userSignIn);
  signOutButton.addEventListener('click', userSignOut);