(function(){
'use strict';

angular.module('alexGalleryApp').controller('galleryCtrl', galleryCtrl);

galleryCtrl.$inject = ['GalleryService'];

function galleryCtrl(GalleryService){

	var vm = this;
	
	vm.openGallery = false;
	vm.pictures = GalleryService.getWorks();

	vm.showedPicture = {
		imgOriginLink : '',
		index: 0
	};

	vm.showOriginPicture = function (index){
			vm.showedPicture = vm.pictures[index];
			vm.showedPicture.index = index;
			vm.openGallery = true;
			document.getElementById("body").style.overflow = "hidden";
	};

	vm.nextPicture = function(){
		var index = parseInt(vm.showedPicture.index);

		if( index < vm.pictures.length - 1){
			vm.showedPicture = vm.pictures[index + 1];
			vm.showedPicture.index = index + 1;

		} else {
			vm.showedPicture = vm.pictures[0];
			vm.showedPicture.index = 0;
		}
		
	};

	vm.previousPicture = function(){
		var index = parseInt(vm.showedPicture.index);

		if( index > 0){

			vm.showedPicture = vm.pictures[index - 1];
			vm.showedPicture.index = index - 1;
		} else {
			index = vm.pictures.length - 1;
			vm.showedPicture = vm.pictures[index];
			vm.showedPicture.index = index;
		}
	};

	vm.closeGalley = function(){
		vm.openGallery = false;
		document.getElementById("body").style.overflow = "auto";
	};
};
})();