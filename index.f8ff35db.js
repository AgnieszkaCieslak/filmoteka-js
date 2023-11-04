const e="4e243d8288d1053ad482b1cbee56dc45",o="https://api.themoviedb.org/3/",i={//   all: 'trending/all/day?language=en-US',
all:"trending/all/day?",//   search: 'search/movie?include_adult=false&language=en-US&page=1',
search:"search/movie?",//   details: 'movie/movie_id?language=en-US',
//   details: 'movie/movie_id?',//ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
details:"movie/",//   youtube: 'movie/movie_id/videos?language=en-US',
//   youtube: 'movie/movie_id/videos?', //ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
youtube:"movie/",movie_id:["945729","507089","787781","790459"]};//api.themoviedb.org/3/movie/550?api_key=4e243d8288d1053ad482b1cbee56dc45
console.log("ALL: ",o+i.all+"api_key="+e),console.log("SEARCH: ",o+i.search+"api_key="+e),console.log("DETAILS: ",o+i.details+i.movie_id[0]+"?api_key="+e),console.log("YOU TUBE: ",o+i.youtube+i.movie_id[1]+"/videos?api_key="+e);//--------POBIERALNIA-----------------
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
//# sourceMappingURL=index.f8ff35db.js.map

//# sourceMappingURL=index.f8ff35db.js.map
