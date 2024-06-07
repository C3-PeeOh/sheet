import React, { useState } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesBlock from './components/AttributesBlock';
import SkillsBlock from './components/SkillsBlock';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    level: 1,
    race: '',
    background: '',
    attributes: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    skills: {
      acrobatics: 0,
      animalHandling: 0,
      arcana: 0,
      athletics: 0,
      deception: 0,
      history: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      medicine: 0,
      nature: 0,
      perception: 0,
      performance: 0,
      persuasion: 0,
      religion: 0,
      sleightOfHand: 0,
      stealth: 0,
      survival: 0,
    },
  });

  const handleCharacterChange = (field, value) => {
    setCharacter({
      ...character,
      [field]: value,
    });
  };

  const handleAttributeChange = (attribute, value) => {
    setCharacter({
      ...character,
      attributes: {
        ...character.attributes,
        [attribute]: value,
      },
    });
  };

  const handleSkillChange = (skill, value) => {
    setCharacter({
      ...character,
      skills: {
        ...character.skills,
        [skill]: value,
      },
    });
  };

  const saveCharacter = () => {
    localStorage.setItem('character', JSON.stringify(character));
    alert('Character saved!');
  };

  const loadCharacter = () => {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
      alert('Character loaded!');
    } else {
      alert('No saved character found.');
    }
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          Dungeons & Dragons 5e Character Sheet
        </Typography>
        <CharacterInfo character={character} onCharacterChange={handleCharacterChange} />
        <AttributesBlock attributes={character.attributes} onAttributeChange={handleAttributeChange} />
        <SkillsBlock skills={character.skills} onSkillChange={handleSkillChange} />
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={saveCharacter}>
            Save Character
          </Button>
          <Button variant="contained" color="secondary" onClick={loadCharacter}>
            Load Character
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
