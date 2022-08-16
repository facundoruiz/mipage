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

