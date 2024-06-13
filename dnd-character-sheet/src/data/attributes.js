const defaultValue = 10;
const attributeNames = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma'
];

const attributes = attributeNames.reduce((acc, attributeName) => {
  acc[attributeName] = defaultValue;
  return acc;
}, {});

export default attributes;
  