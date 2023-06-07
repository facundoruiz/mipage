// Import our custom CSS
import './scss/styles.scss';

// Import only the Bootstrap components we need

import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { loginCheck } from "./check.js";
import './auth.js'

// script de de uso frecuente
import './logout.js'
import './dashboard.js'
import {showTareas} from  './taks/takList.js'
import './notify.js'
// ------- serviceWorker
/*
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
*/
// Evento 'DOMContentLoaded' para asegurar que el DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
  // Tu código JavaScript aquí
  
  // Registrar el Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('Service Worker registrado correctamente');
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }

  // Verificar si la PWA se puede instalar
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Evitar que se muestre el banner de instalación automáticamente
  const installButton = document.getElementById('install-button');
  
  installButton.addEventListener('click', () => {
    event.prompt(); // Mostrar el banner de instalación al hacer clic en el botón
    event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('La PWA se instaló correctamente.');
      } else {
        console.log('El usuario canceló la instalación de la PWA.');
      }
    });
  });
  
  installButton.style.display = 'block'; // Mostrar el botón de instalación
});

  
  // Otras funcionalidades de tu PWA
  
});




// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
  if (user) {
    showTareas()
  } 
});

