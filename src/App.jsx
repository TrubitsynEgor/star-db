import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import './App.css'
import PeoplePage from './components/people-page';
import ErrorIndicator from './components/error-indication';
import ItemList from './components/item-list';
import PersonDetails from './components/person-details';
import SwapiService from './services/swapi-service';



export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		hasError: false,
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}



	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className='app'>
				<Header />
				<RandomPlanet />

				<PeoplePage
					getData={this.swapiService.getAllPeople}
					renderItem={({ name, gender, birthYear }) => `${name}  (${gender}),  ${birthYear}`}
				/>

				<div className='row mb2'>
					<div className='col-md-6'><ItemList
						onPersonSelected={this.onPersonSelected}
						getData={this.swapiService.getAllPlanets}
						renderItem={(item) => (<span>{item.name} <button>!</button></span>)}
					/></div>
					<div className='col-md-6'><PersonDetails
						personId={this.state.selectedPerson}

					/></div>
				</div>

				<div className='row mb2'>
					<div className='col-md-6'><ItemList
						onPersonSelected={this.onPersonSelected}
						getData={this.swapiService.getAllStarships}
						renderItem={(item) => item.name}
					/></div>
					<div className='col-md-6'><PersonDetails personId={this.state.selectedPerson} /></div>
				</div>

				{/* <PlanetsPage />
				<StarshipsPage /> */}


			</div >

		)
	}
}
