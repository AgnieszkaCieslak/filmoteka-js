// const btnALL = document.querySelector('button_all');
// const btnSearch = document.querySelector('button_search');
// const btnDetails =document.querySelector('button_details');
// const btnYt =document.querySelector('button_YT');
const e={buttonsDiv:document.querySelector(".buttons"),btnALL:document.querySelector(".button_all"),btnSearch:document.querySelector(".button_search"),btnDetails:document.querySelector(".button_details"),btnYt:document.querySelector(".button_YT"),all:document.querySelector(".output_all"),search:document.querySelector(".output_search"),details:document.querySelector(".output_details"),YT:document.querySelector(".output_YT")};var o={save:(e,o)=>{try{let t=JSON.stringify(o);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let o=localStorage.getItem(e);return null===o?[]:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};const t="4e243d8288d1053ad482b1cbee56dc45",r="https://api.themoviedb.org/3/",a={//   all: 'trending/all/day?language=en-US',
all:"trending/all/day?",//   search: 'search/movie?include_adult=false&language=en-US&page=1',
search:"search/movie?",//   details: 'movie/movie_id?language=en-US',
//   details: 'movie/movie_id?',//ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
details:"movie/",//   youtube: 'movie/movie_id/videos?language=en-US',
//   youtube: 'movie/movie_id/videos?', //ten dobry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
youtube:"movie/",movie_id:["945729","507089","787781","790459"]},l=r+a.all+"api_key="+t,n=r+a.search+"api_key="+t,s=r+a.details+a.movie_id[0]+"?api_key="+t,i=r+a.youtube+a.movie_id[1]+"/videos?api_key="+t;e.buttonsDiv.addEventListener("click",e=>{e.stopPropagation(),console.log("Div click"),o.save("123","abc")}),e.btnALL.addEventListener("click",t=>{t.stopPropagation(),console.log(l),o.save("allMovies",JSON.stringify(l));let r=o.load("allMovies");console.log("httpString: ",r),e.all.innerHTML=`<a href=${r} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">the most popular movies Today</a>`}),e.btnSearch.addEventListener("click",t=>{console.log(n),t.stopPropagation(),o.save("search",n);let r=o.load("search");console.log("httpString: ",r),e.search.innerHTML=`<a href=${r} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">the most popular movies Today</a>`}),e.btnDetails.addEventListener("click",t=>{console.log(s),t.stopPropagation(),o.save("details",s);let r=o.load("details");console.log("httpString: ",r),e.details.innerHTML=`<a href=${r} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">the most popular movies Today</a>`}),e.btnYt.addEventListener("click",t=>{console.log(i),t.stopPropagation(),o.save("youTube",i);let r=o.load("youTube");console.log("httpString: ",r),e.YT.innerHTML=`<a href=${r} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">the most popular movies Today</a>`});//--------------------------
//# sourceMappingURL=index.1d5fc593.js.map

//# sourceMappingURL=index.1d5fc593.js.map
