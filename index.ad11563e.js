// const btnALL = document.querySelector('button_all');
// const btnSearch = document.querySelector('button_search');
// const btnDetails =document.querySelector('button_details');
// const btnYt =document.querySelector('button_YT');
const e={//-------div na btn & outputy-------
buttonsDiv:document.querySelector(".buttons"),//------btn----------
btnALL:document.querySelector(".button_all"),btnSearch:document.querySelector(".button_search"),btnDetails:document.querySelector(".button_details"),btnYt:document.querySelector(".button_YT"),//-------outputy-------
all:document.querySelector(".output_all"),search:document.querySelector(".output_search"),details:document.querySelector(".output_details"),YT:document.querySelector(".output_YT"),outputAll:document.querySelector(".output-all")},t="4e243d8288d1053ad482b1cbee56dc45",o="https://api.themoviedb.org/3/",a={//   all: 'trending/all/day?language=en-US',
all:"trending/all/day?",//   search: 'search/movie?include_adult=false&language=en-US&page=1',
search:"search/movie?",//   details: 'movie/movie_id?language=en-US',
//   details: 'movie/movie_id?',//ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
details:"movie/",//   youtube: 'movie/movie_id/videos?language=en-US',
//   youtube: 'movie/movie_id/videos?', //ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
youtube:"movie/",movie_id:["945729","507089","787781","790459"]},r=o+a.all+"api_key="+t,l=o+a.search+"api_key="+t,n=o+a.details+a.movie_id[0]+"?api_key="+t,s=o+a.youtube+a.movie_id[1]+"/videos?api_key="+t;var c={save:(e,t)=>{try{let o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};e.buttonsDiv.addEventListener("click",e=>{e.stopPropagation(),console.log("Div click"),c.save("123","abc")}),e.btnALL.addEventListener("click",t=>{t.stopPropagation(),console.log(r),c.save("allMovies",JSON.stringify(r));let o=c.load("allMovies");e.all.innerHTML=`<a href=${o} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">the most popular movies Today</a>`}),e.btnSearch.addEventListener("click",t=>{console.log(l),t.stopPropagation(),c.save("search",l);let o=c.load("search");e.search.innerHTML=`<a href=${o} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">search movies</a>`}),e.btnDetails.addEventListener("click",t=>{console.log(n),t.stopPropagation(),c.save("details",n);let o=c.load("details");e.details.innerHTML=`<a href=${o} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">full info about movie</a>`}),e.btnYt.addEventListener("click",t=>{console.log(s),t.stopPropagation(),c.save("youTube",s);let o=c.load("youTube");e.YT.innerHTML=`<a href=${o} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">youTube trailer</a>`}),e.outputAll.innerHTML=`<p>tutaj ma sie pokazac plakat filmu</p>
<p>tytaj ma byc jego tytu\u{142}</p>
<p>tutaj ma byc jego data premiery</p>
<p>tytaj ma byc jego oryginalny tytu\u{142}</p>
<p>tutaj ma byc jego jezyk oryginalny</p>
<p>tytaj ma byc jego opis</p>
<p>tutaj ma byc jego \u{15B}rednia popularnosc</p>`;//# sourceMappingURL=index.ad11563e.js.map

//# sourceMappingURL=index.ad11563e.js.map
