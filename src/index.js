// import changeTheme from './js/changeTheme'
// import './images/sprite.svg'
// import './styles.css'
// import './js/lazy.js'
// import menu from './store/menu.json';
// import newStringEl from './js/addMarkup.js'
import fetchCountries from './js/fetchCountries'
import CardTpl from './handlebars/hendel.hbs'

// const searchForm = document.querySelector('.form-control');
// searchForm.addEventListener('input', onSearch);

// function onSearch(){
// const nameValue = searchForm.value
// const BASE_URL =`https://restcountries.eu/rest/v2/name/${nameValue}`;

// console.log(fetchCountries)

//      const url = BASE_URL;
// console.log(url)

// fetch(url)
//   .then(r => r.json())
//   .then(console.log);

  
// }

// export default {fetchCountries}
// console.log(fetchCountries)

// const searchForm = document.querySelector('.js-search-form');
// searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const searchQuery = form.elements.query.value;

//     fetchCountries.fetchPokemon(searchQuery)
//         .then(renderPokemonCard)
//         .catch(onFetchError)
//         .finally(() => form.reset())

// }


// function renderPokemonCard(pokemon) {
//   const markup = CardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }