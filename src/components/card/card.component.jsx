import React from "react";
import "./card.style.css";

export const Card = props => (

  <div className="card-container">
          <h2>{props.monster.name}</h2>

    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />

    <p><b>Email: </b>{props.monster.email}</p>
    <p><b>Lives at: </b>{props.monster.address.street}</p>
    <p><b>Call@ </b>{props.monster.phone}</p>

  </div>
);
