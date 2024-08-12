const heroes = [
    {
      id: 1,
      name: "Aamon",
      role: "Assassin",
      counters: [2, 15, 65],
      favoriteAllies: [7, 32, 60]
    },
    {
      id: 2,
      name: "Akai",
      role: "Tank",
      counters: [31, 64, 92],
      favoriteAllies: [21, 42, 87]
    },
    {
      id: 3,
      name: "Aldous",
      role: "Fighter",
      counters: [73, 89, 106],
      favoriteAllies: [7, 32, 79]
    },
    {
      id: 4,
      name: "Alice",
      role: "Mage",
      counters: [29, 61, 94],
      favoriteAllies: [36, 56, 103]
    },
    {
      id: 5,
      name: "Alpha",
      role: "Fighter",
      counters: [45, 67, 98],
      favoriteAllies: [7, 32, 94]
    },
    {
      id: 6,
      name: "Alucard",
      role: "Fighter",
      counters: [36, 56, 103],
      favoriteAllies: [7, 32, 79]
    },
    {
      id: 7,
      name: "Angela",
      role: "Support",
      counters: [45, 86, 97],
      favoriteAllies: [3, 30, 95]
    },
    {
      id: 8,
      name: "Argus",
      role: "Fighter",
      counters: [29, 61, 94],
      favoriteAllies: [7, 32, 94]
    },
    {
      id: 9,
      name: "Atlas",
      role: "Tank",
      counters: [22, 32, 79],
      favoriteAllies: [24, 60, 74]
    },
    {
      id: 10,
      name: "Aulus",
      role: "Fighter",
      counters: [36, 73, 103],
      favoriteAllies: [7, 32, 79]
    },
    {
        id: 11,
        name: "Aurora",
        role: "Mage",
        counters: [67, 98, 106],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 12,
        name: "Badang",
        role: "Fighter",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 13,
        name: "Balmond",
        role: "Fighter",
        counters: [20, 66, 109],
        favoriteAllies: [7, 32, 94]
      },
      {
        id: 14,
        name: "Bane",
        role: "Fighter",
        counters: [45, 67, 98],
        favoriteAllies: [9, 56, 103]
      },
      {
        id: 15,
        name: "Barats",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [7, 32, 60]
      },
      {
        id: 16,
        name: "Baxia",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [24, 60, 74]
      },
      {
        id: 17,
        name: "Beatrix",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 18,
        name: "Belerick",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 19,
        name: "Benedetta",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 20,
        name: "Brody",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 21,
        name: "Bruno",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 22,
        name: "Carmilla",
        role: "Support",
        counters: [45, 67, 98],
        favoriteAllies: [23, 60, 74]
      },
      {
        id: 23,
        name: "Cecilion",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [22, 36, 56]
      },
      {
        id: 24,
        name: "Chang'e",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 25,
        name: "Chou",
        role: "Fighter",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 26,
        name: "Claude",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 27,
        name: "Clint",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 28,
        name: "Cyclops",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 29,
        name: "Diggie",
        role: "Support",
        counters: [45, 67, 98],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 30,
        name: "Dyrroth",
        role: "Fighter",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 31,
        name: "Esmeralda",
        role: "Mage/Tank",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 32,
        name: "Estes",
        role: "Support",
        counters: [45, 86, 97],
        favoriteAllies: [3, 30, 95]
      },
      {
        id: 33,
        name: "Eudora",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 34,
        name: "Fanny",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 35,
        name: "Faramis",
        role: "Support",
        counters: [45, 67, 98],
        favoriteAllies: [24, 60, 74]
      },
      {
        id: 36,
        name: "Franco",
        role: "Tank",
        counters: [29, 61, 94],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 37,
        name: "Fredrinn",
        role: "Fighter",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 38,
        name: "Freya",
        role: "Fighter",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 39,
        name: "Gatotkaca",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [24, 60, 74]
      },
      {
        id: 40,
        name: "Gloo",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 41,
        name: "Gord",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 42,
        name: "Granger",
        role: "Marksman",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 43,
        name: "Grock",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 44,
        name: "Guinevere",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 45,
        name: "Gusion",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 46,
        name: "Hanabi",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 47,
        name: "Hanzo",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 48,
        name: "Harith",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 49,
        name: "Harley",
        role: "Mage",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 50,
        name: "Hayabusa",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 51,
        name: "Helcurt",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 52,
        name: "Hilda",
        role: "Fighter",
        counters: [31, 64, 92],
        favoriteAllies: [7, 32, 94]
      },
      {
        id: 53,
        name: "Hylos",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 54,
        name: "Irithel",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 55,
        name: "Jawhead",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 56,
        name: "Johnson",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [24, 60, 74]
      },
      {
        id: 57,
        name: "Joy",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 58,
        name: "Julian",
        role: "Fighter",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 59,
        name: "Kadita",
        role: "Mage",
        counters: [29, 61, 94],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 60,
        name: "Kagura",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 61,
        name: "Kaja",
        role: "Support",
        counters: [29, 61, 94],
        favoriteAllies: [24, 60, 74]
      },
      {
        id: 62,
        name: "Karina",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 63,
        name: "Karrie",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 64,
        name: "Khaleed",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 65,
        name: "Khufra",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 66,
        name: "Kimmy",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 67,
        name: "Lancelot",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 68,
        name: "Lapu-Lapu",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 69,
        name: "Layla",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 70,
        name: "Leomord",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 71,
        name: "Lesley",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 72,
        name: "Ling",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 73,
        name: "Lolita",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 74,
        name: "Lunox",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 75,
        name: "Luo Yi",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 76,
        name: "Lylia",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 77,
        name: "Martis",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 78,
        name: "Masha",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 79,
        name: "Mathilda",
        role: "Support",
        counters: [45, 67, 98],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 80,
        name: "Melissa",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 81,
        name: "Minotaur",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 82,
        name: "Minsitthar",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 83,
        name: "Miya",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 84,
        name: "Moskov",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 85,
        name: "Nana",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 86,
        name: "Natalia",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 87,
        name: "Natan",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 88,
        name: "Novaria",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 89,
        name: "Odette",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 90,
        name: "Paquito",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 91,
        name: "Pharsa",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 92,
        name: "Phoveus",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 93,
        name: "Popol and Kupa",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 94,
        name: "Rafaela",
        role: "Support",
        counters: [45, 67, 98],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 95,
        name: "Roger",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 96,
        name: "Ruby",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 97,
        name: "Saber",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 98,
        name: "Selena",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 99,
        name: "Silvanna",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 100,
        name: "Sun",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 101,
        name: "Terizla",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 102,
        name: "Thamuz",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 103,
        name: "Tigreal",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 104,
        name: "Uranus",
        role: "Tank",
        counters: [31, 64, 92],
        favoriteAllies: [21, 42, 87]
      },
      {
        id: 105,
        name: "Vale",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 106,
        name: "Valentina",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 107,
        name: "Valir",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 108,
        name: "Vexana",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 109,
        name: "Wanwan",
        role: "Marksman",
        counters: [45, 67, 98],
        favoriteAllies: [7, 32, 36]
      },
      {
        id: 110,
        name: "X.Borg",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 111,
        name: "Xavier",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 112,
        name: "Yi Sun-shin",
        role: "Assassin",
        counters: [2, 36, 103],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 113,
        name: "Yin",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      },
      {
        id: 114,
        name: "Yve",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 115,
        name: "Zhask",
        role: "Mage",
        counters: [45, 67, 98],
        favoriteAllies: [9, 36, 56]
      },
      {
        id: 116,
        name: "Zilong",
        role: "Fighter",
        counters: [29, 61, 94],
        favoriteAllies: [7, 32, 79]
      }
    ];
    
    export default heroes;