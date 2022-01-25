import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = ({ itemId, getPerson, getPersonImage }) => {
    return (
        <ItemDetails
            getData={getPerson}
            getImageUrl={getPersonImage}
            itemId={itemId}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
            <Record field="hairColor" label="Hair Color" />
            <Record field="skinColor" label="Skin Color" />
        </ItemDetails>
    )
}

export default withSwapiService(PersonDetails);