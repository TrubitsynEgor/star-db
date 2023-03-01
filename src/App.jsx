import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import './App.css'
import { Record } from './components/item-details/item-details';
import ItemDetails from './components/item-details';
import SwapiService from './services/swapi-service';
import ErrorBoundry from './components/error-boundry';
import { Row } from './components/row';



export default class App extends Component {
	swapiService = new SwapiService();


	render() {
		const { getPerson, getStarship, getPersonImg, getStarshipImg } = this.swapiService

		const personDetails = (
			<ItemDetails itemId={1} getData={getPerson} getImgUrl={getPersonImg} >
				<Record field={'gender'} label={'Gender'} />
				<Record field={'eyeColor'} label={'Eye color'} />
			</ItemDetails>

		);
		const starshipDetails = (
			<ItemDetails itemId={5} getData={getStarship} getImgUrl={getStarshipImg}>

			</ItemDetails>
		);

		return (
			<div className='app'>
				<ErrorBoundry>

					<Header />
					<RandomPlanet />

					<Row left={personDetails} right={starshipDetails} />


					{/* <PeoplePage
						getData={this.swapiService.getAllPeople}
						renderItem={({ name, gender, birthYear }) => `${name}  (${gender}),  ${birthYear}`}
					/> */}
				</ErrorBoundry>



			</div >

		)
	}
}
