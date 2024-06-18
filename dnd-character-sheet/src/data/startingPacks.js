import items from "./items";

const packs = [
  {
    name: "Burglar's Pack",
    cost: "16 gp",
    description:
      "A pack designed for those who prefer to sneak and stealth their way through situations, containing essential tools for breaking and entering.",
    items: [
      items.find((item) => item.name === "Backpack"),
      items.find((item) => item.name === "Ball Bearings (bag of 1,000)"),
      items.find((item) => item.name === "String (10 feet)"),
      items.find((item) => item.name === "Bell"),
      items.find((item) => item.name === "Candles (5)"),
      items.find((item) => item.name === "Crowbar"),
      items.find((item) => item.name === "Hammer"),
      items.find((item) => item.name === "Piton"),
      items.find((item) => item.name === "Hooded Lantern"),
      items.find((item) => item.name === "Oil (flask)"),
      items.find((item) => item.name === "Rations (2 days)"),
      items.find((item) => item.name === "Tinderbox"),
      items.find((item) => item.name === "Waterskin"),
    ],
  },
  {
    name: "Diplomat's Pack",
    cost: "39 gp",
    description:
      "A pack tailored for those who engage in diplomatic missions, containing items to facilitate communication and comfort.",
    items: [
      items.find((item) => item.name === "Chest"),
      items.find((item) => item.name === "Cases, Map or Scroll (2)"),
      items.find((item) => item.name === "Fine Clothes"),
      items.find((item) => item.name === "Ink (1 ounce bottle)"),
      items.find((item) => item.name === "Ink Pen"),
      items.find((item) => item.name === "Lamp"),
      items.find((item) => item.name === "Oil (2 flasks)"),
      items.find((item) => item.name === "Paper (5 sheets)"),
      items.find((item) => item.name === "Perfume (vial)"),
      items.find((item) => item.name === "Sealing Wax"),
      items.find((item) => item.name === "Soap"),
    ],
  },
  {
    name: "Dungeoneer's Pack",
    cost: "12 gp",
    description:
      "A pack prepared for those who explore dungeons, containing items to help navigate and survive underground environments.",
    items: [
      items.find((item) => item.name === "Backpack"),
      items.find((item) => item.name === "Crowbar"),
      items.find((item) => item.name === "Hammer"),
      items.find((item) => item.name === "Piton"),
      items.find((item) => item.name === "Torch"),
      items.find((item) => item.name === "Tinderbox"),
      items.find((item) => item.name === "Rations (10 days)"),
      items.find((item) => item.name === "Waterskin"),
      items.find((item) => item.name === "Hempen Rope (50 feet)"),
    ],
  },
  {
    name: "Entertainer's Pack",
    cost: "40 gp",
    description:
      "A pack for those who perform for a living, containing items to aid in performances and entertainment.",
    items: [
      items.find((item) => item.name === "Backpack"),
      items.find((item) => item.name === "Bedroll"),
      items.find((item) => item.name === "Costume Clothes"),
      items.find((item) => item.name === "Candles (5)"),
      items.find((item) => item.name === "Rations (5 days)"),
      items.find((item) => item.name === "Waterskin"),
      items.find((item) => item.name === "Disguise Kit"),
    ],
  },
  {
    name: "Explorer's Pack",
    cost: "10 gp",
    description:
      "A pack designed for those who traverse the wilds, containing items to help with survival and navigation.",
    items: [
      items.find((item) => item.name === "Backpack"),
      items.find((item) => item.name === "Bedroll"),
      items.find((item) => item.name === "Mess Kit"),
      items.find((item) => item.name === "Tinderbox"),
      items.find((item) => item.name === "Torch (10)"),
      items.find((item) => item.name === "Rations (10 days)"),
      items.find((item) => item.name === "Waterskin"),
      items.find((item) => item.name === "Hempen Rope (50 feet)"),
    ],
  },
  {
    name: "Priest's Pack",
    cost: "19 gp",
    description:
      "A pack prepared for those who serve the divine, containing items to aid in religious practices and rituals.",
    items: [
      items.find((item) => item.name === "Backpack"),
      items.find((item) => item.name === "Blanket"),
      items.find((item) => item.name === "Candles (10)"),
      items.find((item) => item.name === "Tinderbox"),
      items.find((item) => item.name === "Alms Box"),
      items.find((item) => item.name === "Incense (2 blocks)"),
      items.find((item) => item.name === "Censer"),
      items.find((item) => item.name === "Rations (2 days)"),
      items.find((item) => item.name === "Waterskin"),
    ],
  },
  {
    name: "Scholar's Pack",
    cost: "40 gp",
    description:
      "A pack tailored for those devoted to study and knowledge, containing essential tools for research and writing.",
    items: [
      items.find((item) => item.name === "Backpack"),
      items.find((item) => item.name === "Book of Lore"),
      items.find((item) => item.name === "Ink (1 ounce bottle)"),
      items.find((item) => item.name === "Ink Pen"),
      items.find((item) => item.name === "Parchment (10 sheets)"),
      items.find((item) => item.name === "Little Bag of Sand"),
      items.find((item) => item.name === "Small Knife"),
    ],
  },
];

export default packs;
