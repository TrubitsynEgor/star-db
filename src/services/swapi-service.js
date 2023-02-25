

export default class SwapiService { //API service 

	_apiBase = 'https://swapi.dev/api'

	_extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}
	_transformPlanet(planet) {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}
	_transformPerson(person) {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}
	_transformStarship(starship) {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			crew: starship.crew,
			passengers: starship.passengers,
			manufacturer: starship.manufacturer,
			maxAtmospheringSpeed: starship.max_atmosphering_speed,
			starshipClass: starship.starship_class
		}
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch. Check  your URL ${this._apiBase}${url}`)
		}
		return await res.json();

	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson)
	}
	async getPerson(id) {
		const person = this.getResource(`/people/${id}/`);
		return this._transformPerson(person)
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet)
	}
	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet)
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship)
	}
	async getStarship(id) {
		const starship = this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship)
	}



}