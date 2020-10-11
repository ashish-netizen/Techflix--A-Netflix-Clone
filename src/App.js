import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './request';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

    {/* // Created Rows   */}

      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}
      isLargePoster={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title=" Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title=" Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Moves" fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title=" Doocumentaries " fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
