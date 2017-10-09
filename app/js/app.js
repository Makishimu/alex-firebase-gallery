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
app = angular.module('alexGalleryApp',['ngRoute','ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/gallery');

    $stateProvider
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'templates/gallery.template.html',
            controller: 'galleryCtrl as vm'
        })
    
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'templates/contacts.template.html',
            controller: 'contactsCtrl as vm'
        });
});