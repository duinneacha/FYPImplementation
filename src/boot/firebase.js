
import firebase from "firebase/app"

import "firebase/auth"

  // www.alidorgan.com web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDp_cNJMXQ5cot8QafDZUgFGyCRVee1knI",
    authDomain: "r00145278nutrution.firebaseapp.com",
    databaseURL: "https://r00145278nutrution-default-rtdb.firebaseio.com",
    projectId: "r00145278nutrution",
    storageBucket: "r00145278nutrution.appspot.com",
    messagingSenderId: "924163920049",
    appId: "1:924163920049:web:16ec62a4ccc870ea5d5290"
  }
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);

  let firebaseAuth = firebaseApp.auth()

  export { firebaseAuth }