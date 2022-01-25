export default class SwapiService{

   // _apiBase = "https://swapi.dev/api";
    _apiBase = "https://swapi.py4e.com/api";
    _apiImage = "https://starwars-visualguide.com/assets/img";
  
    async getResource(url){
      const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok){
      throw new Error(`Could not fetch ${url}` + `received ${res.status}`)
    }
    return await res.json();
    }
  
    getPersonImage = (id) => {
      return `${this._apiImage}/characters/${id}.jpg`;
    }
    getStarshipImage = (id) => {
      return `${this._apiImage}/starships/${id}.jpg`;
    }
    getPlanetImage = (id) => {
      return `${this._apiImage}/planets/${id}.jpg`;
    }
    getAllPeople = async() => {
      const res = await this.getResource("/people");
      return res.results.map(this._transformPerson);
    }
    getPerson = async(id) => {
      const res = await this.getResource(`/people/${id}`);
      return this._transformPerson(res);
    }
    getAllPlanets = async () => {
      const res = await this.getResource("/planets");
      return res.results.map(this._transformPlanet)
    }
    getPlanet = async(id) => {
      const res = await this.getResource(`/planets/${id}`);
      return this._transformPlanet(res);
    }
    getAllStarships = async () => {
      const res = await this.getResource("/starships");
      return res.results.map(this._transformStarship);
    }
    getStarship = async(id) => {
      const res = await this.getResource(`/starships/${id}`);
      return this._transformStarship(res);
    }
    _extractId(item){
      const idRexExp =/\/([0-9])*\/$/;
      return item.url.match(idRexExp)[1];
    }
    _transformPlanet = (planet) => {
      return {
        id: this._extractId(planet),
        name:planet.name,
        population:planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }
    _transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color,
        hairColor: person.hair_color,
        skinColor: person.skin_color
      }
    }
    _transformStarship = (starship) => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity
      }
    }
  }


  //const swapi = new SwapiService();
  
  //Persons
  // swapi.getPerson(4).then(p=>{
  //   console.log(p.name)
  // });
  
  // swapi.getAllPeople().then(people=>{
  //     people.forEach(p => {
  //     console.log(p.name);
  //   });
  // });
  
  //Planets
  // swapi.getAllPlanets().then(planet=>{
  //   planet.forEach(p => {
  //     console.log(p);
  //   });
  // });
  
  // swapi.getPlanet(4).then(p=>{
  //   console.log(p.name)
  // });
  
  //Starships
  // swapi.getStarship(2).then(ship=>{
  //   console.log(ship.name)
  // });
  
  // swapi.getAllStarships().then(starships=>{
  //   starships.forEach(ship => {
  //     console.log(ship.name);
  //   });
  // });