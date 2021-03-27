import firebase from 'firebase/app';
import 'firebase/firestore';
// import "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCNYuy7JkW9ELsVuC58O-wNUoCWnkAyyiQ',
  authDomain: 'awesome-recipes-7.firebaseapp.com',
  projectId: 'awesome-recipes-7',
  storageBucket: 'awesome-recipes-7.appspot.com',
  messagingSenderId: '318260953984',
  appId: '1:318260953984:web:c9c38430b0554dca1c7765',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// export const auth = firebase.auth();
export default db;
