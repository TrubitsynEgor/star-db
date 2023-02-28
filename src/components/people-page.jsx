import React, { Component } from 'react'
import ErrorIndicator from './error-indication'
import ItemList from './item-list'
import PersonDetails from './person-details'


export default class PeoplePage extends Component {

	state = {
		selectedPerson: 1,
		hasError: false,
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className='row mb2'>
				<div className='col-md-6'><ItemList onPersonSelected={this.onPersonSelected} /></div>
				<div className='col-md-6'><PersonDetails personId={this.state.selectedPerson} /></div>
			</div>
		)
	}

}