import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCdw2n-MuTM4obIsrwOMOr-Zox3NT272r4",
  authDomain: "mychat-f8a5f.firebaseapp.com",
  projectId: "mychat-f8a5f",
  storageBucket: "mychat-f8a5f.appspot.com",
  messagingSenderId: "580318059543",
  appId: "1:580318059543:web:b3de6e29d269695b939052"
}).auth();