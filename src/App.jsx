import './App.css';
import './index.css';
import { useState } from "react";
import ZombieFightersList from './components/zombieFightersList'; 

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ];
    
  const calculateTotals = (updatedTeam) => {
    const strength = updatedTeam.reduce((total, fighter) => total + fighter.strength, 0);
    const agility = updatedTeam.reduce((total, fighter) => total + fighter.agility, 0);
    setTotalStrength(strength);
    setTotalAgility(agility);
  };

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      if (!team.find((member) => member.name === fighter.name)) {
        const updatedTeam = [...team, fighter];
        setTeam(updatedTeam);
        setMoney(money - fighter.price);
        calculateTotals(updatedTeam); // Update totals here
      } else {
        alert("Fighter is already in the team");
      }
    } else {
      alert("Not enough money");
    }
  };

  const handleClearTeam = () => {
    if (team.length === 0) {
      alert("You do not have a team yet. Pick some team members!");
    }else{
      setTeam([]);
      setMoney(100);
      setTotalStrength(0);
      setTotalAgility(0);
    }   
  };

  return (
    <div className='contentBox'>
      <h1>Zombie Fighters</h1>
      <div className='yourTeam'>
        <h2>Your Team  <button onClick={handleClearTeam} className='buttonClear'>Clear All Team</button></h2>
        <p>Money: ${money}</p>
        <p>Total Team Strength: {totalStrength}</p>
        <p>Total Team Agility: {totalAgility}</p>
        {team.length === 0 ? (
          <p className='pickMembers'>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter) => (
              <li key={fighter.name}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h2>Pick up a Fighter:</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <ZombieFightersList 
            key={fighter.name} 
            zombieFighter={fighter}
            onAdd={() => handleAddFighter(fighter)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
