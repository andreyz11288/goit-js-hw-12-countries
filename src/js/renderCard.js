import getRefs from './refs'
import fetchCountrie from './fetchImport'
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


export function onFetchError() {
  refs.form.innerHTML = ''
  refs.countrieP.textContent = `Введите название страны`;
}
