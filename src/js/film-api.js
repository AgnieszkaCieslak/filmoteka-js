const FILM_API_KEY = '4e243d8288d1053ad482b1cbee56dc45';
// Przeczytaj kod odczytu API: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTI0M2Q4Mjg4ZDEwNTNhZDQ4MmIxY2JlZTU2ZGM0NSIsInN1YiI6IjY1NDYyNTg4NmJlYWVhMDBlYWY3N2IzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OWD6PCpiZT5kUqd_jZX8HbncGhsqOzYPOFKT3MDIa0s
// Dokumentacja
// Our primary documentation is located at developer.themoviedb.org.

// Wsparcie
// If you have questions or comments about the information covered here, please create a post on our support forums.

// Szczegóły API
// If you'd like to edit the details of your app, click here.

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
  movie_id: ['945729', '507089', '787781', '790459'],//movie_id = id, ??? = title, ??? = original_title, ??? = overview, ???? = poster_path, ??? = vote_average, ??? = release_date >>> 	"2023-09-13", ??? = genre_ids,  
  genre_ids : [ 9648, 53, 80]
};
//api.themoviedb.org/3/movie/550?api_key=4e243d8288d1053ad482b1cbee56dc45





console.log('ALL: ', BASE_PATH + bodys.all + 'api_key=' + FILM_API_KEY);

console.log('SEARCH: ', BASE_PATH + bodys.search + 'api_key=' + FILM_API_KEY);

console.log('DETAILS: ', BASE_PATH + bodys.details + bodys.movie_id[0] + '?'+ 'api_key=' + FILM_API_KEY);
console.log('YOU TUBE: ', BASE_PATH + bodys.youtube + bodys.movie_id[1] + '/videos?' + 'api_key=' + FILM_API_KEY);
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
