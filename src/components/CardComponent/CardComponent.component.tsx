import { Monster } from "../../App";
import "./CardComponent.styles.css";

type CardProps = { monster: Monster };

const CardComponent = ({ monster }: CardProps) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set10&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardComponent;
