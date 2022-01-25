import React from "react";
import { withSwapiService } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details";


const PlanetDetails = ({ itemId, getPlanet, getPlanetImage }) => {
    return (
        <ItemDetails
            getData={getPlanet}
            getImageUrl={getPlanetImage}
            itemId={itemId}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
}
export default withSwapiService(PlanetDetails);