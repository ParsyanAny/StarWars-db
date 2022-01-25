import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ItemList from "../item-list";
import Row from "../row";
import ItemDetails from "../item-details";
import "./people-page.css";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        personId: null,
    };

    onItemSelected = (id) => {
        this.setState({ selectedPerson: id })
    };
    render() {
        const itemList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                onItemSelected={this.onItemSelected}
                renderItem={this.props.renderItem} />
        );
        const personDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );
        return (
             <Row left={itemList} right={personDetails} />
        );
    }
}