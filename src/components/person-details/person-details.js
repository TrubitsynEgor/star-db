import React, { Component } from "react";

import './person-details.css';

export default class PersonDetails extends Component {

	render() {
		return (
			<div className="person-details">
				<div className="person-details__img">
					<img src="" alt="this person R2-D2" />
				</div>

				<div className="person-details__content">
					<h2 className="person-details__title">R2-D2</h2>
					<ul className="person-details__info">
						<li>Gender mail</li>
						<li>Birth Year 43</li>
						<li>Eye Color red</li>
					</ul>
				</div>

			</div>
		)
	}
}