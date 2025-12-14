export const zones = new Map([
    ["Cap", [
        {
            "id": 1001,
            "kingdomId": 1,
            "name": "Poison Tide Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.7625732421875,
            "y": 0.29433278777017713,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1002,
            "kingdomId": 2,
            "name": "Poison Tide Interior (Start)",
            "subarea": "Poison Tide",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1003"
                ]
            }
        },
        {
            "id": 1003,
            "kingdomId": 3,
            "name": "Poison Tide Interior (End)",
            "subarea": "Poison Tide",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1002"
                ]
            }
        },
        {
            "id": 1004,
            "kingdomId": 4,
            "name": "Frog Pond Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.3790283203125,
            "y": 0.27809201965569874,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1005,
            "kingdomId": 5,
            "name": "Frog Pond Interior",
            "subarea": "Frog Pond",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 1006,
            "kingdomId": 6,
            "name": "Push-Block Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.7283935546875,
            "y": 0.2410041053546027,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1007,
            "kingdomId": 7,
            "name": "Push-Block Room Interior (Start)",
            "subarea": "Push-Block Room",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1008"
                ]
            }
        },
        {
            "id": 1008,
            "kingdomId": 8,
            "name": "Push-Block Room Interior (End)",
            "subarea": "Push-Block Room",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1007"
                ]
            }
        },
        {
            "id": 1009,
            "kingdomId": 9,
            "name": "Rolling Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.3583984375,
            "y": 0.38880752530365914,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 1010,
            "kingdomId": 10,
            "name": "Rolling Room Interior (Start)",
            "subarea": "Rolling Room",
            "type": "moonpipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 1011,
            "kingdomId": 11,
            "name": "Rolling Room Interior (End)",
            "subarea": "Rolling Room",
            "type": "moonpipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1010"
                ]
            }
        }
    ]],
    ["Cascade", [
        {
            "id": 1012,
            "kingdomId": 1,
            "name": "Dinosaur Nest Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.4840643101677439,
            "y": 0.8078359090256934,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1013,
            "kingdomId": 2,
            "name": "Dinosaur Nest Interior",
            "subarea": "Dinosaur Nest",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 1014,
            "kingdomId": 3,
            "name": "2D Chasm Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.6021456183541694,
            "y": 0.33636430814403323,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1015,
            "kingdomId": 4,
            "name": "2D Chasm Interior (Start)",
            "subarea": "2D Chasm",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1016"
                ]
            }
        },
        {
            "id": 1016,
            "kingdomId": 5,
            "name": "2D Chasm Interior (End)",
            "subarea": "2D Chasm",
            "type": "door",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1015"
                ]
            }
        },
        
        {
            "id": 1017,
            "kingdomId": 6,
            "name": "Chain Chomp Room Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.37993531923893975,
            "y": 0.12648921566375237,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1018,
            "kingdomId": 7,
            "name": "Chain Chomp Room Interior (Start)",
            "subarea": "Chain Chomp Room",
            "type": "pipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1019"
                ]
            }
        },
        {
            "id": 1019,
            "kingdomId": 8,
            "name": "Chain Chomp Room Interior (End)",
            "subarea": "Chain Chomp Room",
            "type": "pipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1018"
                ]
            }
        },
        {
            "id": 1020,
            "kingdomId": 9,
            "name": "Gusty Bridges Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.47025363084769417,
            "y": 0.550775976847842,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 1021,
            "kingdomId": 10,
            "name": "Gusty Bridges Interior (Start)",
            "subarea": "Gusty Bridges",
            "type": "moonpipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1022"
                ]
            }
        },
        {
            "id": 1022,
            "kingdomId": 11,
            "name": "Gusty Bridges Interior (End)",
            "subarea": "Gusty Bridges",
            "type": "moonpipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1021"
                ]
            }
        },
        {
            "id": 1023,
            "kingdomId": 12,
            "name": "Mysterious Clouds Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.4668009610176818,
            "y": 0.2159639479185545,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 1024,
            "kingdomId": 13,
            "name": "Mysterious Clouds Interior (Start)",
            "subarea": "Mysterious Clouds",
            "type": "moonpipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1025"
                ]
            }
        },
        {
            "id": 1025,
            "kingdomId": 14,
            "name": "Mysterious Clouds Interior (End)",
            "subarea": "Mysterious Clouds",
            "type": "moonpipe",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1024"
                ]
            }
        },

    ]],
    ["Sand", []],
    ["Lake", []],
    ["Wooded", []],
    ["Cloud", []],
    ["Lost", []],
    ["Metro", []],
    ["Snow", []],
    ["Seaside", []],
    ["Luncheon", []],
    ["Ruined", []],
    ["Bowser", []],
    ["Moon", []],
    ["Mushroom", []],
    ["Dark", []],
    ["Darker", []],
]);