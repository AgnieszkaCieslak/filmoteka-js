import markers from './markers.js';
import SM from './storage-methods';
import { allMovies, search, details, youTube } from './film-api.js';
// markers.btnAll = addEventListener('click', console.log(allMovies));

// testEvent.addEventListener("mouseover", () => { .... });
// //vs
// testEvent.addEventListener("mouseover", e => { ... });


markers.buttonsDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Div click');
    SM.save('123', 'abc');
})

// console.log(markers);
markers.btnALL.addEventListener('click', e => {
  e.stopPropagation();
  console.log(allMovies);
  SM.save('allMovies', JSON.stringify(allMovies));

 const httpStringAll = SM.load('allMovies');
 console.log('httpString: ', httpStringAll);
//   markers.all.textContent = e.currenTarget.value;
// markers.all.textContent = httpString;// czysty niedziałajacy string
// markers.all.innerHTML = SM.load('allMovies');
// const pobraneOriginal = SM.load('allMovies');
// console.log(pobraneOriginal);
// const pobraneString = pobraneOriginal.JSON.stringify();
// console.log(pobraneString);
markers.all.innerHTML = `<a href=${httpStringAll} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">the most popular movies Today</a>`;
});

markers.btnSearch.addEventListener('click', e => {
  console.log(search);
  e.stopPropagation();
  SM.save('search', search);
  const httpStringSearch = SM.load('search');
  console.log('httpString: ', httpStringSearch);
  markers.search.innerHTML = `<a href=${httpStringSearch} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">search movies</a>`;

});

markers.btnDetails.addEventListener('click', e => {
  console.log(details);
  e.stopPropagation();
  SM.save('details', details);
  const httpStringDetails = SM.load('details');

  console.log('httpString: ', httpStringDetails);
  markers.details.innerHTML = `<a href=${httpStringDetails} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">full info about movie</a>`;
});

markers.btnYt.addEventListener('click', e => {
  console.log(youTube);
  e.stopPropagation();
  SM.save('youTube', youTube);
  const httpStringYT = SM.load('youTube');
  console.log('httpString: ', httpStringYT);
  markers.YT.innerHTML = `<a href=${httpStringYT} class="link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">youTube trailer</a>`;
});

//--------------------------

