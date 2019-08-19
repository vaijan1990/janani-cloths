import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyCBb4i3fOjA_g258isKM6WUIii8lDTaW3E",
    authDomain: "shop-dp-1be1c.firebaseapp.com",
    databaseURL: "https://shop-dp-1be1c.firebaseio.com",
    projectId: "shop-dp-1be1c",
    storageBucket: "",
    messagingSenderId: "1060627018602",
    appId: "1:1060627018602:web:38256df3c5836a53"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({  prompt: 'select_account' });
export const signInWithGoggle = () => auth.signInWithPopup(provider);

export default firebase;
