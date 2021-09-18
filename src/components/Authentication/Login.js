import React, { Component } from 'react';
import firebaseConfig from '../../firebaseConfig';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';

class Login extends Component {
   
    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        const uiConfig = {
            signInOptions: [{
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image',
                    size: 'normal',
                    badge: 'bottomleft'
                },
                defaultCountry: 'VN'
            }],
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // alert(authResult.user.phoneNumber);
                    display(authResult.user.phoneNumber);
                    return true;
                }
            },
            signInSuccessUrl: "/services"
        };
        const display = data => {
            console.log(data)
        }
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig);

    };
    render() {
        return (
            <div id='firebaseui-auth-container'>
               
            </div>
        );
    }
}

export default Login;
