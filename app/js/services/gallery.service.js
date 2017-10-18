(function(){
  'use strict';

  angular.module('alexGalleryApp').factory('GalleryService', ['$firebaseArray', galleryService]);

  function galleryService($firebaseArray) {
	var gallery = {}

	var galleryWorksRef = firebase.database().ref().child("gallery");

	gallery.getWorks = function(){
		return $firebaseArray(galleryWorksRef);
	}


	gallery.addNewWork = function(work){
		gallery.getWorks().$add(work)
	}

	return gallery

  }
})();