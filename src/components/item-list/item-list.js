import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import './item-list.css';

const planets = new SwapiService;
planets.getAllPlanets().then((planets) => {
	planets.map(planet => {
		return planet.name

	});
})



export default class ItemList extends Component {

	render() {
		return (
			<ul className="item-list">
				<li>Lukie</li>
				<li>Vader</li>
				<li>R2-D2</li>

			</ul>
		)
	}
}