import React from "react";
import "./toggle-planet-button.css";

const TogglePlanetButton = ({onToggleClick}) => {
    return (
        <button className="toggle-planet btn btn-warning"
        onClick={onToggleClick}>
            Toggle Random Planet
        </button>)
}
export default TogglePlanetButton;