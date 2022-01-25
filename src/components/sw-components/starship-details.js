import React from "react";
import { withSwapiService } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details";

const StarshipDetails = ({ itemId, getStarship, getStarshipImage }) => {
    return (
        <ItemDetails
            getData={getStarship}
            getImageUrl={getStarshipImage}
            itemId={itemId}>
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="costInCredits" label="Codst In Credits" />
        </ItemDetails>
    )
}
export default withSwapiService(StarshipDetails)