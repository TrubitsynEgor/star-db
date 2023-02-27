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

	state = {
		selectedPerson: null,
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
	}

	render() {
		return (
			<div className='app'>
				<Header />
				<RandomPlanet />
				<div className='app-bot'>
					<ItemList onPersonSelected={this.onPersonSelected} />
					<PersonDetails />
					<PlanetsDetails />
					<StarshipsDetails personId={this.state.selectedPerson} />
				</div>

			</div>

		)
	}
}
