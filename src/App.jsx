import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import './App.css'
import SwapiService from './services/swapi-service';
import ErrorBoundry from './components/error-boundry';
import { Row } from './components/row';
import ItemList from './components/item-list/item-list';
import { PersonList, PlanetList, StarshipList } from './components/sw-components/list';
import { PersonDetails, PlanetDetails, StarshipDetails } from './components/sw-components';



export default class App extends Component {
	swapiService = new SwapiService();


	render() {

		return (
			<div className='app'>
				<ErrorBoundry>
					<Header />
					<RandomPlanet />

					<PersonDetails itemId={11} />
					<PlanetDetails itemId={2} />
					<StarshipDetails itemId={15} />

					<PersonList>
						{({ name }) => <span>{name}</span>}
					</PersonList>

					<StarshipList>
						{({ name }) => <span>{name}</span>}
					</StarshipList>

					<PlanetList>
						{({ name }) => <span>{name}</span>}
					</PlanetList>







				</ErrorBoundry>



			</div >

		)
	}
}
