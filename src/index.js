import menuTpl from './templates/menu-item.hbs';
import menu from './menu.json';

const refs = {
	body: document.querySelector('body'),
	menuList: document.querySelector('.js-menu'),
	themeSwitch: document.querySelector('#theme-switch-toggle'),
	menuMarkup: markupMenuFromTpl(menu),
	theme:{
  		LIGHT: 'light-theme',
  		DARK: 'dark-theme',
		},
}

refs.body.classList.add(refs.theme.LIGHT); //строка добавляет светлую тему на body, но код работает и без нее
refs.menuList.insertAdjacentHTML('beforeend', refs.menuMarkup);
if (localStorage.length) {
	refs.body.classList.add(localStorage.getItem('Theme'));
	refs.themeSwitch.setAttribute('checked', true);
}
refs.themeSwitch.addEventListener('change', onCheckboxChange);

function markupMenuFromTpl(data) {
	return menuTpl(data);
}

function onCheckboxChange() {
	refs.body.classList.toggle(refs.theme.DARK);
	if (refs.body.classList.contains(refs.theme.DARK)) {
		refs.themeSwitch.setAttribute('checked', true);
		localStorage.setItem('Theme', refs.theme.DARK);
		localStorage.setItem('IsChecked', true);
	} else {
		refs.themeSwitch.setAttribute('checked', false);
		localStorage.removeItem('Theme');
		localStorage.removeItem('IsChecked');
	}
}