// write a function to retrieve a blob of json
// make an ajax request! Use fetch() function - ES2015
// https://rallycoding.herokuapp.com/api/music_albums

// fetching with promises
// function fetchAlbums() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
//
// fetchAlbums();

// ES2015 syntax
async function fetchAlbums() {
  res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  json = await res.json())
  console.log(json));
}

fetchAlbums();
