angular
	.module('alexGalleryApp')
	.controller('contactsCtrl', [contactsCtrl]);

	contactsCtrl.$inject = [];

function contactsCtrl(){

	var vm = this;
	
	vm.User = {
		contacts : [
			{
				name: 'eMail',
				link: 'fvhol32167@gmail.com',
				reference: false,
				mail: true,
				skype: false
			},
			{
				name: 'Skype',
				link: 'fvholl',
				reference: false,
				mail: false,
				skype: true
			},
			{
				name: 'VK',
				link: 'https://vk.com/id21650873',
				reference: true,
				mail: false,
				skype: false
			},
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/alexander.yakovlev.104',
				reference: true,
				mail: false,
				skype: false
			}
			// ,
			// {
			// 	name: 'Web',
			// 	link: 'https://alexart.com',
			// 	reference: true,
			//	mail: false,
			//	skype: false
			// }
		],
		icons : [
			{
				class: 'fa-skype',
				link: 'fvholl',
				type: 'skype'
			},
			{
				class: 'fa-facebook-official',
				link: 'https://www.facebook.com/alexander.yakovlev.104',
				type: 'link'
			},
			{
				class: 'fa-envelope-o',
				link: 'fvhol32167@gmail.com',
				type: 'mail'
			},
			{
				class: 'fa-vk',
				link: 'https://vk.com/id21650873',
				type: 'link'
			}
		]
	}
};