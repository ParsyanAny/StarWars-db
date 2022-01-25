import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import "./item-details.css"

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        image: null
    }
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId)
            this.updateItem();
    }
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(itemId)
                })
            })
    }
    render() {
        const { item, image } = this.state;
        if (!item) {
            return <span className="badge badge-secondary">Select a item from a list</span>
        }
        return (
            <div className="item-details card">
                {/* <PersonView item={item} image={image}/> */}
                <img className="item-image"
                    src={image}
                    alt="character" />
                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                    <ErrorButton className="error-button" />
                </div>
            </div>
        )
    }
}
const PersonView = ({ item, image }) => {
    const { id, name, gender, birthYear, eyeColor } = item;
    return (
        <React.Fragment>
            <img className="item-image"
                src={image}
                alt="character" />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender: </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year: </span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color: </span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton className="error-button" />
            </div>
        </React.Fragment>
    )
}
const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    Record
};