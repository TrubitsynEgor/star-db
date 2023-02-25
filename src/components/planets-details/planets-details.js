import React, { Component } from "react";

import './planets-details.css';

export default class PlanetsDetails extends Component {

	render() {
		return (
			<div className="planets-details">
				<div className="planets-details__img">
					<img src="" alt="this person R2-D2" />
				</div>

				<div className="planets-details__content">
					<h2 className="planets-details__title">R2-D2</h2>
					<ul className="planets-details__info">
						<li>Gender mail</li>
						<li>Birth Year 43</li>
						<li>Eye Color red</li>
					</ul>
				</div>

			</div>
		)
	}
}