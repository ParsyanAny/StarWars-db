import React from "react";
import "./planet-details.css"

const PlanetDetails = () =>{
    return(
        <div className="planet-details">
            <h3>Planet Name</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Population 123123</li>
                <li className="list-group-item">Rotation Period 43</li>
                <li className="list-group-item">Diameter 100</li>
            </ul>
        </div>
    )
}
export default PlanetDetails;