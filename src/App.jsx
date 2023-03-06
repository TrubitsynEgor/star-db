import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import './App.css'
import SwapiService from './services/swapi-service';
import ErrorBoundry from './components/error-boundry';
import { PeoplesPage, PlanetsPage, StarshipsPage } from './components/pages';
import { SwapiServiceProvider } from './components/swapi-service-context/swapi-service-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DescriptionMain from './components/description-main';
import { StarshipDetails } from './components/sw-components';


const App = () => {
	const swapiService = new SwapiService();



	return (

		<ErrorBoundry>
			<SwapiServiceProvider value={swapiService}>
				<Router>
					<div className='app'>
						<Header />
						<RandomPlanet updateInterval={3000} />

						<Routes>
							<Route path='/' element={<DescriptionMain title='Welcome to Star DB' />} exact={true} />
							<Route path='/people' element={<DescriptionMain title='People' />} />
							<Route path='/planets' element={<DescriptionMain title='Planets' />} />
							<Route path='/starships' element={<DescriptionMain title='Starships' />} />
						</Routes>

						<Routes>
							<Route path='/people' element={<PeoplesPage />} />
							<Route path='/planets' element={<PlanetsPage />} />
							<Route path='/starships' element={<StarshipsPage />} exact={true} />

							<Route path='/starships/:id' element={<StarshipDetails />} />

						</Routes>



						<Routes>

						</Routes>

					</div >

				</Router>
			</SwapiServiceProvider>
		</ErrorBoundry>


	)

}

export default App