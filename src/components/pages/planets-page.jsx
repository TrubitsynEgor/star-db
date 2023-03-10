

import React, { Component } from 'react'
import { Row } from '../row'
import { PlanetDetails, PlanetList } from '../sw-components'

export default class PeoplesPage extends Component {
	state = {
		selectedItem: null,
	}

	onItemSelected = (selectedItem) => {
		this.setState({ selectedItem })
	}

	render() {
		const { selectedItem } = this.state
		return (
			<Row
				left={<PlanetList onItemSelected={this.onItemSelected} />}
				right={<PlanetDetails itemId={selectedItem} />}
			/>

		)
	}
}
