import ItemDetails, { Record } from "../item-details/item-details"
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context'
import withSwapiService from "../hoc-helpers/with-swapi-service"
import { useParams } from "react-router-dom"

const PersonDetails = ({ itemId }) => {
	return (
		<SwapiServiceConsumer>
			{
				({ getPerson, getPersonImg }) => {
					return (
						<ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getPersonImg} >
							<Record field={'gender'} label={'Gender'} />
							<Record field={'eyeColor'} label={'Eye color'} />
						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}
const PlanetDetails = ({ itemId }) => {

	return (
		<SwapiServiceConsumer>
			{
				({ getPlanet, getPlanetImg }) => {
					return (
						<ItemDetails
							itemId={itemId} getData={getPlanet} getImgUrl={getPlanetImg}>
							<Record field={'population'} label={'Population: '} />
							<Record field={'rotationPeriod'} label={'Rotation period: '} />
							<Record field={'diameter'} label={'Diameter: '} />
						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}
const StarshipDetails = ({ itemId }) => {
	return (
		<SwapiServiceConsumer>
			{
				({ getStarship, getStarshipImg }) => {
					return (
						<ItemDetails
							itemId={itemId} getData={getStarship} getImgUrl={getStarshipImg}>
							<Record field={'maxAtmospheringSpeed'} label={'Max speed: '} />
							<Record field={'manufacturer'} label={'Manufacturer: '} />
							<Record field={'passengers'} label={'Passengers: '} />
						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}



export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}

