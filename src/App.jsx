import './App.css';
import './index.css';
import { useState } from "react";
import ZombieFightersList from './components/ZombieFightersList'; 
import TeamMemberList from './components/TeamMemberList';

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
        img: './src/img/Zombie1.webp',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: './src/img/Zombie2.webp',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: './src/img/Zombie3.webp',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: './src/img/Zombie4.webp',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: './src/img/Zombie5.webp',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: './src/img/Zombie6.webp',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: './src/img/Zombie7.webp',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: './src/img/Zombie8.webp',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: './src/img/Zombie9.webp',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: './src/img/Zombie10.webp',
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
        calculateTotals(updatedTeam); 
      } else {
        alert("Fighter is already in the team");
      }
    } else {
      alert("Not enough money");
    }
  };

  const handleClearTeam = () => {
    setTeam([]);
    setMoney(100);
    setTotalStrength(0);
    setTotalAgility(0);
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((member) => member.name !== fighter.name);
    setTeam(updatedTeam);
    setMoney(money + fighter.price);
    calculateTotals(updatedTeam);
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
              <TeamMemberList 
                key={fighter.name} 
                fighter={fighter} 
                onDelete={() => handleRemoveFighter(fighter)}
              />
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
