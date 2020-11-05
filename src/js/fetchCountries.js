import CardTpl from '../handlebars/hendel.hbs'
const searchForm = document.querySelector('.form-control');
const form = document.querySelector('.form')
searchForm.addEventListener('input', _.debounce(fetchCountries, 500));



 function fetchCountries(searchQuery){

const nameValue = searchForm.value
const url =`https://restcountries.eu/rest/v2/name/${nameValue}`;

fetch(url)
  .then(r => r.json())
  .then(renderCard)
    .catch(onFetchError);
 }


function renderCard(countrie) {
   form.innerHTML = ''
  const markup = CardTpl(countrie);
   form.insertAdjacentHTML('beforeend', markup);
   console.log(markup)
      
    }


 function onFetchError(error) {
  alert('Упс, что-то пошло не так!');
 }


export default {fetchCountries}

//  дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.