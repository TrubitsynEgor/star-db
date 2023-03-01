import React, { Component } from 'react'
import ErrorBoundry from './error-boundry'
import ItemList from './item-list'
import ItemDetails from './item-details'
import { Row } from './row'

// export default class PeoplePage extends Component {

// 	state = {
// 		selectedItem: 1,
// 	}

// 	onItemSelected = (id) => {
// 		this.setState({
// 			selectedItem: id
// 		})
// 	}

// 	render() {
// 		const itemList = (
// 			<ItemList
// 				onItemSelected={this.onItemSelected}
// 				getData={this.props.getData}
// 				renderItem={this.props.renderItem}
// 			/>

// 		)
// 		const itemDetails = (
// 			<ItemDetails itemId={this.state.selectedItem} />
// 		)

// 		return (
// 			<ErrorBoundry>
// 				<Row left={itemList} right={itemDetails} />
// 			</ErrorBoundry>

// 		)
// 	}

// }