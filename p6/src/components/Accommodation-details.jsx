import React from 'react';
import logements from "./logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccommodationDetails = ({ match }) => {
    const logementID = match.params.id;
    const selectedLogement = logements.find(logement => logement.id === logementID);

    
    return (

        
        <div className="AccommodationDetails">
            <h1>{selectedLogement.title}</h1>
            <p>{selectedLogement.location}</p>
            <button>{selectedLogement.tags[0]}</button>
            <button>{selectedLogement.tags[1]}</button>
            
            <div className="accommodations-host">
                <span>{selectedLogement.host.name}</span>
                <FontAwesomeIcon icon="star" style={{ color: "#FF6060" }} />
            </div>

            
               
        </div>
        

    );
};

export default AccommodationDetails;
