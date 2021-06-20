import gallery from "./menu.json";
import cardGallery from '../templates/cards.hbs';
import './sass/main.scss';
import themeBody from './theme.js'



const cardsContainer = document.querySelector('.js-menu');
const cardsMenu = cardsGallery(gallery);
cardsContainer.insertAdjacentHTML('beforeend', cardsMenu)

function cardsGallery(gallery){

return cardGallery(gallery);
}