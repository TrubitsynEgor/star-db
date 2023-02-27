import React, { Component } from 'react';
import SwapiService from './services/swapi-service';
import Header from './components/header';
import ItemList from './components/item-list';
import PersonDetails from './components/person-details';
import PlanetsDetails from './components/planets-details';
import RandomPlanet from './components/random-planet';
import StarshipsDetails from './components/starships-details';


import './App.css'



export default class App extends Component {

	render() {
		return (
			<div className='app'>
				<Header />
				<RandomPlanet />
				<div className='app-bot'>
					<ItemList />
					<PersonDetails />
					<PlanetsDetails />
					<StarshipsDetails />
				</div>

			</div>

		)
	}
}
