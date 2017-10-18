// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7pKncMdJIj6H_Syj1IZLOBDvBPlAmLsM",
    authDomain: "alexart-4f632.firebaseapp.com",
    databaseURL: "https://alexart-4f632.firebaseio.com",
    projectId: "alexart-4f632",
    storageBucket: "alexart-4f632.appspot.com",
    messagingSenderId: "963069978494"
  };

  firebase.initializeApp(config);


// Add angular main module
app = angular.module('alexGalleryApp',['ngRoute','ui.router','firebase']);