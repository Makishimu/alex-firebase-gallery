(function(){
'use strict';

angular.module('alexGalleryApp').controller('galleryCtrl', galleryCtrl);

galleryCtrl.$inject = ['GalleryService'];

function galleryCtrl(GalleryService){

	var vm = this;
	
	vm.openGallery = false;
	vm.pictures = GalleryService.getWorks();

	/*
	var newElements = [
						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FElf_HuntressPre.png?alt=media&token=54917237-6f6a-4571-bd24-a35d34f9a321",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FElf_Huntress.png?alt=media&token=7b4d8b09-6851-4ee8-a241-c4f36f163c74"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FMedusaPre.png?alt=media&token=cae33cf0-cd07-4cdd-ae88-d27e9816502a",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FMedusa.png?alt=media&token=0221c428-454c-450a-be46-e90e74b1e862"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FPerseusPre.png?alt=media&token=390f8321-172e-4ae9-b1ae-7c17172518a8",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FPerseus.png?alt=media&token=ad6939a6-306b-488c-9091-b299ca4f28cc"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FForest_Elf_Pre.png?alt=media&token=65c3da61-10ec-41cb-a785-ed0b88933531",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FForest_Elf.png?alt=media&token=d8969c78-9425-433f-8f69-fb0f7dc9d92d"},



						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FArabianJinPre.png?alt=media&token=f748cef9-3d01-4a15-bc17-be138d22a53f",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FArabianJin.png?alt=media&token=6dc56a85-8214-4afc-aa5a-723479702642"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FVampireHunterPre.png?alt=media&token=c7a5d624-08d4-4a42-99c0-120e56f37d0b",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FVampireHunter6.png?alt=media&token=68976614-2a78-414e-9bf2-e609e44cb3a2"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FZeusPre.png?alt=media&token=0d335ee6-ad0e-4dcb-8d5c-c4783cb8f270",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FZeus3.png?alt=media&token=b98bc352-0577-42c5-a075-749b7ae2a8bd"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FArabianPrincessPre.png?alt=media&token=127ec260-62cd-4aad-9ac8-72b699783ee8",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FArabianPrincessFull5.png?alt=media&token=c301af48-9076-494c-9da9-83433efc53ec"},


						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FItems2Pre.png?alt=media&token=dee3fe84-a388-479a-89f0-b5f3f8a30e6d",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FItems2.png?alt=media&token=71f84b50-265b-4781-9dbf-c872432ebe90"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FTrapsPre.png?alt=media&token=5a7ad9b3-67b2-4ced-8d18-1af0b608a905",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FTraps.png?alt=media&token=98d26b2f-a603-4d77-b72a-fd30c61b61c9"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FItemsPre.png?alt=media&token=f6300679-8c16-4153-8e0f-aafa17d3df08",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FItems.png?alt=media&token=377f3321-ebd8-4351-b2e9-77e86bbe0f91"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FOrbCharacterPre.png?alt=media&token=fb3c3159-6755-4005-84c0-9e829b36d379",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FOrbcharacter.png?alt=media&token=15b5c314-b738-4669-9165-d80e21ac6fb6"},



						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter6Pre.png?alt=media&token=b1fc5f25-e50b-4698-a8f2-264f32944ca7",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter6.png?alt=media&token=ba5f7757-b529-4bad-a16e-6c5f79dbd50e"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter2Pre.png?alt=media&token=5d3116ba-4728-42f5-9d7b-6a1966b945e2",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter2.png?alt=media&token=40143172-cdf5-41b1-84c3-c08bfc37b84e"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter5Pre.png?alt=media&token=4f9374ab-b082-486a-8467-f6f17c513090",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter5.png?alt=media&token=6b5cbf18-dab7-4a90-865b-d1909c9823d4"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter3Pre.png?alt=media&token=4264935c-fc26-4ecc-bf24-811be24329b3",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter3.png?alt=media&token=7801d39b-5cfc-4d84-82c9-fa85be35ad37"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter4Pre.png?alt=media&token=05874b01-d081-4431-90db-909b3fa14e6d",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter4.png?alt=media&token=b43c06ba-0378-4133-999b-f506dfadb6be"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter8Pre.png?alt=media&token=5768ef42-2808-493d-8c05-c187722bc3b6",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter8.png?alt=media&token=093e76ac-e2d3-4188-a9c6-49534d277bfd"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacterPre.png?alt=media&token=732bf8c5-2911-4078-abdd-605fa841cb8f",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter.png?alt=media&token=79ff6d60-6a14-4c76-852f-8e1fe1e793c0"},

						{"imgLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/thumbnails%2FGIcharacter7Pre.png?alt=media&token=bf0906a7-7b35-4bfb-8bee-c6e3b56ccd02",
						"imgOriginLink":"https://firebasestorage.googleapis.com/v0/b/alexart-4f632.appspot.com/o/origin%2FGIcharacter7.png?alt=media&token=98aa83e7-0a39-4ee4-ac1d-565742733995"}
					];

	// for (var i = 0; i < newElements.length; i += 1){
	// 	GalleryService.addNewWork(newElements[i]);
	// }
	*/

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