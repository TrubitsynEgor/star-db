import React, { Component } from 'react'
import ErrorIndicator from '../error-indication'
import ItemList from '../item-list/item-list'
import Spinner from '../spinner/spinner'


export const withData = (View, getData) => {
	return class extends Component {
		state = {
			data: null,
		}

		componentDidMount() {
			getData()
				.then((data) => this.setState({ data }))
		}

		render() {
			const { data } = this.state;
			if (!data) {
				return (
					<ul className="item-list"><Spinner /></ul>
				)
			}
			return <View {...this.props} data={data} />
		}
	}
}

