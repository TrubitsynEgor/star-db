import React, { Component } from 'react'
import ErrorIndicator from './error-indication'

export default class ErrorBoundry extends Component {
	state = {
		hasError: false,
	}

	componentDidCatch() {
		if (this.state.hasError) {
			return <ErrorIndicator />
		}
		this.setState({ hasError: true })
	}

	render() {
		return this.props.children
	}
}