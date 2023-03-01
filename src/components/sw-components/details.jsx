import React from 'react'
import ItemDetails, { Record } from "../item-details/item-details"
import SwapiService from "../../services/swapi-service"

const swapiService = new SwapiService()
const { getPerson, getStarship, getPlanet, getPersonImg, getStarshipImg, getPlanetImg } = swapiService;


const PersonDetails = ({ itemId }) => {
	return (
		<ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getPersonImg} >
			<Record field={'gender'} label={'Gender'} />
			<Record field={'eyeColor'} label={'Eye color'} />
		</ItemDetails>
	)
}
const PlanetDetails = ({ itemId }) => {
	return (
		<ItemDetails
			itemId={itemId} getData={getPlanet} getImgUrl={getPlanetImg}>
			<Record field={'population'} label={'Population: '} />
			<Record field={'rotationPeriod'} label={'Rotation period: '} />
			<Record field={'diameter'} label={'Diameter: '} />
		</ItemDetails>
	)
}
const StarshipDetails = ({ itemId }) => {
	return (
		<ItemDetails
			itemId={itemId} getData={getStarship} getImgUrl={getStarshipImg}>
			<Record field={'maxAtmospheringSpeed'} label={'Max speed: '} />
			<Record field={'manufacturer'} label={'Manufacturer: '} />
			<Record field={'passengers'} label={'Passengers: '} />
		</ItemDetails>
	)
}

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}