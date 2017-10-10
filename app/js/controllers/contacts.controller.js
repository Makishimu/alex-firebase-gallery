function contactsCtrl(){

	var vm = this;
	
	vm.User = {
		contacts : [
			{
				name: 'eMail',
				link: 'fvhol32167@gmail.com',
				type: 'mail'
			},
			{
				name: 'Skype',
				link: 'fvholl',
				type: 'skype'
			},
			{
				name: 'VK',
				link: 'https://vk.com/id21650873',
				type: 'link'
			},
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/alexander.yakovlev.104',
				type: 'link'
			},
			{
				name: 'Web',
				link: 'https://alexart.com',
				type: 'link'
			}
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

angular.module('alexGalleryApp')
		.controller('contactsCtrl', [contactsCtrl]);