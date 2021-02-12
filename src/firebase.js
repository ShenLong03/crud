import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB1JXch8SahkCdkROkF7lxDI_xjFrLYlzY",
    authDomain: "crud-9073c.firebaseapp.com",
    projectId: "crud-9073c",
    storageBucket: "crud-9073c.appspot.com",
    messagingSenderId: "40923138771",
    appId: "1:40923138771:web:5bcd9761dead8525aca226"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)