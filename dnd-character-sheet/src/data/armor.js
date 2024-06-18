const armors = [

    //Light Armor
    {
        name: "Leather",
        Cost: "10 gp",
        AC: "11 + Dex modifier",
        StrengthReq: "—",
        StealthDis: false,
        Weight: "10 lb.",
        description: "Light armor made from cured leather."
    },
    {
        name: "Studded Leather",
        Cost: "45 gp",
        AC: "12 + Dex modifier",
        StrengthReq: "—",
        StealthDis: false,
        Weight: "13 lb.",
        description: "Light armor made from leather with metal studs for added protection."
    },
    {
        name: "Padded",
        Cost: "5 gp",
        AC: "11 + Dex modifier",
        StrengthReq: "—",
        StealthDis: true,
        Weight: "8 lb.",
        description: "Light armor consisting of quilted layers of cloth and padding."
    },

    //Medium Armor
    {
        name: "Hide",
        Cost: "10 gp",
        AC: "12 + Dex modifier (max 2)",
        StrengthReq: "—",
        StealthDis: false,
        Weight: "12 lb.",
        description: "Medium armor made from thick leather and animal hides."
    },
    {
        name: "Breastplate",
        Cost: "400 gp",
        AC: "14 + Dex modifier (max 2)",
        StrengthReq: "—",
        StealthDis: false,
        Weight: "20 lb.",
        description: "Medium armor consisting of a fitted metal breastplate."
    },
    {
        name: "Chain Shirt",
        Cost: "50 gp",
        AC: "13 + Dex modifier (max 2)",
        StrengthReq: "—",
        StealthDis: false,
        Weight: "20 lb.",
        description: "Medium armor made from interlocking metal rings."
    },
    {
        name: "Half Plate",
        Cost: "750 gp",
        AC: "15 + Dex modifier (max 2)",
        StrengthReq: "—",
        StealthDis: true,
        Weight: "40 lb.",
        description: "Medium armor consisting of a breastplate and lower body protection made from metal plates."
    },
    {
        name: "Scale Mail",
        Cost: "50 gp",
        AC: "14 + Dex modifier (max 2)",
        StrengthReq: "—",
        StealthDis: true,
        Weight: "45 lb.",
        description: "Medium armor made from overlapping pieces of metal scales."
    },

    //Heavy Armor
    {
        name: "Ring Mail",
        Cost: "30 gp",
        AC: "14",
        StrengthReq: "—",
        StealthDis: true,
        Weight: "40 lb.",
        description: "Heavy armor made from interlocking metal rings, but heavier and sturdier than chain mail."
    },
    {
        name: "Chain Mail",
        Cost: "75 gp",
        AC: "16",
        StrengthReq: 13,
        StealthDis: true,
        Weight: "55 lb.",
        description: "Heavy armor made from interlocking metal rings with additional padding."
    },
    {
        name: "Splint",
        Cost: "200 gp",
        AC: "17",
        StrengthReq: 15,
        StealthDis: true,
        Weight: "60 lb.",
        description: "Heavy armor consisting of metal plates riveted onto leather straps."
    },
    {
        name: "Plate",
        Cost: "1,500 gp",
        AC: "18",
        StrengthReq: 15,
        StealthDis: true,
        Weight: "65 lb.",
        description: "Heavy armor consisting of full plate metal armor."
    },

    //Shields
    {
        name: "Shield",
        Cost: "10 gp",
        AC: "+2",
        StrengthReq: "—",
        Stealth: "—",
        Weight: "6 lb.",
        description: "A simple armament used to augment a warrior's defense."
    }
];