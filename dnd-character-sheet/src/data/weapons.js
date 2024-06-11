const weapons = [
    //Simple Melee Weapons
    {
      name: "Club",
      cost: "1 sp",
      damage: "1d4",
      weight: "2 lb.",
      type: "simple",
      ranged: false
    },
    {
      name: "Dagger",
      cost: "2 gp",
      damage: "1d4",
      weight: "1 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Greatclub",
      cost: "2 sp",
      damage: "1d8",
      weight: "10 lb.",
      type: "simple",
      ranged: false
    },
    {
      name: "Handaxe",
      cost: "5 gp",
      damage: "1d6",
      weight: "2 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Javelin",
      cost: "5 sp",
      damage: "1d6",
      weight: "2 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Light hammer",
      cost: "2 gp",
      damage: "1d4",
      weight: "2 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Mace",
      cost: "5 gp",
      damage: "1d6",
      weight: "4 lb.",
      type: "simple",
      ranged: false
    },
    {
      name: "Quarterstaff",
      cost: "2 sp",
      damage: "1d6",
      weight: "4 lb.",
      type: "simple",
      ranged: false
    },
    {
      name: "Sickle",
      cost: "1 gp",
      damage: "1d4",
      weight: "2 lb.",
      type: "simple",
      ranged: false
    },
    {
      name: "Spear",
      cost: "1 gp",
      damage: "1d6",
      weight: "3 lb.",
      type: "simple",
      ranged: true
    },

    //Simple Ranged Weapons
    {
      name: "Crossbow, light",
      cost: "25 gp",
      damage: "1d8",
      weight: "5 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Dart",
      cost: "5 cp",
      damage: "1d4",
      weight: "1/4 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Shortbow",
      cost: "25 gp",
      damage: "1d6",
      weight: "2 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Sling",
      cost: "1 sp",
      damage: "1d4",
      weight: "-",
      type: "simple",
      ranged: true
    },

    //Martial Melee Weapons
    {
      name: "Battleaxe",
      cost: "10 gp",
      damage: "1d8",
      weight: "4 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Flail",
      cost: "10 gp",
      damage: "1d8",
      weight: "2 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Glaive",
      cost: "20 gp",
      damage: "1d10",
      weight: "6 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Greataxe",
      cost: "30 gp",
      damage: "1d12",
      weight: "7 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Greatsword",
      cost: "50 gp",
      damage: "2d6",
      weight: "6 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Halberd",
      cost: "20 gp",
      damage: "1d10",
      weight: "6 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Lance",
      cost: "10 gp",
      damage: "1d12",
      weight: "6 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Longsword",
      cost: "15 gp",
      damage: "1d8",
      weight: "3 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Maul",
      cost: "10 gp",
      damage: "2d6",
      weight: "10 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Morningstar",
      cost: "15 gp",
      damage: "1d8",
      weight: "4 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Pike",
      cost: "5 gp",
      damage: "1d10",
      weight: "18 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Rapier",
      cost: "25 gp",
      damage: "1d8",
      weight: "2 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Scimitar",
      cost: "25 gp",
      damage: "1d6",
      weight: "3 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Shortsword",
      cost: "10 gp",
      damage: "1d6",
      weight: "2 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Trident",
      cost: "5 gp",
      damage: "1d6",
      weight: "4 lb.",
      type: "martial",
      ranged: true
    },
    {
      name: "War pick",
      cost: "5 gp",
      damage: "1d8",
      weight: "2 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Warhammer",
      cost: "15 gp",
      damage: "1d8",
      weight: "2 lb.",
      type: "martial",
      ranged: false
    },
    {
      name: "Whip",
      cost: "2 gp",
      damage: "1d4",
      weight: "3 lb.",
      type: "martial",
      ranged: false
    },

    //Martial Ranged Weapons
    {
      name: "Blowgun",
      cost: "10 gp",
      damage: "1 piercing",
      weight: "1 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Crossbow, Hand",
      cost: "75 gp",
      damage: "1d6 piercing",
      weight: "3 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Crossbow, Heavy",
      cost: "50 gp",
      damage: "1d10 piercing",
      weight: "18 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Longbow",
      cost: "50 gp",
      damage: "1d8 piercing",
      weight: "2 lb.",
      type: "simple",
      ranged: true
    },
    {
      name: "Net",
      cost: "1 gp",
      damage: "-",
      weight: "3 lb.",
      type: "simple",
      ranged: true
    }
];
    
export default weapons;
  