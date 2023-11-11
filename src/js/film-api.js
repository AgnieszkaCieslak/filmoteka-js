import axios from 'axios';
import markers from './markers';

const FILM_API_KEY = '4e243d8288d1053ad482b1cbee56dc45';
// Przeczytaj kod odczytu API: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTI0M2Q4Mjg4ZDEwNTNhZDQ4MmIxY2JlZTU2ZGM0NSIsInN1YiI6IjY1NDYyNTg4NmJlYWVhMDBlYWY3N2IzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OWD6PCpiZT5kUqd_jZX8HbncGhsqOzYPOFKT3MDIa0s
// Dokumentacja
// Our primary documentation is located at developer.themoviedb.org.

// Wsparcie
// If you have questions or comments about the information covered here, please create a post on our support forums.

// Szczegóły API
// If you'd like to edit the details of your app, click here.

export { allMovies, search, details, youTube };
//-------------------------------

const BASE_PATH = 'https://api.themoviedb.org/3/';
const bodys = {
  //   all: 'trending/all/day?language=en-US',
  all: 'trending/all/day?',
  //   search: 'search/movie?include_adult=false&language=en-US&page=1',
  search: 'search/movie?',
  //   details: 'movie/movie_id?language=en-US',
  //   details: 'movie/movie_id?',//ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  details: 'movie/',
  //   youtube: 'movie/movie_id/videos?language=en-US',
  //   youtube: 'movie/movie_id/videos?', //ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  youtube: 'movie/',
  movie_id: ['945729', '507089', '787781', '790459'], //movie_id = id, ??? = title, ??? = original_title, ??? = overview, ???? = poster_path, ??? = vote_average, ??? = release_date >>> 	"2023-09-13", ??? = genre_ids,
  genre_ids: [9648, 53, 80],
};
//api.themoviedb.org/3/movie/550?api_key=4e243d8288d1053ad482b1cbee56dc45

// console.log('ALL: ', BASE_PATH + bodys.all + 'api_key=' + FILM_API_KEY);
const allMovies = BASE_PATH + bodys.all + 'api_key=' + FILM_API_KEY;

// console.log('SEARCH: ', BASE_PATH + bodys.search + 'api_key=' + FILM_API_KEY);
const search = BASE_PATH + bodys.search + 'api_key=' + FILM_API_KEY;

// console.log('DETAILS: ', BASE_PATH + bodys.details + bodys.movie_id[0] + '?'+ 'api_key=' + FILM_API_KEY);
const details = BASE_PATH + bodys.details + bodys.movie_id[0] + '?' + 'api_key=' + FILM_API_KEY;

// console.log('YOU TUBE: ', BASE_PATH + bodys.youtube + bodys.movie_id[1] + '/videos?' + 'api_key=' + FILM_API_KEY);
const youTube =
  BASE_PATH + bodys.youtube + bodys.movie_id[1] + '/videos?' + 'api_key=' + FILM_API_KEY;

// axios.defaults.baseURL = BASE_PATH;
// const htmlBody = bodys.all + 'api_key=' + FILM_API_KEY;

// async function getAllPopularMovies(){
//   const { data } = await axios.get(htmlBody);
//    return data;
//       };

//       document.addEventListener('DOMContentLoaded', async () => {

// let allMoviesData = null;

// const moviesData = await getAllPopularMovies();
//------------------
// function jasnaCholera() {
//   moviesData.forEach(item => {
//     const movieTitle = document.createElement('h2');
//     movieTitle.textContent = item.list_name;
//     movieTitle.classList.add('movie-name');

//     const movieList = document.createElement('ul');
//     movieList.classList.add('movie-list');

//     category.books.forEach(item => {
//       const bookItem = document.createElement('li');
//       bookItem.classList.add('book-item');
//       bookItem.innerHTML = `
//         <img class="book-item_image" src="${item.book_image}" alt="${item.title}" data-id="${item._id}">
//         <h3 class="book-item_title">${item.title}</h3>
//         <p class="book-item_author"> ${item.author}</p>
//       `;
//       movieList.appendChild(bookItem);
//     });
//     markers.outputAll.appendChild(movieTitle);
//     markers.outputAll.appendChild(movieList);
//     markers.outputAll.appendChild(seeMoreButton);
//   }
//   )
// });

//-----------------------------------
// for (const item of data){
//   console.log(item);
//   console.log(item.id);

// console.log('htmlBody: ', htmlBody); //trending/all/day?api_key=4e243d8288d1053ad482b1cbee56dc45
// console.log('getAllPopularMovies: ', getAllPopularMovies());//Promise jak powinien byc

// function a (){
//   const movieData = getAllPopularMovies();
// movieData.forEach(movie => {
//   const movieTitle = document.createElement('h2');
//   movieTitle.textContent = movie._name;
//   movieTitle.classList.add('movie-name');
//   console.log(movieTitle);
// })
// };
// a();

// function b () {
//   const movieData = getAllPopularMovies();
//   console.log('movieData: ', movieData);
//   for (array of movieData){
//   console.log(array);
//   console.log(movieData[key]);
// }};
// console.log('b: ', b());
// console.log('getAllPopularMovies(Array): ', getAllPopularMovies(Array[0]));
// const movieData = getAllPopularMovies();
// for (const item of movieData){
//   console.log(item);
//   console.log(item.id);
// }

// console.log('movieData: ', movieData);
// movieData.forEach(poster_path=>{
//   const imgPoster = document.createElement('li');
//   imgPoster.classList.add('movie-item');
//   imgPoster.innerHTML = `<img class="movie-item_image" src="${movieData.poster_path}" alt="${book.title}" data-id="${book._id}">
//   <h3 class="book-item_title">${book.title}</h3>
//   <p class="book-item_author"> ${book.author}</p>`;
// })
//
//
//
//
//--------POBIERALNIA-----------------
//---ALL------
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 4e243d8288d1053ad482b1cbee56dc45',
//   },
// };

// fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
//-------ALL----------
//------------DETAILS-------------
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 4e243d8288d1053ad482b1cbee56dc45',
//   },
// };

// fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
//-----DETAILS------------------------
//----------SEARCH-------------
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 4e243d8288d1053ad482b1cbee56dc45',
//   },
// };

// fetch(
//   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
//   options,
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
//----------------SEARCH--------------
//---------YOUTUBE--------------
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 4e243d8288d1053ad482b1cbee56dc45',
//   },
// };

// fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
//------------------YOUTUBE---------------------

// const baza = {
//   id:
//   name:
//   original_language:
//   original_name:
//   overview:
//   poster_path:
//   genre_ids: [ ]
// first_air_date:
// vote_average:
// original_country:
// };
