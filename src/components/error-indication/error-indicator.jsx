import React, { Component } from "react";

import './error-indicator.css'

export default class ErrorIndicator extends Component {
	render() {
		return (
			<div className="error-indicator">
				<span className="boom">BOOM!</span>
				<span >Something has gone terribly wrong!</span>
				<span >(But we already sent droids to fix it)</span>

			</div>

		)

	}
}