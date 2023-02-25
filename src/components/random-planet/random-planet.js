import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";


import './random-planet.css';


export default class RandomPlanet extends Component {
	swapiService = new SwapiService;
	state = {
		planet: {},
		loading: true,
	}

	constructor() {
		super();
		this.updatePlanet();
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet, loading: false
		})
	};

	updatePlanet() {
		const id = Math.floor(Math.random() * 17 + 2);
		this.swapiService
			.getPlanet(3)
			.then(this.onPlanetLoaded)
	}

	render() {

		const { planet: { id, name, population, rotationPeriod, diameter }, loading } = this.state;

		if (loading) {
			return (
				<div className="random-planet"><Spinner /></div>
			)
		}

		return (

			<div className="random-planet">

				<div className="random-planet__img">
					<img
						src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
						alt="This planet Naboo" />
				</div>

				<div className="random-planet__content">
					<h2 className="random-planet__title">{name}</h2>
					<ul className="random-planet__info">
						<li><span>Population:</span> <span>{population}</span></li>
						<li><span>Rotation period:</span> <span>{rotationPeriod}</span></li>
						<li><span>Diameter:</span> <span>{diameter}</span></li>
					</ul>
				</div>

			</div>
		)
	}
}