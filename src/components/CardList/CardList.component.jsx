import { Component } from "react";

import { CardComponent } from "../CardComponent/CardComponent.component";
import "./CardList.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((item) => (
          <CardComponent item={item} />
        ))}
      </div>
    );
  }
}

export default CardList;
