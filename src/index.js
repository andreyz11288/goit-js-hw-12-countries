

import './css/style.css'
import CardTpl from './handlebars/hendel.hbs';
import CardTplTwo from './handlebars/hendel_copy.hbs'
import  fetchCountriesFunction  from './js/fetchCountries';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error } from '@pnotify/core';

const searchForm = document.querySelector('.form-control');
const form = document.querySelector('.form')
const countrieSpan = document.querySelector('.coun-span')
searchForm.addEventListener('input', _.debounce(fetchCountrie, 500));




function fetchCountrie() {    
    fetchCountriesFunction(searchForm.value).then(renderCard)
    .catch(onFetchError);
}




function renderCard(countrie) {
  
  form.innerHTML = ''  
  countrieSpan.textContent = countrie.length;
  const markup = CardTpl(countrie);
  const markupTwo = CardTplTwo(countrie);
  if (countrie.length === 1) { form.insertAdjacentHTML('beforeend', markup); }
  else {
    form.insertAdjacentHTML('beforeend', markupTwo);
    if (countrie.length > 10) {
      noticeError(countrie.length)
    }
  }        
}
    
function noticeError() {   
  form.innerHTML = ''
  const myNotice = error({
  delay: 1000,
  hide: true,
  sticker: false,
  text: "Too many matches found. Pleas enter a more specific query"});
}

function onFetchError() {
  form.innerHTML = ''
}



