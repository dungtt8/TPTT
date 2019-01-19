
  import firebase from '@firebase/app'
  import '@firebase/database'
  var config = {
    apiKey: "AIzaSyCpADloI73xKvcin6bBLqQn6EzU0QjGQFA",
    authDomain: "tptt-6a1d0.firebaseapp.com",
    databaseURL: "https://tptt-6a1d0.firebaseio.com",
    projectId: "tptt-6a1d0",
    storageBucket: "",
    messagingSenderId: "514696045294"
  };
export const firebaseApp =   firebase.initializeApp(config);
