function galleryCtrl(){

	var vm = this;
	
	vm.pictures = [
		{
			imgLink : 'img/thumbnails/ArabianJinPre.png'
		},
		{
			imgLink : 'img/thumbnails/ArabianPrincessPre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter2Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter3Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter4Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter5Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter6Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter7Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacter8Pre.png'
		},
		{
			imgLink : 'img/thumbnails/GIcharacterPre.png'
		},
		{
			imgLink : 'img/thumbnails/OrbCharacterPre.png'
		},
		{
			imgLink : 'img/thumbnails/VampireHunterPre.png'
		},
		{
			imgLink : 'img/thumbnails/ZeusPre.png'
		}
	]
};

angular.module('alexGalleryApp')
		.controller('galleryCtrl', [galleryCtrl]);