// Import our custom CSS
import './scss/styles.scss';

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import './auth.js'

import { loginCheck } from "./check.js";
import './logout.js'

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


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
  if (user) {
    loginCheck(user);
    /*try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }*/
  } else {
   // setupPosts([]);
    loginCheck(user);
  }
});

