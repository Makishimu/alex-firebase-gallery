function headerCtrl(){

	var vm = this;
	
	vm.selectedState = 'gallery';


	console.log('sss');
};

angular.module('alexGalleryApp')
		.controller('headerCtrl', [headerCtrl]);