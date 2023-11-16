import CardComponent from "../CardComponent/CardComponent.component";
import "./CardList.styles.css";
import { Monster } from "../../App";

type CardListProps = { monsters: Monster[] };

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((item) => (
      <CardComponent monster={item} key={item.id} />
    ))}
  </div>
);

export default CardList;
