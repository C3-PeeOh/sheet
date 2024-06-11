const classes = [
    {
      name: "Barbarian",
      description: "Mighty warriors fueled by rage, relying on Strength and Constitution.",
      savingThrows: ["strength", "constitution"],
      hitDie: 12,
    },
    {
      name: "Bard",
      description: "Versatile performers blending magic and music, drawing on Charisma and Dexterity.",
      savingThrows: ["dexterity", "charisma"],
      hitDie: 8,
    },
    {
      name: "Cleric",
      description: "Divine agents channeling the power of their deity, often focusing on Wisdom.",
      savingThrows: ["wisdom", "charisma"],
      hitDie: 8,
    },
    {
      name: "Druid",
      description: "Mystical guardians of nature, attuned to the elements and drawing power from Wisdom.",
      savingThrows: ["intelligence", "wisdom"],
      hitDie: 8,
    },
    {
      name: "Fighter",
      description: "Skilled combatants mastering various weapons and tactics, often emphasizing Strength or Dexterity.",
      savingThrows: ["strength", "constitution"],
      hitDie: 10,
    },
    {
      name: "Monk",
      description: "Disciplined martial artists harnessing ki energy, relying on Dexterity and Wisdom.",
      savingThrows: ["strength", "dexterity"],
      hitDie: 8,
    },
    {
      name: "Paladin",
      description: "Holy warriors sworn to a code of honor, empowered by Charisma and Strength or Dexterity.",
      savingThrows: ["wisdom", "charisma"],
      hitDie: 10,
    },
    {
      name: "Ranger",
      description: "Skilled trackers and archers, attuned to the wilderness and guided by Wisdom and Dexterity.",
      savingThrows: ["strength", "dexterity"],
      hitDie: 10,
    },
    {
      name: "Rogue",
      description: "Sneaky and cunning adventurers specializing in stealth and trickery, using Dexterity for finesse.",
      savingThrows: ["dexterity", "intelligence"],
      hitDie: 8,
    },
    {
      name: "Sorcerer",
      description: "Innate spellcasters drawing power from their bloodline, casting spells through Charisma.",
      savingThrows: ["constitution", "charisma"],
      hitDie: 6,
    },
    {
      name: "Warlock",
      description: "Pact-bound spellcasters forging deals with otherworldly beings, focusing on Charisma.",
      savingThrows: ["wisdom", "charisma"],
      hitDie: 8,
    },
    {
      name: "Wizard",
      description: "Learned scholars wielding arcane knowledge, shaping reality through Intelligence and study.",
      savingThrows: ["intelligence", "wisdom"],
      hitDie: 6,
    },
  ];
  
  export default classes;
  