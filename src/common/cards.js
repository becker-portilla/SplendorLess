// level (int)
//     victoryPoints (int)
//     gem (Constants.Gems)
//     cost ([{Constants.Gems, quantity}])
import Constants from './constants';

const Cards = [
    {
        id: 1,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
        { gem: Constants.Gems.BLUE, qty: 1 },
        { gem: Constants.Gems.GREEN, qty: 1 },
        { gem: Constants.Gems.RED, qty: 1 }
        ]
    },
    {
        id: 2,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
        { gem: Constants.Gems.BLUE, qty: 2 },
        { gem: Constants.Gems.GREEN, qty: 1 },
        { gem: Constants.Gems.RED, qty: 1 }
        ]
    }, 
    {
        id: 3,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
        { gem: Constants.Gems.BLUE, qty: 2 },
        { gem: Constants.Gems.RED, qty: 1 }
        ]
    }, 
    {
        id: 4,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 1 },
        { gem: Constants.Gems.BLACK, qty: 1 },
        { gem: Constants.Gems.RED, qty: 3 }
        ]
    }, 
    {
        id: 5,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 2 },
        { gem: Constants.Gems.RED, qty: 1 }
        ]
    }, 
    {
        id: 6,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
        { gem: Constants.Gems.GREEN, qty: 2 }
        ]
    }, 
    {
        id: 7,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 }]
    }, 
    {
        id: 8,
        level: 1,
        victoryPoints: 1,
        gem: Constants.Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Constants.Gems.BLUE, qty: 4 }]
    }, 
    {
        id: 9,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.RED, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 10,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 11,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 2 },
            { gem: Constants.Gems.RED, qty: 2 }]
    }, 
    {
        id: 12,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.RED, qty: 1 }]
    }, 
    {
        id: 13,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 14,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.GREEN, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 15,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.BLACK, qty: 3 }]
    }, 
    {
        id: 16,
        level: 1,
        victoryPoints: 1,
        gem: Constants.Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Constants.Gems.RED, qty: 4 }]
    }, 
    {
        id: 17,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.RED, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 18,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 2 },
            { gem: Constants.Gems.RED, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 19,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.GREEN, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 20,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 21,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 22,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 23,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 3 }]
    },
    {
        id: 24,
        level: 1,
        victoryPoints: 1,
        gem: Constants.Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Constants.Gems.GREEN, qty: 4 }]
    }, 
    {
        id: 25,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.RED, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 26,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.RED, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 27,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 28,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 1 }]
    }, 
    {
        id: 29,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.BLUE, qty: 1 }]
    }, 
    {
        id: 30,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLUE, qty: 2 }]
    }, 
    {
        id: 31,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.RED, qty: 3 }]
    }, 
    {
        id: 32,
        level: 1,
        victoryPoints: 1,
        gem: Constants.Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Constants.Gems.BLACK, qty: 4 }]
    }, 
    {
        id: 33,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 34,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 35,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 36,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.RED, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    }, 
    {
        id: 37,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.GREEN, qty: 1 }]
    }, 
    {
        id: 38,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.RED, qty: 2 }]
    }, 
    {
        id: 39,
        level: 1,
        victoryPoints: 0,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 }]
    }, 
    {
        id: 40,
        level: 1,
        victoryPoints: 1,
        gem: Constants.Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 4 }]
    }, 
    {
        id: 41,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.BLACK,
        imageCode: "CAMELS",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.GREEN, qty: 2 }]
    },
    {
        id: 42,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.BLACK,
        imageCode: "CAMELS",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    },
    {
        id: 43,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.BLACK,
        imageCode: "CAMELS",
        cost: [{ gem: Constants.Gems.BLUE, qty: 1 },
            { gem: Constants.Gems.GREEN, qty: 4 },
            { gem: Constants.Gems.RED, qty: 2 }]
    },
    {
        id: 44,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.BLACK,
        imageCode: "LAPIDARY_BLACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 5 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 45,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.BLACK,
        imageCode: "LAPIDARY_BLACK",
        cost: [{ gem: Constants.Gems.WHITE, qty: 5 }]
    },
    {
        id: 46,
        level: 2,
        victoryPoints: 3,
        gem: Constants.Gems.BLACK,
        imageCode: "LAPIDARY_BLACK",
        cost: [{ gem: Constants.Gems.BLACK, qty: 6 }]
    },
    {
        id: 47,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.BLUE,
        imageCode: "ELEPHANTS",
        cost: [{ gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.GREEN, qty: 2 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 48,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.BLUE,
        imageCode: "ELEPHANTS",
        cost: [{ gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 49,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.BLUE,
        imageCode: "ELEPHANTS",
        cost: [{ gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 5 }]
    },
    {
        id: 50,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.BLUE,
        imageCode: "LAPIDARY_BLUE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 4 },
            { gem: Constants.Gems.RED, qty: 1 }]
    },
    {
        id: 51,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.BLUE,
        imageCode: "LAPIDARY_BLUE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 5 }]
    },
    {
        id: 52,
        level: 2,
        victoryPoints: 3,
        gem: Constants.Gems.BLUE,
        imageCode: "LAPIDARY_BLUE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 6 }]
    },
    {
        id: 53,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.WHITE,
        imageCode: "PEOPLE_SNOW",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    },
    {
        id: 54,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.WHITE,
        imageCode: "PEOPLE_SNOW",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 55,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.WHITE,
        imageCode: "PEOPLE_SNOW",
        cost: [{ gem: Constants.Gems.GREEN, qty: 1 },
            { gem: Constants.Gems.BLACK, qty: 2 },
            { gem: Constants.Gems.RED, qty: 4 }]
    },
    {
        id: 56,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.WHITE,
        imageCode: "LAPIDARY_WHITE",
        cost: [{ gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.RED, qty: 5 }]
    },
    {
        id: 57,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.WHITE,
        imageCode: "LAPIDARY_WHITE",
        cost: [{ gem: Constants.Gems.RED, qty: 5 }]
    },
    {
        id: 58,
        level: 2,
        victoryPoints: 3,
        gem: Constants.Gems.WHITE,
        imageCode: "LAPIDARY_WHITE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 6 }]
    },
    {
        id: 59,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.GREEN,
        imageCode: "GUY_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 2 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 60,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.GREEN,
        imageCode: "GUY_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 2 }]
    },
    {
        id: 61,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.GREEN,
        imageCode: "GUY_GREEN",
        cost: [{ gem: Constants.Gems.WHITE, qty: 4 },
            { gem: Constants.Gems.BLUE, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 1 }]
    },
    {
        id: 62,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.GREEN,
        imageCode: "CARRACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 5 }]
    },
    {
        id: 63,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.GREEN,
        imageCode: "CARRACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 5 }]
    },
    {
        id: 64,
        level: 2,
        victoryPoints: 3,
        gem: Constants.Gems.GREEN,
        imageCode: "CARRACK",
        cost: [{ gem: Constants.Gems.GREEN, qty: 6 }]
    },
    {
        id: 65,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.RED,
        imageCode: "FELUCCA",
        cost: [{ gem: Constants.Gems.WHITE, qty: 2 },
            { gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 66,
        level: 2,
        victoryPoints: 1,
        gem: Constants.Gems.RED,
        imageCode: "FELUCCA",
        cost: [{ gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 2 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 67,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.RED,
        imageCode: "FELUCCA",
        cost: [{ gem: Constants.Gems.WHITE, qty: 1 },
            { gem: Constants.Gems.BLUE, qty: 4 },
            { gem: Constants.Gems.GREEN, qty: 2 }]
    },
    {
        id: 68,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.RED,
        imageCode: "LAPIDARY_RED",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 5 }]
    },
    {
        id: 69,
        level: 2,
        victoryPoints: 2,
        gem: Constants.Gems.RED,
        imageCode: "LAPIDARY_RED",
        cost: [{ gem: Constants.Gems.BLACK, qty: 5 }]
    },
    {
        id: 70,
        level: 2,
        victoryPoints: 3,
        gem: Constants.Gems.RED,
        imageCode: "LAPIDARY_RED",
        cost: [{ gem: Constants.Gems.RED, qty: 6 }]
    },
    {
        id: 71,
        level: 3,
        victoryPoints: 3,
        gem: Constants.Gems.BLACK,
        imageCode: "STREET_1",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 5 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 72,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.BLACK,
        imageCode: "STREET_2",
        cost: [{ gem: Constants.Gems.RED, qty: 7 }]
    },
    {
        id: 73,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.BLACK,
        imageCode: "STREET_2",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.RED, qty: 6 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 74,
        level: 3,
        victoryPoints: 5,
        gem: Constants.Gems.BLACK,
        imageCode: "STREET_1",
        cost: [{ gem: Constants.Gems.RED, qty: 7 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 75,
        level: 3,
        victoryPoints: 3,
        gem: Constants.Gems.BLUE,
        imageCode: "VENICE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 5 }]
    },
    {
        id: 76,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.BLUE,
        imageCode: "VENICE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 7 }]
    },
    {
        id: 77,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.BLUE,
        imageCode: "DIAMANT_SHOP",
        cost: [{ gem: Constants.Gems.WHITE, qty: 6 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 78,
        level: 3,
        victoryPoints: 5,
        gem: Constants.Gems.BLUE,
        imageCode: "DIAMANT_SHOP",
        cost: [{ gem: Constants.Gems.WHITE, qty: 7 },
            { gem: Constants.Gems.BLUE, qty: 3 }]
    },
    {
        id: 79,
        level: 3,
        victoryPoints: 3,
        gem: Constants.Gems.WHITE,
        imageCode: "BUILDING_WHITE",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 5 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 80,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.WHITE,
        imageCode: "GIOIELLERIA",
        cost: [{ gem: Constants.Gems.BLACK, qty: 7 }]
    },
    {
        id: 81,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.WHITE,
        imageCode: "GIOIELLERIA",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 6 }]
    },
    {
        id: 82,
        level: 3,
        victoryPoints: 5,
        gem: Constants.Gems.WHITE,
        imageCode: "BUILDING_WHITE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 7 }]
    },
    {
        id: 83,
        level: 3,
        victoryPoints: 3,
        gem: Constants.Gems.GREEN,
        imageCode: "TIMBERED_HOUSE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 5 },
            { gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 84,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.GREEN,
        imageCode: "BRIDGE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 7 }]
    },
    {
        id: 85,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.GREEN,
        imageCode: "BRIDGE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 6 },
            { gem: Constants.Gems.GREEN, qty: 3 }]
    },
    {
        id: 86,
        level: 3,
        victoryPoints: 5,
        gem: Constants.Gems.GREEN,
        imageCode: "TIMBERED_HOUSE",
        cost: [{ gem: Constants.Gems.BLUE, qty: 7 },
            { gem: Constants.Gems.GREEN, qty: 3 }]
    },
    {
        id: 87,
        level: 3,
        victoryPoints: 3,
        gem: Constants.Gems.RED,
        imageCode: "EQUESTRIAN_STATUE",
        cost: [{ gem: Constants.Gems.WHITE, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 5 },
            { gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 3 }]
    },
    {
        id: 88,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.RED,
        imageCode: "EQUESTRIAN_STATUE",
        cost: [{ gem: Constants.Gems.GREEN, qty: 7 }]
    },
    {
        id: 89,
        level: 3,
        victoryPoints: 4,
        gem: Constants.Gems.RED,
        imageCode: "BUILDING_RED",
        cost: [{ gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 6 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 90,
        level: 3,
        victoryPoints: 5,
        gem: Constants.Gems.RED,
        imageCode: "BUILDING_RED",
        cost: [{ gem: Constants.Gems.GREEN, qty: 7 },
            { gem: Constants.Gems.RED, qty: 3 }]
    }
];

const Nobles = [
    {
        id: 1,
        victoryPoints: 3,
        imageCode: "CAT_MEDICI",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 2,
        victoryPoints: 3,
        imageCode: "ELI_AUSTRIA",
        cost: [{ gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 3 }]
    },
    {
        id: 3,
        victoryPoints: 3,
        imageCode: "ISA_CASTILE",
        cost: [{ gem: Constants.Gems.BLACK, qty: 4 },
            { gem: Constants.Gems.WHITE, qty: 4 }]
    },
    {
        id: 4,
        victoryPoints: 3,
        imageCode: "NIC_MACHIA",
        cost: [{ gem: Constants.Gems.BLUE, qty: 4 },
            { gem: Constants.Gems.WHITE, qty: 4 }]
    },
    {
        id: 5,
        victoryPoints: 3,
        imageCode: "SUL_MAGNI",
        cost: [{ gem: Constants.Gems.BLUE, qty: 4 },
            { gem: Constants.Gems.GREEN, qty: 4 }]
    },
    {
        id: 6,
        victoryPoints: 3,
        imageCode: "ANN_BRITAN",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 3 }]
    },
    {
        id: 7,
        victoryPoints: 3,
        imageCode: "CHARLES_V",
        cost: [{ gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 3 }]
    },
    {
        id: 8,
        victoryPoints: 3,
        imageCode: "FRAN_FRANCE",
        cost: [{ gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 3 }]
    },
    {
        id: 9,
        victoryPoints: 3,
        imageCode: "HENRY_VIII",
        cost: [{ gem: Constants.Gems.BLACK, qty: 4 },
            { gem: Constants.Gems.RED, qty: 4 }]
    },
    {
        id: 10,
        victoryPoints: 3,
        imageCode: "MARY_STUART",
        cost: [{ gem: Constants.Gems.GREEN, qty: 4 },
            { gem: Constants.Gems.RED, qty: 4 }]
    }
];

const Tokens = [
    {
        id:1,
        gem: Constants.Gems.RED,
        qty:7
    },
    {
        id:2,
        gem: Constants.Gems.BLACK,
        qty:7
    },
    {
        id:3,
        gem: Constants.Gems.BLUE,
        qty:7
    },
    {
        id:4,
        gem: Constants.Gems.GREEN,
        qty:7
    },
    {
        id:5,
        gem: Constants.Gems.WHITE,
        qty:7
    },
    {
        id:6,
        gem: Constants.Gems.YELLOW,
        qty:5
    }
]

export default {Cards, Nobles, Tokens};
