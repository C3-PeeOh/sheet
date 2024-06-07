import experienceTable from './data/levels';

export const calculateModifier = (score) => {
  return Math.floor((score - 10) / 2);
};

export const getLevelFromExperience = (experience) => {
  for (let i = experienceTable.length - 1; i >= 0; i--) {
    if (experience >= experienceTable[i].experience) {
      return experienceTable[i].level;
    }
  }
  return 1;
};

export const getProficiencyBonusFromLevel = (level) => {
  const entry = experienceTable.find((entry) => entry.level === level);
  return entry ? entry.proficiencyBonus : 2;
};

export const getNextLevelExperience = (level) => {
  const entry = experienceTable.find((entry) => entry.level === level + 1);
  return entry ? entry.experience : null;
};
