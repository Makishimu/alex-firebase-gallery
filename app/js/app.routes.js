(function(){
  'use strict';

  angular.module('alexGalleryApp').config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider'];
  function routes($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
    $stateProvider
      .state('gallery', gallery);
    $stateProvider
      .state('contacts', contacts);


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/gallery');
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path[path.length-1] === '/';
      if(hasTrailingSlash) {
        var newPath = path.substr(0, path.length - 1); 
        return newPath; 
      } 
    });
  }

  /*
   * State Controllers
   * */
  var gallery = {
    url: '/gallery',
    templateUrl: 'templates/gallery.template.html',
    controller: 'galleryCtrl as vm'
  },
  contacts = {
    url: '/contacts',
    templateUrl: 'templates/contacts.template.html',
    controller: 'contactsCtrl as vm'
  };
  /*
   * End State Controllers
   * */
})();