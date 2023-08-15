import React from "react";
import logements from "./logements.json";

const Logements = () => {
    return (
      <div>
        {logements.map(logement => (
            <a href={`/accommodation/${logement.id}`}>
                <div className="accommodations-cards">
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
                </div>
            {/* Vous pouvez afficher d'autres informations ici */}
          </a>
        ))}
      </div>
    );
  };

  export default Logements;