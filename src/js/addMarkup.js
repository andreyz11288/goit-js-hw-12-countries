
import hend from '../handlebars/hendel.hbs'
const ulRef = document.querySelector('.js-menu');


export default function newStringEl(e) { 
const newStringRef = e.map(hend).join('');
ulRef.insertAdjacentHTML('beforeend', newStringRef)
} 
