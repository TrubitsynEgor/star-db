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
		selectedPerson: 5,
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
				<div className='row mb2'>
					<div className='col-md-6'><ItemList onPersonSelected={this.onPersonSelected} /></div>
					<div className='col-md-6'><PersonDetails personId={this.state.selectedPerson} /></div>
					<PlanetsDetails />
					<StarshipsDetails />
				</div>

			</div>

		)
	}
}
