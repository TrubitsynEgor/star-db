import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import './App.css'
import SwapiService from './services/swapi-service';
import ErrorBoundry from './components/error-boundry';
import { PeoplesPage, PlanetsPage, StarshipsPage } from './components/pages';
import { SwapiServiceProvider } from './components/swapi-service-context/swapi-service-context';



export default class App extends Component {
	swapiService = new SwapiService();

	render() {

		return (
			<div className='app'>
				<ErrorBoundry>
					<SwapiServiceProvider value={this.swapiService}>
						<Header />
						<RandomPlanet updateInterval={3000} />

						<PeoplesPage />
						<PlanetsPage />
						<StarshipsPage />



					</SwapiServiceProvider>
				</ErrorBoundry>

			</div >

		)
	}
}
