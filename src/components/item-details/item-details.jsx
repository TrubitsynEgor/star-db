import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";


import './item-details.css';

export const Record = ({ item, field, label }) => {
	return (
		<li>{label}: {item[field]}</li>
	)
}

export default class ItemDetails extends Component {
	swapiService = new SwapiService();

	state = {
		item: {},
		img: null
	}

	componentDidMount() {
		this.updateItem()
	}
	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}
	updateItem() {
		const { itemId, getData, getImgUrl } = this.props;
		if (!itemId) return;

		getData(itemId)
			.then((item) => {
				this.setState({ item, img: getImgUrl(item) })
			})
	}

	render() {

		const { item, img } = this.state

		if (!img) {
			return (
				<h2>select from the list!</h2>
			)
		}
		const { name } = item;

		return (
			<div className="item-details">
				<div className="item-details__img">
					<img
						src={img}
						alt="characters" />
				</div>

				<div className="item-details__content">
					<h2 className="item-details__title">{name} {this.props.id}</h2>
					<ul className="item-details__info">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, { item })
							})
						}
					</ul>
				</div>

			</div>
		)
	}
}