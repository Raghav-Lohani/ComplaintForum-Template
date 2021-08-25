import firebase from 'firebase'
require('@firebase/firestore')
 var firebaseConfig = {
    apiKey: "AIzaSyAuaiX3TvrGZis-STa2Empqx590Klse5v8",
    authDomain: "wily-app-56a6f.firebaseapp.com",
    databaseURL:"https://wily-app-56a6f.firebaseio.com",
    projectId: "wily-app-56a6f",
    storageBucket: "wily-app-56a6f.appspot.com",
    messagingSenderId: "858476680247",
    appId: "1:858476680247:web:f59d4e76b4d4a98f6cdbb2"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase.firestore
