import CardComponent from "../CardComponent/CardComponent.component";
import "./CardList.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((item) => (
      <CardComponent item={item} key={item.id} />
    ))}
  </div>
);

export default CardList;
