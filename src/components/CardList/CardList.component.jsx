import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((item) => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </div>
    );
  }
}

export default CardList;
