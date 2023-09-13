import React from "react";
import logements from "./logements.json";

const Logements = () => {
    return (
      <main className="gallery-card">
      {logements.map(logement => (
        <div key={logement.id}>
          <div onClick={() => (window.location.href = `/accommodation/${logement.id}`)}>
            <div className="accommodations-cards">
              <img src={logement.cover} alt={`${logement.title}`} />
              <h3>{logement.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

  export default Logements;