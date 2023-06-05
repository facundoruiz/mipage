// Import our custom CSS
import './scss/styles.scss';

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';
import { auth,db } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore"
import { loginCheck } from "./check.js";
import './auth.js'

// script de de uso frecuente
import './logout.js'
import './dashboard.js'
import { showTaks } from "./taks/takList.js";

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





// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
  if (user) {
    
  } 
});

