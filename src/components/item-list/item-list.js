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

	swapiService = new SwapiService();

	state = {
		peopleList: null,
	}

	componentDidMount() {
		this.swapiService
			.getAllPeople()
			.then((peopleList) => this.setState({ peopleList }))
	}

	onPersonSelected = (id) => {
		console.log(id);
	}
	render() {

		const { peopleList } = this.state;
		if (!peopleList) {
			return (
				<ul className="item-list"><Spinner /></ul>
			)
		}
		return (
			<ul className="item-list">
				{
					peopleList.map(el => {
						return (
							<li key={el.id} onClick={() => this.onPersonSelected(el.id)}>{el.name}</li>
						)
					})
				}
			</ul>
		)
	}
}