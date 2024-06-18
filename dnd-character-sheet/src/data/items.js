const items = [
  //Adventuring Gear
  {
    name: "Abacus",
    description:
      "A simple counting device, typically made with beads strung on wires within a wooden frame.",
    cost: "2 gp",
    weight: "2 lb.",
  },
  {
    name: "Acid (vial)",
    description:
      "A small vial of acidic liquid that can be thrown as a ranged attack or used for other purposes.",
    cost: "25 gp",
    weight: "1 lb.",
  },
  {
    name: "Alchemist's Fire (flask)",
    description:
      "A flask containing a volatile substance that ignites when exposed to air, used as a weapon or for other purposes.",
    cost: "50 gp",
    weight: "1 lb.",
  },
  {
    name: "Antitoxin (vial)",
    description:
      "A vial of liquid that grants advantage on saving throws against poison for 1 hour.",
    cost: "50 gp",
    weight: "—",
  },
  {
    name: "Arcane Focus, Crystal",
    description:
      "A crystal used by arcane spellcasters as a focus for channeling magical energy.",
    cost: "10 gp",
    weight: "1 lb.",
  },
  {
    name: "Arcane Focus, Orb",
    description:
      "An orb used by arcane spellcasters as a focus for channeling magical energy.",
    cost: "20 gp",
    weight: "3 lb.",
  },
  {
    name: "Arcane Focus, Rod",
    description:
      "A rod used by arcane spellcasters as a focus for channeling magical energy.",
    cost: "10 gp",
    weight: "2 lb.",
  },
  {
    name: "Arcane Focus, Staff",
    description:
      "A staff used by arcane spellcasters as a focus for channeling magical energy.",
    cost: "5 gp",
    weight: "4 lb.",
  },
  {
    name: "Arcane Focus, Wand",
    description:
      "A wand used by arcane spellcasters as a focus for channeling magical energy.",
    cost: "10 gp",
    weight: "1 lb.",
  },
  {
    name: "Ball Bearings (bag of 1,000)",
    description:
      "A bag containing small metal balls, used to create hazards or distractions.",
    cost: "1 gp",
    weight: "2 lb.",
  },
  {
    name: "Bedroll",
    description:
      "A simple padded sleeping mat or bundle of blankets, used for resting outdoors or in dungeons.",
    cost: "1 gp",
    weight: "7 lb.",
  },
  {
    name: "Bell",
    description:
      "A small bell, typically made of brass or another metal, used to produce a ringing sound.",
    cost: "1 gp",
    weight: "—",
  },
  {
    name: "Blanket",
    description:
      "A large, thick cloth used for warmth or comfort while sleeping or resting.",
    cost: "5 sp",
    weight: "3 lb.",
  },
  {
    name: "Block and Tackle",
    description:
      "A set of pulleys and ropes used to lift or move heavy objects more easily.",
    cost: "1 gp",
    weight: "5 lb.",
  },
  {
    name: "Book",
    description:
      "A bound collection of pages containing writing or images, used for reading, study, or reference.",
    cost: "25 gp",
    weight: "5 lb.",
  },
  {
    name: "Caltrops (bag of 20)",
    description:
      "A bag containing sharp metal spikes designed to be scattered on the ground to injure or slow down pursuers.",
    cost: "1 gp",
    weight: "2 lb.",
  },
  {
    name: "Candle",
    description: "A stick of wax with a wick, used to provide light or heat.",
    cost: "1 cp",
    weight: "—",
  },
  {
    name: "Case, Crossbow Bolt",
    description: "A small case designed to hold and protect crossbow bolts.",
    cost: "1 gp",
    weight: "1 lb.",
  },
  {
    name: "Case, Map or Scroll",
    description:
      "A cylindrical or rectangular case designed to hold and protect maps or scrolls.",
    cost: "1 gp",
    weight: "1 lb.",
  },
  {
    name: "Chain (10 feet)",
    description:
      "A length of chain used for various purposes, such as binding or securing objects.",
    cost: "5 gp",
    weight: "10 lb.",
  },
  {
    name: "Chalk (1 piece)",
    description:
      "A small piece of chalk, used for writing or marking surfaces.",
    cost: "1 cp",
    weight: "—",
  },
  {
    name: "Climber's Kit",
    description:
      "A set of tools used for climbing, including ropes, pitons, and a harness.",
    cost: "25 gp",
    weight: "12 lb.",
  },
  {
    name: "Clothes, Common",
    description:
      "Simple and practical everyday clothing, suitable for commoners or adventurers.",
    cost: "5 sp",
    weight: "3 lb.",
  },
  {
    name: "Clothes, Costume",
    description:
      "Elaborate clothing designed for special occasions, performances, or masquerades.",
    cost: "5 gp",
    weight: "4 lb.",
  },
  {
    name: "Clothes, Fine",
    description:
      "High-quality and fashionable clothing made from fine materials, suitable for nobles or wealthy individuals.",
    cost: "15 gp",
    weight: "6 lb.",
  },
  {
    name: "Clothes, Traveler's",
    description:
      "Sturdy and comfortable clothing designed for travel and adventure.",
    cost: "2 gp",
    weight: "4 lb.",
  },
  {
    name: "Component Pouch",
    description:
      "A small, watertight leather belt pouch containing the material components needed for spellcasting.",
    cost: "25 gp",
    weight: "2 lb.",
  },
  {
    name: "Crowbar",
    description:
      "A sturdy iron bar with a flattened end, used to pry open doors or containers.",
    cost: "2 gp",
    weight: "5 lb.",
  },
  {
    name: "Druidic Focus, Sprig of Mistletoe",
    description:
      "A mistletoe sprig used by druids as a focus for channeling nature's energy.",
    cost: "1 gp",
    weight: "—",
  },
  {
    name: "Druidic Focus, Totem",
    description:
      "A totem or small carved figurine used by druids as a focus for channeling nature's energy.",
    cost: "1 gp",
    weight: "—",
  },
  {
    name: "Druidic Focus, Wooden Staff",
    description:
      "A wooden staff used by druids as a focus for channeling nature's energy.",
    cost: "5 gp",
    weight: "4 lb.",
  },
  {
    name: "Druidic Focus, Yew Wand",
    description:
      "A yew wand used by druids as a focus for channeling nature's energy.",
    cost: "10 gp",
    weight: "1 lb.",
  },
  {
    name: "Fishing Tackle",
    description:
      "A set of tools used for fishing, including a pole, line, hooks, and bait.",
    cost: "1 gp",
    weight: "4 lb.",
  },
  {
    name: "Grappling Hook",
    description:
      "A metal hook attached to a rope, used for climbing, securing objects, or pulling items.",
    cost: "2 gp",
    weight: "4 lb.",
  },
  {
    name: "Hammer",
    description:
      "A versatile tool used for driving nails, breaking objects, or other light construction tasks.",
    cost: "1 gp",
    weight: "3 lb.",
  },
  {
    name: "Hammer, Sledge",
    description:
      "A large, heavy hammer used for heavy construction or demolition work.",
    cost: "2 gp",
    weight: "10 lb.",
  },
  {
    name: "Healer's Kit",
    description:
      "A pouch containing bandages, salves, and other supplies used for stabilizing injured creatures.",
    cost: "5 gp",
    weight: "3 lb.",
  },
  {
    name: "Holy Symbol, Amulet",
    description:
      "A holy symbol worn as an amulet, representing a deity or divine power.",
    cost: "5 gp",
    weight: "1 lb.",
  },
  {
    name: "Holy Symbol, Emblem",
    description:
      "A holy symbol engraved or depicted on a shield, banner, or similar item.",
    cost: "5 gp",
    weight: "—",
  },
  {
    name: "Holy Symbol, Reliquary",
    description:
      "A holy symbol housed in a container or shrine, often containing a sacred relic or object.",
    cost: "5 gp",
    weight: "2 lb.",
  },
  {
    name: "Holy Water (flask)",
    description:
      "A vial of blessed water, used as a weapon against undead creatures and other unholy beings.",
    cost: "25 gp",
    weight: "1 lb.",
  },
  {
    name: "Hourglass",
    description:
      "A glass vessel with sand that flows slowly, used to measure time precisely.",
    cost: "25 gp",
    weight: "1 lb.",
  },
  {
    name: "Hunting Trap",
    description:
      "A mechanical trap used to capture or injure creatures, typically used by hunters or trappers.",
    cost: "5 gp",
    weight: "25 lb.",
  },
  {
    name: "Ink (1 ounce bottle)",
    description:
      "A bottle of ink used for writing, drawing, or creating magical scrolls.",
    cost: "10 gp",
    weight: "—",
  },
  {
    name: "Ink Pen",
    description:
      "A simple instrument used for writing, consisting of a quill or other fine-tipped implement.",
    cost: "2 cp",
    weight: "—",
  },
  {
    name: "Ladder (10-foot)",
    description:
      "A collapsible wooden ladder used for climbing or reaching high places.",
    cost: "1 sp",
    weight: "25 lb.",
  },
  {
    name: "Lamp",
    description:
      "A small oil lamp with a handle and spout, used for illumination.",
    cost: "5 sp",
    weight: "1 lb.",
  },
  {
    name: "Lantern, Bullseye",
    description:
      "A lantern with a shutter that can be opened or closed to direct light in a focused beam.",
    cost: "10 gp",
    weight: "2 lb.",
  },
  {
    name: "Lantern, Hooded",
    description:
      "A lantern with a protective covering or hood, used to protect the flame from wind and rain.",
    cost: "5 gp",
    weight: "2 lb.",
  },
  {
    name: "Lock",
    description:
      "A mechanical device with a key or combination mechanism used to secure doors, chests, or other containers.",
    cost: "10 gp",
    weight: "1 lb.",
  },
  {
    name: "Magnifying Glass",
    description:
      "A handheld lens used for magnifying small objects or examining fine details.",
    cost: "100 gp",
    weight: "—",
  },
  {
    name: "Manacles",
    description:
      "A set of shackles or restraints used to secure a creature's wrists or ankles.",
    cost: "2 gp",
    weight: "6 lb.",
  },
  {
    name: "Mess Kit",
    description:
      "A compact set of eating utensils and cookware, used for preparing and eating meals while traveling.",
    cost: "2 sp",
    weight: "1 lb.",
  },
  {
    name: "Mirror, Steel",
    description:
      "A small mirror made of polished steel, used for grooming, signaling, or examining hard-to-see areas.",
    cost: "5 gp",
    weight: "½ lb.",
  },
  {
    name: "Oil (flask)",
    description:
      "A flask containing oil that can be poured on the ground or objects, or used with a lamp or lantern.",
    cost: "1 sp",
    weight: "1 lb.",
  },
  {
    name: "Paper (one sheet)",
    description:
      "A single sheet of paper used for writing, drawing, or creating magical scrolls.",
    cost: "2 sp",
    weight: "—",
  },
  {
    name: "Parchment (one sheet)",
    description:
      "A single sheet of parchment used for writing, drawing, or creating magical scrolls.",
    cost: "1 sp",
    weight: "—",
  },
  {
    name: "Perfume (vial)",
    description:
      "A small vial of fragrant liquid used for personal grooming or masking odors.",
    cost: "5 gp",
    weight: "—",
  },
  {
    name: "Pick, Miner's",
    description:
      "A sturdy pickaxe designed for breaking rock or ore while mining.",
    cost: "2 gp",
    weight: "10 lb.",
  },
  {
    name: "Piton",
    description:
      "A metal spike with an eyelet at one end, used for anchoring ropes or climbing.",
    cost: "5 cp",
    weight: "¼ lb.",
  },
  {
    name: "Poison, Basic (vial)",
    description:
      "A vial of poison applied to weapons or traps to inflict harm on creatures.",
    cost: "100 gp",
    weight: "—",
  },
  {
    name: "Pole (10-foot)",
    description:
      "A wooden pole measuring 10 feet in length, used for various tasks such as vaulting, support, or measuring depth.",
    cost: "5 cp",
    weight: "7 lb.",
  },
  {
    name: "Potion of Healing, Lesser",
    description: "A magical potion that restores a modest amount of hit points when consumed.",
    cost: "50 gp",
    weight: "½ lb.",
    healing: "2d4 + 2"
  },
  {
      name: "Potion of Healing, Greater",
      description: "A magical potion that restores a significant amount of hit points when consumed.",
      cost: "250 gp",
      weight: "½ lb.",
      healing: "4d4 + 4"
  },
  {
      name: "Potion of Healing, Superior",
      description: "A powerful magical potion that greatly restores hit points when consumed.",
      cost: "2500 gp",
      weight: "½ lb.",
      healing: "8d4 + 8"
  },
  {
      name: "Potion of Healing, Supreme",
      description: "An incredibly potent magical potion that massively restores hit points when consumed.",
      cost: "25000 gp",
      weight: "½ lb.",
      healing: "10d4 + 20"
  }
  {
    name: "Quiver",
    description:
      "A container used for holding arrows or bolts, designed to be worn over the shoulder or attached to a belt.",
    cost: "1 gp",
    weight: "1 lb.",
  },
  {
    name: "Ram, Portable",
    description:
      "A portable, reinforced battering ram used for breaking down doors or other obstacles.",
    cost: "4 gp",
    weight: "35 lb.",
  },
  {
    name: "Rations (1 day)",
    description:
      "A day's worth of preserved food, typically consisting of trail rations suitable for travel.",
    cost: "5 sp",
    weight: "2 lb.",
  },
  {
    name: "Robes",
    description:
      "Simple and comfortable robes worn for everyday activities or spellcasting.",
    cost: "1 gp",
    weight: "4 lb.",
  },
  {
    name: "Rope, Hempen (50 feet)",
    description:
      "A coil of strong, durable rope made from hemp fibers, useful for climbing, securing objects, or other tasks.",
    cost: "1 gp",
    weight: "10 lb.",
  },
  {
    name: "Rope, Silk (50 feet)",
    description:
      "A coil of lightweight, silk rope, stronger and more flexible than hempen rope.",
    cost: "10 gp",
    weight: "5 lb.",
  },
  {
    name: "Scale, Merchant's",
    description:
      "A set of small scales used for weighing precious metals, gems, or other trade goods.",
    cost: "5 gp",
    weight: "3 lb.",
  },
  {
    name: "Sealing Wax",
    description:
      "A stick of wax used for sealing letters, documents, or containers with a stamp or seal.",
    cost: "4 sp",
    weight: "—",
  },
  {
    name: "Shovel",
    description:
      "A sturdy digging tool with a metal blade and wooden handle, used for digging or moving earth and debris.",
    cost: "2 gp",
    weight: "5 lb.",
  },
  {
    name: "Signal Whistle",
    description:
      "A small whistle made of metal or bone, used to produce a loud, piercing sound as a signal or alarm.",
    cost: "5 cp",
    weight: "—",
  },
  {
    name: "Signet Ring",
    description:
      "A ring bearing the engraved or embossed symbol of an individual, family, or organization, used to seal documents or mark identity.",
    cost: "5 gp",
    weight: "—",
  },
  {
    name: "Soap",
    description:
      "A small bar or chunk of cleaning substance made from fats, oils, and other ingredients, used for washing.",
    cost: "2 cp",
    weight: "—",
  },
  {
    name: "Spellbook",
    description:
      "A book used by wizards and other spellcasters to record spells, magical experiments, and other arcane knowledge.",
    cost: "50 gp",
    weight: "3 lb.",
  },
  {
    name: "Spikes, Iron (10)",
    description:
      "A set of iron spikes with broad heads, used for securing ropes, tents, or other items into the ground.",
    cost: "1 gp",
    weight: "5 lb.",
  },
  {
    name: "Spyglass",
    description:
      "A handheld optical device with a long tube, used for magnifying distant objects or views.",
    cost: "1,000 gp",
    weight: "1 lb.",
  },
  {
    name: "Tent, two-person",
    description:
      "A portable shelter designed to accommodate two people, typically made of canvas or other durable material.",
    cost: "2 gp",
    weight: "20 lb.",
  },
  {
    name: "Tinderbox",
    description:
      "A small container holding flint, tinder, and other fire-starting materials, used to create sparks and ignite fires.",
    cost: "5 sp",
    weight: "1 lb.",
  },
  {
    name: "Torch",
    description:
      "A stick with a flammable material soaked in oil or resin, used to provide light or start fires.",
    cost: "1 cp",
    weight: "1 lb.",
  },
  {
    name: "Whetstone",
    description:
      "A small, flat stone used for sharpening blades and other edged tools.",
    cost: "1 cp",
    weight: "1 lb.",
  },
  {
    name: "String (10 feet)",
    description: "A simple length of string, useful for a variety of purposes.",
    cost: "1 cp",
    weight: "—",
  },
  {
    name: "Alms Box",
    description: "A small box used for collecting donations or alms.",
    cost: "1 gp",
    weight: "1 lb.",
  },
  {
    name: "Incense (block)",
    description: "A block of incense used for religious ceremonies or rituals.",
    cost: "1 sp",
    weight: "—",
  },
  {
    name: "Censer",
    description:
      "A container used for burning incense, typically used in religious ceremonies.",
    cost: "5 gp",
    weight: "2 lb.",
  },
  {
    name: "Vestments",
    description: "Clothing worn by clergy during religious services.",
    cost: "15 gp",
    weight: "6 lb.",
  },
  {
    name: "Book of Lore",
    description:
      "A book containing information on various subjects, such as history or mythology.",
    cost: "25 gp",
    weight: "5 lb.",
  },
  {
    name: "Sand (little bag)",
    description:
      "A small bag of sand, useful for drying ink or other purposes.",
    cost: "1 cp",
    weight: "—",
  },
  {
    name: "Small Knife",
    description: "A small knife, useful for a variety of purposes.",
    cost: "1 gp",
    weight: "1/2 lb.",
  },

  //Containers
  {
    name: "Backpack",
    description:
      "A sturdy canvas or leather bag designed to carry a variety of items and gear.",
    cost: "2 gp",
    weight: "5 lb.",
  },
  {
    name: "Barrel",
    description:
      "A large cylindrical container made of wood, typically used for holding liquids or solid materials.",
    cost: "2 gp",
    weight: "70 lb.",
  },
  {
    name: "Basket",
    description:
      "A woven container made of wood or other materials, used for carrying goods or foodstuffs.",
    cost: "4 sp",
    weight: "2 lb.",
  },
  {
    name: "Bottle",
    description: "A small glass or ceramic container used for holding liquids.",
    cost: "2 gp",
    weight: "2 lb.",
  },
  {
    name: "Bucket",
    description:
      "A cylindrical container with a handle, typically used for carrying liquids or solid materials.",
    cost: "5 sp",
    weight: "2 lb.",
  },
  {
    name: "Chest",
    description:
      "A large wooden or metal box with a hinged lid, used for storing or transporting goods.",
    cost: "5 gp",
    weight: "25 lb.",
  },
  {
    name: "Flask or tankard",
    description:
      "A small container typically made of metal or ceramic, used for holding liquids like ale or water.",
    cost: "2 cp",
    weight: "1 lb.",
  },
  {
    name: "Jug or pitcher",
    description:
      "A large container with a handle and spout, used for holding and pouring liquids.",
    cost: "2 cp",
    weight: "4 lb.",
  },
  {
    name: "Pot, iron",
    description:
      "A sturdy iron cooking pot used for preparing meals over a fire.",
    cost: "2 gp",
    weight: "10 lb.",
  },
  {
    name: "Pouch",
    description:
      "A small fabric bag with a drawstring, used for carrying coins, gems, or other small items.",
    cost: "5 sp",
    weight: "1 lb.",
  },
  {
    name: "Sack",
    description:
      "A large cloth bag used for carrying or storing a variety of items.",
    cost: "1 cp",
    weight: "0.5 lb.",
  },
  {
    name: "Vial",
    description:
      "A small glass or ceramic bottle used for holding liquids or powders.",
    cost: "1 gp",
    weight: "—",
  },
  {
    name: "Waterskin",
    description:
      "A watertight leather or leather-like container used for carrying water or other liquids.",
    cost: "2 sp",
    weight: "5 lb. (full)",
  },

  //Tools and kits
  {
    name: "Alchemist's supplies",
    description:
      "Tools and materials needed for creating potions, alchemical substances, and other chemical experiments.",
    cost: "50 gp",
    weight: "8 lb.",
  },
  {
    name: "Brewer's supplies",
    description:
      "Equipment and ingredients required for brewing beer, ale, and other fermented beverages.",
    cost: "20 gp",
    weight: "9 lb.",
  },
  {
    name: "Calligrapher's supplies",
    description:
      "Pens, inks, and paper used for beautiful and precise writing and artwork.",
    cost: "10 gp",
    weight: "5 lb.",
  },
  {
    name: "Carpenter's tools",
    description:
      "A set of tools used for woodworking, including saws, hammers, nails, and chisels.",
    cost: "8 gp",
    weight: "6 lb.",
  },
  {
    name: "Cartographer's tools",
    description:
      "Instruments and materials used for map-making and charting territories.",
    cost: "15 gp",
    weight: "6 lb.",
  },
  {
    name: "Cobbler's tools",
    description:
      "Tools for repairing and creating shoes, including awls, hammers, and leather patches.",
    cost: "5 gp",
    weight: "5 lb.",
  },
  {
    name: "Cook's utensils",
    description:
      "Various tools used in cooking, including pots, pans, knives, and stirring spoons.",
    cost: "1 gp",
    weight: "8 lb.",
  },
  {
    name: "Glassblower's tools",
    description: "Specialized tools for shaping and forming glass items.",
    cost: "30 gp",
    weight: "5 lb.",
  },
  {
    name: "Jeweler's tools",
    description:
      "Precision tools used for creating and repairing jewelry, including pliers, files, and molds.",
    cost: "25 gp",
    weight: "2 lb.",
  },
  {
    name: "Leatherworker's tools",
    description:
      "Tools for crafting and repairing leather goods, such as knives, needles, and thread.",
    cost: "5 gp",
    weight: "5 lb.",
  },
  {
    name: "Mason's tools",
    description:
      "Heavy tools used for shaping and laying stone or brick, including trowels and hammers.",
    cost: "10 gp",
    weight: "8 lb.",
  },
  {
    name: "Painter's supplies",
    description: "Brushes, paints, and canvases used for creating artworks.",
    cost: "10 gp",
    weight: "5 lb.",
  },
  {
    name: "Potter's tools",
    description:
      "Tools and materials used for shaping and firing clay into pottery.",
    cost: "10 gp",
    weight: "3 lb.",
  },
  {
    name: "Smith's tools",
    description:
      "Heavy-duty tools for forging and shaping metal, including hammers, tongs, and anvils.",
    cost: "20 gp",
    weight: "8 lb.",
  },
  {
    name: "Tinker's tools",
    description:
      "A variety of small tools used for making minor repairs to household items, including pliers, screwdrivers, and wrenches.",
    cost: "50 gp",
    weight: "10 lb.",
  },
  {
    name: "Weaver's tools",
    description: "Tools used for weaving cloth and creating textiles.",
    cost: "1 gp",
    weight: "5 lb.",
  },
  {
    name: "Woodcarver's tools",
    description:
      "Tools for carving and shaping wood, including chisels and gouges.",
    cost: "1 gp",
    weight: "5 lb.",
  },
  {
    name: "Disguise kit",
    description:
      "Materials and tools for creating disguises, including makeup, wigs, and costumes.",
    cost: "25 gp",
    weight: "3 lb.",
  },
  {
    name: "Forgery kit",
    description:
      "Tools and materials for creating fake documents, including inks, parchment, and seals.",
    cost: "15 gp",
    weight: "5 lb.",
  },
  {
    name: "Dice set",
    description: "A set of various dice used for gambling and games.",
    cost: "1 sp",
    weight: "—",
  },
  {
    name: "Playing card set",
    description: "A deck of cards used for various games and gambling.",
    cost: "5 sp",
    weight: "—",
  },
  {
    name: "Herbalism kit",
    description:
      "Tools and supplies for collecting and preparing herbs, used for creating remedies and potions.",
    cost: "5 gp",
    weight: "3 lb.",
  },
  {
    name: "Bagpipes",
    description:
      "A wind instrument with a distinctive sound, typically used in traditional music.",
    cost: "30 gp",
    weight: "6 lb.",
  },
  {
    name: "Drum",
    description: "A percussion instrument used for rhythm and music.",
    cost: "6 gp",
    weight: "3 lb.",
  },
  {
    name: "Dulcimer",
    description:
      "A stringed musical instrument played by striking the strings with hammers.",
    cost: "25 gp",
    weight: "10 lb.",
  },
  {
    name: "Flute",
    description: "A woodwind instrument with a melodic, airy sound.",
    cost: "2 gp",
    weight: "1 lb.",
  },
  {
    name: "Lute",
    description:
      "A stringed instrument resembling a small guitar, used in a variety of music styles.",
    cost: "35 gp",
    weight: "2 lb.",
  },
  {
    name: "Lyre",
    description:
      "A small harp-like stringed instrument used in ancient and medieval music.",
    cost: "30 gp",
    weight: "2 lb.",
  },
  {
    name: "Horn",
    description:
      "A brass instrument with a coiled tube, used for music and signaling.",
    cost: "3 gp",
    weight: "2 lb.",
  },
  {
    name: "Pan flute",
    description:
      "A musical instrument made from a series of tubes of varying lengths, producing a soft, airy sound.",
    cost: "12 gp",
    weight: "2 lb.",
  },
  {
    name: "Shawm",
    description:
      "A double-reed woodwind instrument with a penetrating, loud sound.",
    cost: "2 gp",
    weight: "1 lb.",
  },
  {
    name: "Viol",
    description:
      "A stringed instrument similar to a violin, used in classical and folk music.",
    cost: "30 gp",
    weight: "1 lb.",
  },
  {
    name: "Navigator's tools",
    description:
      "Instruments and maps used for navigation and charting a course.",
    cost: "25 gp",
    weight: "2 lb.",
  },
  {
    name: "Poisoner's kit",
    description: "Tools and supplies for crafting and applying poisons.",
    cost: "50 gp",
    weight: "2 lb.",
  },
  {
    name: "Thieves' tools",
    description: "A set of tools used for picking locks and disarming traps.",
    cost: "25 gp",
    weight: "1 lb.",
  },
];

export default items;
