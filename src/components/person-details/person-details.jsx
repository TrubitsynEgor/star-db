import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './person-details.css';

export default class PersonDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: {},
	}

	componentDidMount() {
		this.updatePerson()
	}
	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}
	updatePerson() {
		const { personId } = this.props;
		if (!personId) return;

		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({ person })
			})
	}

	render() {

		if (!this.state.person) {
			return <div className="person-details"><Spinner /></div>
		}
		const { id, name, gender, birthYear, eyeColor } = this.state.person;

		return (
			<div className="person-details">
				<div className="person-details__img">
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
						alt="characters" />
				</div>

				<div className="person-details__content">
					<h2 className="person-details__title">{name} {this.props.id}</h2>
					<ul className="person-details__info">
						<li>Gender: {gender}</li>
						<li>Birth Year: {birthYear}</li>
						<li>Eye Color: {eyeColor}</li>
					</ul>
				</div>

			</div>
		)
	}
}