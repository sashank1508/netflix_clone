import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './Nav.css'

function App() {
  return (
    <div className="App">

			<Nav />
			<Banner />
				<div className='rows__names'>
					<Row title="NETFLIX ORIGINALS"
						isLargeRow
						//isLargeRow = {true}
						fetchUrl={requests.fetchNetflixOriginals} />
					<Row title="Trending"
						fetchUrl={requests.fetchTrending} />
					<Row title="Top Rated" 
						fetchUrl={requests.fetchTopRated} />
					<Row title="Action Movies" 
						fetchUrl={requests.fetchActionMovies} />
					<Row title="Comedy Movies" 
						fetchUrl={requests.fetchComedyMovies} />
					<Row title="Horror Movies" 
						fetchUrl={requests.fetchHorrorMovies} />
					<Row title="Romance Movies" 
						fetchUrl={requests.fetchRomanceMovies} />
					<Row title="Documentaries" 
						fetchUrl={requests.fetchDocumentaries} />
			</div>
    </div>
  );
}

export default App;
