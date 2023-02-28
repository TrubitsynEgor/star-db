import React, { Component } from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';



import './App.css'
import PeoplePage from './components/people-page';
import ErrorIndicator from './components/error-indication';



export default class App extends Component {


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
				<PeoplePage />
				<PeoplePage />
				<PeoplePage />
				{/* <PlanetsPage />
				<StarshipsPage /> */}


			</div >

		)
	}
}
