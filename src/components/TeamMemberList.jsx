const TeamMemberList = ({ fighter, onDelete }) => {
    return (
      <li className="team-member">
        <img src={fighter.img} alt={`${fighter.name}`} />
        <h3>{fighter.name}</h3>
        <p>Price: ${fighter.price}</p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  };
  
  export default TeamMemberList;