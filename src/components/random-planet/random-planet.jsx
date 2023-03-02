import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indication";
import Spinner from "../spinner/spinner";


import './random-planet.css';


export default class RandomPlanet extends Component {
	swapiService = new SwapiService;

	state = {
		planet: {},
		loading: true,
		error: false,
	}

	componentDidMount() {
		const { updateInterval } = this.props;
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
			error: false
		})
	};

	onError = (error) => {
		this.setState({ error: true })
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 17 + 2);
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)

	}
	render() {
		const { planet: { id, name, population, rotationPeriod, diameter }, loading, error } = this.state;

		if (error) {
			return (
				<div className="random-planet"><ErrorIndicator /></div>
			)
		}
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

RandomPlanet.defaultProps = {
	updateInterval: 3000
}