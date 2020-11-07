import getRefs from './refs'
// import CardTpl from '../handlebars/hendel.hbs';
// import CardTplTwo from '../handlebars/hendel_copy.hbs';
import fetchCountrie from './fetchImport'
// import { noticeError } from './notice'
import {markupFun, markupTwoFn} from './markup'


const refs = getRefs()
refs.searchForm.addEventListener('input', _.debounce(fetchCountrie, 500));



export function renderCard(countrie) {  
  refs.form.innerHTML = '' 
  if (countrie.length === undefined) { refs.countrieP.textContent = "Такой страны не существует!"; }
  else { refs.countrieP.textContent = `Найдено стран: ${countrie.length}`; }
  if (countrie.length === 1) { markupFun(countrie) }
  else {markupTwoFn(countrie)}        
}


// function markupFun(countrie) {
//     const markup = CardTpl(countrie);
//     inAdHtml(markup)
// }

// function markupTwoFn(countrie) {
//     const markup = CardTplTwo(countrie);
//     inAdHtml(markup);
//     if (countrie.length > 10) {
//       noticeError(countrie.length)
//     } 
// }

// function inAdHtml(markup) {
//     refs.form.insertAdjacentHTML('beforeend', markup);
// }


export function onFetchError() {
  refs.form.innerHTML = ''
  refs.countrieP.textContent = `Введите название страны`;
}
