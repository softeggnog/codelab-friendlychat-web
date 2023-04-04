/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  const firebaseConfig = {
  apiKey: "AIzaSyAxZPBoSjFvVz2EWSLguRJb6z5cKSdVZzc",
  authDomain: "friendlychat-e4510.firebaseapp.com",
  projectId: "friendlychat-e4510",
  storageBucket: "friendlychat-e4510.appspot.com",
  messagingSenderId: "863084117804",
  appId: "1:863084117804:web:26530aeba9986e8a1c7689"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
