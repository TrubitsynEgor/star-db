import React, { Component } from "react";

import './starships-details.css';

export default class StarshipsDetails extends Component {

	render() {
		return (
			<div className="starships-details">
				<div className="starships-details__img">
					<img src="" alt="this person R2-D2" />
				</div>

				<div className="starships-details__content">
					<h2 className="starships-details__title">R2-D2</h2>
					<ul className="starships-details__info">
						<li>Gender mail</li>
						<li>Birth Year 43</li>
						<li>Eye Color red</li>
					</ul>
				</div>

			</div>
		)
	}
}