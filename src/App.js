import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Welcome } from "./components/findmusictogether";
import './App.css';
import './Detail';
import Dropdown from './Dropdown';
import { Credentials } from './Credentials';
import Test from './components/test';

// const App = () => {

// const spotify = Credentials();  

//   console.log('RENDERING APP.JS');

  function App({ age }) {
    return (
      <div className="App">
        {/* <Welcome name="mr steven" age={9 * 2}/>
        <SomeText />
        <MoreText />
        <MoreText /> */}
        <Test moveHandler={myMove} />
      </div>
    );
  }  
  function SomeText() {
    return <p>Steven so cool!</p>
  }
  
  function MoreText() {
    return <p>hi</p>
  }
  
  var id = null;
function myMove() {
  console.log("made it to myMove");
  var elem = document.getElementById("animate");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);







// const APIController = (function() {
    
//   const clientId = '4a106e2792f54b95a3d085af40c4f2bf';
//   const clientSecret = '044e419c5e6c48aa94f8bfe2fbc7c345';

// const _getToken = async () => {

//   const result = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//           'Content-Type' : 'application/x-www-form-urlencoded', 
//           'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
//       },
//       body: 'grant_type=client_credentials'
//   });

//   const data = await result.json();
//   return data.access_token;
// }

// const _getGenres = async (token) => {

//   const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//       method: 'GET',
//       headers: { 'Authorization' : 'Bearer ' + token}
//   });

//   const data = await result.json();
//   return data.categories.items;
// }

// const _getPlaylistByGenre = async (token, genreId) => {

//   const limit = 10;
  
//   const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
//       method: 'GET',
//       headers: { 'Authorization' : 'Bearer ' + token}
//   });

//   const data = await result.json();
//   return data.playlists.items;
// }

// const _getTracks = async (token, tracksEndPoint) => {

//   const limit = 10;

//   const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
//       method: 'GET',
//       headers: { 'Authorization' : 'Bearer ' + token}
//   });

//   const data = await result.json();
//   return data.items;
// }

// const _getTrack = async (token, trackEndPoint) => {

//   const result = await fetch(`${trackEndPoint}`, {
//       method: 'GET',
//       headers: { 'Authorization' : 'Bearer ' + token}
//   });

//   const data = await result.json();
//   return data;
// }

// return {
//   getToken() {
//       return _getToken();
//   },
//   getGenres(token) {
//       return _getGenres(token);
//   },
//   getPlaylistByGenre(token, genreId) {
//       return _getPlaylistByGenre(token, genreId);
//   },
//   getTracks(token, tracksEndPoint) {
//       return _getTracks(token, tracksEndPoint);
//   },
//   getTrack(token, trackEndPoint) {
//       return _getTrack(token, trackEndPoint);
//   }
// }
// })();



// } 

export default App;