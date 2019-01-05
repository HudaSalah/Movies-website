import Firebase from 'firebase/app';
 
 //=========================== Initialize Firebase ====================================
 const firebase = require("firebase");
//  Required for side-effects
 require("firebase/firestore");
//   const firestore = firebase.firestore();
//  firestore.settings({
//     timestampsInSnapshots: true
//   });
 
 const config = {
     apiKey: "AIzaSyA8WN8o76XaU5j962YTo8QxhOO9kV8cAFQ",
     authDomain: "movies-website-2019.firebaseapp.com",
     databaseURL: "https://movies-website-2019.firebaseio.com",
     projectId: "movies-website-2019",
     storageBucket: "movies-website-2019.appspot.com",
     messagingSenderId: "583794108096"
   };
   
   firebase.initializeApp(config);
//========================================================================================= 

  export default Firebase;