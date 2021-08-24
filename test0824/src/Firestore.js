import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDQv3LYaww5E1tBvJVKlBL8jEaMp1Ahnhc",
    authDomain: "snow-ff2d6.firebaseapp.com",
    projectId: "snow-ff2d6",
    storageBucket: "snow-ff2d6.appspot.com",
    messagingSenderId: "49370137530",
    appId: "1:49370137530:web:aa970ccbacf3d82d879383",
    measurementId: "G-07DG3RYTEW"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export default firestore;