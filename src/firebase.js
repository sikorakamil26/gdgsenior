import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDfhDarHPEWRfq-rfSnQv32CQPfbxPT2D4",
    authDomain: "gdgsenior.firebaseapp.com",
    databaseURL: "https://gdgsenior.firebaseio.com",
    projectId: "gdgsenior",
    storageBucket: "gdgsenior.appspot.com",
    messagingSenderId: "894700301228",
    appId: "1:894700301228:web:09d07e7f22ed5acede2809"
  };

  const Firebase = firebase.initializeApp(config);
  export default Firebase;