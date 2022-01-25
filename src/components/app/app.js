import React, { Component } from "react";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import Header from "../header";
import ErrorButton from "../error-button";
import TogglePlanetButton from "../toggle-planet-button";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import "./app.css";
import ErrorBoundry from "../error-boundry";
import {
    PersonList, PlanetList, StarshipList,
    PersonDetails, PlanetDetails, StarshipDetails
} from "../sw-components";

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        showRandomPlanet: true,
        hasError: false
    }
    onToggleClick = ({ showRandomPlanet }) => {
        this.setState({ showRandomPlanet: !this.state.showRandomPlanet })
    }
    componentDidCatch() {
        console.log("componentDidCatch");
        this.setState({ hasError: true })
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        // const { getPerson, getStarship, getPlanet, 
        //     getAllPeople, getAllPlanets, getAllStarships,
        //     getPersonImage, getStarshipImage, getPlanetImage } = this.swapiService;

        const planet = this.state.showRandomPlanet
            ? <RandomPlanet /> : null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                <div className="app">
                    <Header />
                    {planet}
                    <div className="buttons d-flex">
                        <TogglePlanetButton onToggleClick={this.onToggleClick} />
                        <ErrorButton className="error-button" />
                    </div>
                    <div className="d-flex">
                        <PersonList/>
                    </div>
                    <div className="d-flex">
                        <PlanetList/>
                    </div>
                    <div className="d-flex">
                        <StarshipList/>
                    </div>
                </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}