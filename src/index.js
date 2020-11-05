


import CardTpl from './handlebars/hendel.hbs';
import  fetchCountriesFunction  from './js/fetchCountries';
import '@pnotify/core/dist/BrightTheme.css';
// import { defaults, error, Stack } from '@pnotify/core';
import { alert, error } from '@pnotify/core';


 



const searchForm = document.querySelector('.form-control');
const form = document.querySelector('.form')
searchForm.addEventListener('input', _.debounce(fetchCountrie, 500));



function fetchCountrie() {
    
    fetchCountriesFunction(searchForm.value).then(renderCard)
    .catch(onFetchError);
}




function renderCard(countrie) {
   form.innerHTML = ''
  const markup = CardTpl(countrie);
  form.insertAdjacentHTML('beforeend', markup);
    if (countrie.length > 10) {
        form.innerHTML = ''
        const myNotice = error({
         hide: 'true',
    delay: '50',
  text: "I'm a notice."
});
      
    }        
        
}
    


function onFetchError() {
//     const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info'
  
// });
 

   
 }



