// level (int)
//     victoryPoints (int)
//     gem (Gems)
//     cost ([{Gems, quantity}])
import Gems from './constants';

const Cards = [
    {
        id: 1,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.WHITE, qty: 1 },
        { gem: Gems.BLUE, qty: 1 },
        { gem: Gems.GREEN, qty: 1 },
        { gem: Gems.RED, qty: 1 }
        ]
    },
    {
        id: 2,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.WHITE, qty: 1 },
        { gem: Gems.BLUE, qty: 2 },
        { gem: Gems.GREEN, qty: 1 },
        { gem: Gems.RED, qty: 1 }
        ]
    }, 
    {
        id: 3,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.WHITE, qty: 2 },
        { gem: Gems.BLUE, qty: 2 },
        { gem: Gems.RED, qty: 1 }
        ]
    }, 
    {
        id: 4,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.GREEN, qty: 1 },
        { gem: Gems.BLACK, qty: 1 },
        { gem: Gems.RED, qty: 3 }
        ]
    }, 
    {
        id: 5,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.GREEN, qty: 2 },
        { gem: Gems.RED, qty: 1 }
        ]
    }, 
    {
        id: 6,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.WHITE, qty: 2 },
        { gem: Gems.GREEN, qty: 2 }
        ]
    }, 
    {
        id: 7,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.GREEN, qty: 3 }]
    }, 
    {
        id: 8,
        level: 1,
        victoryPoints: 1,
        gem: Gems.BLACK,
        imageCode: "MINE_BLACK",
        cost: [{ gem: Gems.BLUE, qty: 4 }]
    }, 
    {
        id: 9,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.GREEN, qty: 1 },
            { gem: Gems.RED, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 10,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.GREEN, qty: 1 },
            { gem: Gems.RED, qty: 2 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 11,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.GREEN, qty: 2 },
            { gem: Gems.RED, qty: 2 }]
    }, 
    {
        id: 12,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.BLUE, qty: 1 },
            { gem: Gems.GREEN, qty: 3 },
            { gem: Gems.RED, qty: 1 }]
    }, 
    {
        id: 13,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 14,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.GREEN, qty: 2 },
            { gem: Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 15,
        level: 1,
        victoryPoints: 0,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.BLACK, qty: 3 }]
    }, 
    {
        id: 16,
        level: 1,
        victoryPoints: 1,
        gem: Gems.BLUE,
        imageCode: "MINE_BLUE",
        cost: [{ gem: Gems.RED, qty: 4 }]
    }, 
    {
        id: 17,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.BLUE, qty: 1 },
            { gem: Gems.GREEN, qty: 1 },
            { gem: Gems.RED, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 18,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.BLUE, qty: 1 },
            { gem: Gems.GREEN, qty: 2 },
            { gem: Gems.RED, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 19,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.BLUE, qty: 2 },
            { gem: Gems.GREEN, qty: 2 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 20,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLUE, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 21,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.RED, qty: 2 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 22,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.BLUE, qty: 2 },
            { gem: Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 23,
        level: 1,
        victoryPoints: 0,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.BLUE, qty: 3 }]
    },
    {
        id: 24,
        level: 1,
        victoryPoints: 1,
        gem: Gems.WHITE,
        imageCode: "MINE_WHITE",
        cost: [{ gem: Gems.GREEN, qty: 4 }]
    }, 
    {
        id: 25,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.BLUE, qty: 1 },
            { gem: Gems.RED, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 26,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.BLUE, qty: 1 },
            { gem: Gems.RED, qty: 1 },
            { gem: Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 27,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.BLUE, qty: 1 },
            { gem: Gems.RED, qty: 2 },
            { gem: Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 28,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.GREEN, qty: 1 }]
    }, 
    {
        id: 29,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.BLUE, qty: 1 }]
    }, 
    {
        id: 30,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.RED, qty: 2 },
            { gem: Gems.BLUE, qty: 2 }]
    }, 
    {
        id: 31,
        level: 1,
        victoryPoints: 0,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.RED, qty: 3 }]
    }, 
    {
        id: 32,
        level: 1,
        victoryPoints: 1,
        gem: Gems.GREEN,
        imageCode: "MINE_GREEN",
        cost: [{ gem: Gems.BLACK, qty: 4 }]
    }, 
    {
        id: 33,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.BLUE, qty: 1 },
            { gem: Gems.GREEN, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 34,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.BLUE, qty: 1 },
            { gem: Gems.GREEN, qty: 1 },
            { gem: Gems.BLACK, qty: 1 }]
    }, 
    {
        id: 35,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.GREEN, qty: 1 },
            { gem: Gems.BLACK, qty: 2 }]
    }, 
    {
        id: 36,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.RED, qty: 1 },
            { gem: Gems.BLACK, qty: 3 }]
    }, 
    {
        id: 37,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.BLUE, qty: 2 },
            { gem: Gems.GREEN, qty: 1 }]
    }, 
    {
        id: 38,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.RED, qty: 2 }]
    }, 
    {
        id: 39,
        level: 1,
        victoryPoints: 0,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 3 }]
    }, 
    {
        id: 40,
        level: 1,
        victoryPoints: 1,
        gem: Gems.RED,
        imageCode: "MINE_RED",
        cost: [{ gem: Gems.WHITE, qty: 4 }]
    }, 
    {
        id: 41,
        level: 2,
        victoryPoints: 1,
        gem: Gems.BLACK,
        imageCode: "CAMELS",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLUE, qty: 2 },
            { gem: Gems.GREEN, qty: 2 }]
    },
    {
        id: 42,
        level: 2,
        victoryPoints: 1,
        gem: Gems.BLACK,
        imageCode: "CAMELS",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.GREEN, qty: 3 },
            { gem: Gems.BLACK, qty: 2 }]
    },
    {
        id: 43,
        level: 2,
        victoryPoints: 2,
        gem: Gems.BLACK,
        imageCode: "CAMELS",
        cost: [{ gem: Gems.BLUE, qty: 1 },
            { gem: Gems.GREEN, qty: 4 },
            { gem: Gems.RED, qty: 2 }]
    },
    {
        id: 44,
        level: 2,
        victoryPoints: 2,
        gem: Gems.BLACK,
        imageCode: "LAPIDARY_BLACK",
        cost: [{ gem: Gems.GREEN, qty: 5 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 45,
        level: 2,
        victoryPoints: 2,
        gem: Gems.BLACK,
        imageCode: "LAPIDARY_BLACK",
        cost: [{ gem: Gems.WHITE, qty: 5 }]
    },
    {
        id: 46,
        level: 2,
        victoryPoints: 3,
        gem: Gems.BLACK,
        imageCode: "LAPIDARY_BLACK",
        cost: [{ gem: Gems.BLACK, qty: 6 }]
    },
    {
        id: 47,
        level: 2,
        victoryPoints: 1,
        gem: Gems.BLUE,
        imageCode: "ELEPHANTS",
        cost: [{ gem: Gems.BLUE, qty: 2 },
            { gem: Gems.GREEN, qty: 2 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 48,
        level: 2,
        victoryPoints: 1,
        gem: Gems.BLUE,
        imageCode: "ELEPHANTS",
        cost: [{ gem: Gems.BLUE, qty: 2 },
            { gem: Gems.GREEN, qty: 3 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 49,
        level: 2,
        victoryPoints: 2,
        gem: Gems.BLUE,
        imageCode: "ELEPHANTS",
        cost: [{ gem: Gems.BLUE, qty: 3 },
            { gem: Gems.WHITE, qty: 5 }]
    },
    {
        id: 50,
        level: 2,
        victoryPoints: 2,
        gem: Gems.BLUE,
        imageCode: "LAPIDARY_BLUE",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.BLACK, qty: 4 },
            { gem: Gems.RED, qty: 1 }]
    },
    {
        id: 51,
        level: 2,
        victoryPoints: 2,
        gem: Gems.BLUE,
        imageCode: "LAPIDARY_BLUE",
        cost: [{ gem: Gems.BLUE, qty: 5 }]
    },
    {
        id: 52,
        level: 2,
        victoryPoints: 3,
        gem: Gems.BLUE,
        imageCode: "LAPIDARY_BLUE",
        cost: [{ gem: Gems.BLUE, qty: 6 }]
    },
    {
        id: 53,
        level: 2,
        victoryPoints: 1,
        gem: Gems.WHITE,
        imageCode: "PEOPLE_SNOW",
        cost: [{ gem: Gems.GREEN, qty: 3 },
            { gem: Gems.RED, qty: 2 },
            { gem: Gems.BLACK, qty: 2 }]
    },
    {
        id: 54,
        level: 2,
        victoryPoints: 1,
        gem: Gems.WHITE,
        imageCode: "PEOPLE_SNOW",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 55,
        level: 2,
        victoryPoints: 2,
        gem: Gems.WHITE,
        imageCode: "PEOPLE_SNOW",
        cost: [{ gem: Gems.GREEN, qty: 1 },
            { gem: Gems.BLACK, qty: 2 },
            { gem: Gems.RED, qty: 4 }]
    },
    {
        id: 56,
        level: 2,
        victoryPoints: 2,
        gem: Gems.WHITE,
        imageCode: "LAPIDARY_WHITE",
        cost: [{ gem: Gems.BLACK, qty: 3 },
            { gem: Gems.RED, qty: 5 }]
    },
    {
        id: 57,
        level: 2,
        victoryPoints: 2,
        gem: Gems.WHITE,
        imageCode: "LAPIDARY_WHITE",
        cost: [{ gem: Gems.RED, qty: 5 }]
    },
    {
        id: 58,
        level: 2,
        victoryPoints: 3,
        gem: Gems.WHITE,
        imageCode: "LAPIDARY_WHITE",
        cost: [{ gem: Gems.WHITE, qty: 6 }]
    },
    {
        id: 59,
        level: 2,
        victoryPoints: 1,
        gem: Gems.GREEN,
        imageCode: "GUY_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.GREEN, qty: 2 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 60,
        level: 2,
        victoryPoints: 1,
        gem: Gems.GREEN,
        imageCode: "GUY_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.BLACK, qty: 2 }]
    },
    {
        id: 61,
        level: 2,
        victoryPoints: 2,
        gem: Gems.GREEN,
        imageCode: "GUY_GREEN",
        cost: [{ gem: Gems.WHITE, qty: 4 },
            { gem: Gems.BLUE, qty: 2 },
            { gem: Gems.BLACK, qty: 1 }]
    },
    {
        id: 62,
        level: 2,
        victoryPoints: 2,
        gem: Gems.GREEN,
        imageCode: "CARRACK",
        cost: [{ gem: Gems.GREEN, qty: 3 },
            { gem: Gems.BLUE, qty: 5 }]
    },
    {
        id: 63,
        level: 2,
        victoryPoints: 2,
        gem: Gems.GREEN,
        imageCode: "CARRACK",
        cost: [{ gem: Gems.GREEN, qty: 5 }]
    },
    {
        id: 64,
        level: 2,
        victoryPoints: 3,
        gem: Gems.GREEN,
        imageCode: "CARRACK",
        cost: [{ gem: Gems.GREEN, qty: 6 }]
    },
    {
        id: 65,
        level: 2,
        victoryPoints: 1,
        gem: Gems.RED,
        imageCode: "FELUCCA",
        cost: [{ gem: Gems.WHITE, qty: 2 },
            { gem: Gems.RED, qty: 2 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 66,
        level: 2,
        victoryPoints: 1,
        gem: Gems.RED,
        imageCode: "FELUCCA",
        cost: [{ gem: Gems.BLUE, qty: 3 },
            { gem: Gems.RED, qty: 2 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 67,
        level: 2,
        victoryPoints: 2,
        gem: Gems.RED,
        imageCode: "FELUCCA",
        cost: [{ gem: Gems.WHITE, qty: 1 },
            { gem: Gems.BLUE, qty: 4 },
            { gem: Gems.GREEN, qty: 2 }]
    },
    {
        id: 68,
        level: 2,
        victoryPoints: 2,
        gem: Gems.RED,
        imageCode: "LAPIDARY_RED",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLACK, qty: 5 }]
    },
    {
        id: 69,
        level: 2,
        victoryPoints: 2,
        gem: Gems.RED,
        imageCode: "LAPIDARY_RED",
        cost: [{ gem: Gems.BLACK, qty: 5 }]
    },
    {
        id: 70,
        level: 2,
        victoryPoints: 3,
        gem: Gems.RED,
        imageCode: "LAPIDARY_RED",
        cost: [{ gem: Gems.RED, qty: 6 }]
    },
    {
        id: 71,
        level: 3,
        victoryPoints: 3,
        gem: Gems.BLACK,
        imageCode: "STREET_1",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.GREEN, qty: 5 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 72,
        level: 3,
        victoryPoints: 4,
        gem: Gems.BLACK,
        imageCode: "STREET_2",
        cost: [{ gem: Gems.RED, qty: 7 }]
    },
    {
        id: 73,
        level: 3,
        victoryPoints: 4,
        gem: Gems.BLACK,
        imageCode: "STREET_2",
        cost: [{ gem: Gems.GREEN, qty: 3 },
            { gem: Gems.RED, qty: 6 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 74,
        level: 3,
        victoryPoints: 5,
        gem: Gems.BLACK,
        imageCode: "STREET_1",
        cost: [{ gem: Gems.RED, qty: 7 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 75,
        level: 3,
        victoryPoints: 3,
        gem: Gems.BLUE,
        imageCode: "VENICE",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.GREEN, qty: 3 },
            { gem: Gems.RED, qty: 3 },
            { gem: Gems.BLACK, qty: 5 }]
    },
    {
        id: 76,
        level: 3,
        victoryPoints: 4,
        gem: Gems.BLUE,
        imageCode: "VENICE",
        cost: [{ gem: Gems.WHITE, qty: 7 }]
    },
    {
        id: 77,
        level: 3,
        victoryPoints: 4,
        gem: Gems.BLUE,
        imageCode: "DIAMANT_SHOP",
        cost: [{ gem: Gems.WHITE, qty: 6 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 78,
        level: 3,
        victoryPoints: 5,
        gem: Gems.BLUE,
        imageCode: "DIAMANT_SHOP",
        cost: [{ gem: Gems.WHITE, qty: 7 },
            { gem: Gems.BLUE, qty: 3 }]
    },
    {
        id: 79,
        level: 3,
        victoryPoints: 3,
        gem: Gems.WHITE,
        imageCode: "BUILDING_WHITE",
        cost: [{ gem: Gems.GREEN, qty: 3 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.RED, qty: 5 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 80,
        level: 3,
        victoryPoints: 4,
        gem: Gems.WHITE,
        imageCode: "GIOIELLERIA",
        cost: [{ gem: Gems.BLACK, qty: 7 }]
    },
    {
        id: 81,
        level: 3,
        victoryPoints: 4,
        gem: Gems.WHITE,
        imageCode: "GIOIELLERIA",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.RED, qty: 3 },
            { gem: Gems.BLACK, qty: 6 }]
    },
    {
        id: 82,
        level: 3,
        victoryPoints: 5,
        gem: Gems.WHITE,
        imageCode: "BUILDING_WHITE",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLACK, qty: 7 }]
    },
    {
        id: 83,
        level: 3,
        victoryPoints: 3,
        gem: Gems.GREEN,
        imageCode: "TIMBERED_HOUSE",
        cost: [{ gem: Gems.WHITE, qty: 5 },
            { gem: Gems.BLACK, qty: 3 },
            { gem: Gems.BLUE, qty: 3 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 84,
        level: 3,
        victoryPoints: 4,
        gem: Gems.GREEN,
        imageCode: "BRIDGE",
        cost: [{ gem: Gems.BLUE, qty: 7 }]
    },
    {
        id: 85,
        level: 3,
        victoryPoints: 4,
        gem: Gems.GREEN,
        imageCode: "BRIDGE",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLUE, qty: 6 },
            { gem: Gems.GREEN, qty: 3 }]
    },
    {
        id: 86,
        level: 3,
        victoryPoints: 5,
        gem: Gems.GREEN,
        imageCode: "TIMBERED_HOUSE",
        cost: [{ gem: Gems.BLUE, qty: 7 },
            { gem: Gems.GREEN, qty: 3 }]
    },
    {
        id: 87,
        level: 3,
        victoryPoints: 3,
        gem: Gems.RED,
        imageCode: "EQUESTRIAN_STATUE",
        cost: [{ gem: Gems.WHITE, qty: 3 },
            { gem: Gems.BLUE, qty: 5 },
            { gem: Gems.GREEN, qty: 3 },
            { gem: Gems.BLACK, qty: 3 }]
    },
    {
        id: 88,
        level: 3,
        victoryPoints: 4,
        gem: Gems.RED,
        imageCode: "EQUESTRIAN_STATUE",
        cost: [{ gem: Gems.GREEN, qty: 7 }]
    },
    {
        id: 89,
        level: 3,
        victoryPoints: 4,
        gem: Gems.RED,
        imageCode: "BUILDING_RED",
        cost: [{ gem: Gems.BLUE, qty: 3 },
            { gem: Gems.GREEN, qty: 6 },
            { gem: Gems.RED, qty: 3 }]
    },
    {
        id: 90,
        level: 3,
        victoryPoints: 5,
        gem: Gems.RED,
        imageCode: "BUILDING_RED",
        cost: [{ gem: Gems.GREEN, qty: 7 },
            { gem: Gems.RED, qty: 3 }]
    }
];

export default Cards;
