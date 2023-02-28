import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './item-list.css';

const planets = new SwapiService;
planets.getAllPlanets().then((planets) => {
	planets.map(planet => {
		return planet.name

	});
})



export default class ItemList extends Component {



	state = {
		ItemList: null,
	}

	componentDidMount() {

		const { getData } = this.props;

		getData()
			.then((ItemList) => this.setState({ ItemList }))
	}

	renderItems(arr) {
		return arr.map((item) => {
			const label = this.props.renderItem(item)
			return (
				<li
					key={item.id}
					onClick={() => this.props.onPersonSelected(item.id)}>
					{label}
				</li>
			)
		})
	}

	render() {

		const { ItemList } = this.state;
		if (!ItemList) {
			return (
				<ul className="item-list"><Spinner /></ul>
			)
		}
		return (
			<ul className="item-list">
				{this.renderItems(ItemList)}
			</ul>
		)
	}
}