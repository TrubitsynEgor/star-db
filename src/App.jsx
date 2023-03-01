import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import './App.css'
import SwapiService from './services/swapi-service';
import ErrorBoundry from './components/error-boundry';
import { Row } from './components/row';
import ItemList from './components/item-list/item-list';
import { PersonList, PlanetList, StarshipList } from './components/sw-components';
import { PersonDetails, PlanetDetails, StarshipDetails } from './components/sw-components';
import { SwapiServiceConsumer, SwapiServiceProvider } from './components/swapi-service-context/swapi-service-context';



export default class App extends Component {
	swapiService = new SwapiService();


	render() {

		return (
			<div className='app'>
				<ErrorBoundry>
					<SwapiServiceProvider value={this.swapiService}>
						<Header />
						<RandomPlanet />

						<PersonDetails itemId={11} />
						<PlanetDetails itemId={2} />
						<StarshipDetails itemId={15} />

						<PersonList />
						<StarshipList />
						<PlanetList />

					</SwapiServiceProvider>
				</ErrorBoundry>

			</div >

		)
	}
}
