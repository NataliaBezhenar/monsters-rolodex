import { Component } from "react";

import "./CardComponent.styles.css";

export class CardComponent extends Component {
  render() {
    const { id, name, email } = this.props.item;

    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
