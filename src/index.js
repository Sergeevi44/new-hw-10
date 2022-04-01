import menuItemMarkup from './templates/menu-item.hbs';
import menu from './menu.json';

const refs = {
	menuList: document.querySelector('.js-menu'),
	markup: createMenuMarkup(menu),
};

refs.menuList.insertAdjacentHTML('beforeend', refs.markup);
console.log(refs.menuList);
// console.log(menuItemMarkup(menu));

function createMenuMarkup(items){
	return menuItemMarkup(items);
}
