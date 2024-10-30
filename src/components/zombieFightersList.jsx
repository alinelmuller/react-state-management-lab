const ZombieFightersList = ({ zombieFighter }) => {
    return (
      <li>
        <img src={zombieFighter.img} alt={`${zombieFighter.name}`} />
        <h3>{zombieFighter.name}</h3>
        <p>Price: {zombieFighter.price}</p>
        <p>Strength: {zombieFighter.strength}</p>
        <p>Agility: {zombieFighter.agility}</p>
      </li>
    );
  };
  
  export default ZombieFightersList;
  