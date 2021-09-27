import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth';
const app = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID
};
const f = firebase.initializeApp(app)
const auth = firebase.auth();
const fireDb = f.database().ref()
export {auth, firebase, fireDb};