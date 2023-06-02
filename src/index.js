import './front.css';
import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./fire-store.js";
  import {
    checkAuthState,
userSignUp,
userSignIn,
    userSignOut,
  } from "./fire-auth.js";

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



window.addEventListener("DOMContentLoaded", async (e) => {

    checkAuthState();
    const userEmail = document.querySelector("#userEmail");
    const userPassword = document.querySelector("#userPassword");
    const authForm = document.querySelector("#authForm");
    const secretContent = document.querySelector("#secretContent");
    const signUpButton = document.querySelector("#signUpButton");
    const signInButton = document.querySelector("#signInButton");
    const signOutButton = document.querySelector("#signOutButton");

})




signUpButton.addEventListener('click', userSignUp);
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);