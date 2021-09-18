import React from 'react'
import firebase from 'firebase/app';
// import firebase from '../../firebaseConfig'
// import {auth} from 'firebase/app'
// import 'firebase/auth'
// import '../Authentication/Login'

export default function Services() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    return (
        <div>
            Services is
        </div>
    )
}
