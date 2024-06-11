const races = [
  {
    name: "Dragonborn",
    description: "Proud and fierce, dragonborn embody the traits of their draconic ancestors.",
    abilityBonuses: { strength: 2, charisma: 1 },
    size: "Medium",
    speed: 30,
  },
  {
    name: "Dwarf",
    description: "Hardy and industrious, dwarves excel in craftsmanship and resilience.",
    abilityBonuses: { constitution: 2 },
    size: "Medium",
    speed: 25,
  },
  {
    name: "Elf",
    description: "Graceful and attuned to nature, elves possess keen senses and a deep connection to magic.",
    abilityBonuses: { dexterity: 2 },
    size: "Medium",
    speed: 30,
  },
  {
    name: "Gnome",
    description: "Curious and inventive, gnomes have a knack for tinkering and a love for all things magical.",
    abilityBonuses: { intelligence: 2 },
    size: "Small",
    speed: 25,
  },
  {
    name: "Half-Elf",
    description: "Charismatic and adaptable, half-elves bridge the gap between humans and elves.",
    abilityBonuses: { charisma: 2 /*TODO add "choosable" points*/},
    size: "Medium",
    speed: 30,
  },
  {
    name: "Half-Orc",
    description: "Strong and resilient, half-orcs combine the ferocity of orcs with human cunning.",
    abilityBonuses: { strength: 2, constitution: 1 },
    size: "Medium",
    speed: 30,
  },
  {
    name: "Halfling",
    description: "Nimble and sociable, halflings are known for their luck and talent for stealth.",
    abilityBonuses: { dexterity: 2 },
    size: "Small",
    speed: 25,
  },
  {
    name: "Human",
    description: "Versatile and ambitious, humans are adaptable and excel in various endeavors.",
    abilityBonuses: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
    size: "Medium",
    speed: 30,
  },
  {
    name: "Tiefling",
    description: "Mysterious and alluring, tieflings bear the infernal heritage of their fiendish ancestors.",
    abilityBonuses: { charisma: 2, intelligence: 1 },
    size: "Medium",
    speed: 30,
  },
];
  
export default races;
  