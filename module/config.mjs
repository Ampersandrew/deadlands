export const dlcConfig = {
  Ascii:
    '\n\n' +
    '  -------------------------------------------------\n' +
    '   ______               _ _                 _\n' +
    '   |  _  \\             | | |               | |\n' +
    '   | | | |___  __ _  __| | | __ _ _ __   __| |___\n' +
    "   | | | / _ \\/ _` |/ _` | |/ _` | '_ \\ / _` / __|\n" +
    '   | |/ /  __/ (_| | (_| | | (_| | | | | (_| \\__ \n' +
    '   |___/ \\___|\\__,_|\\__,_|_|\\__,_|_| |_|\\__,_|___/\n' +
    '          _____ _               _\n' +
    '         /  __ \\ |             (_)\n' +
    '         | /  \\/ | __ _ ___ ___ _  ___\n' +
    '         | |   | |/ _` / __/ __| |/ __|\n' +
    '         | \\__/\\ | (_| \\__ \\__ \\ | (__\n' +
    '          \\____/_|\\__,_|___/___/_|\\___|\n' +
    '  =================================================\n\n\n',

  aptitudes: {
    Academia: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      hasUniversalConcentrations: true,
      concentrations: ['Philosophy', 'History', 'Occult'],
    },
    "Animal Wranglin'": {
      trait: 'Mien',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: true,
      concentrationsWW: ['Bronco Busting', 'Dog Training'],
    },
    'Area Knowledge': {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      hasUniversalConcentrations: true,
      concentrations: ['Custom', 'Home County'],
      default: 2,
    },
    Artillery: {
      trait: 'Cognition',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: [
        'Missile or Grenade launchers',
        'Rockets',
        'Howitzers',
      ],
      concentrationsWW: ['Cannons', 'Gatling Guns', 'Rockets'],
    },
    Arts: {
      trait: 'Cognition',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasUniversalConcentrations: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      concentrations: ['Painting', 'Sculpting', 'Sketching'],
    },
    Astrogation: {
      trait: 'Smarts',
      isHoe: false,
      isLC: true,
      isWW: false,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Bluff: {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Bow: {
      trait: 'Deftness',
      isHoe: false,
      isLC: false,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Climbin'": {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      default: 1,
    },
    Demolition: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Disguise: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Dodge: {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Drivin'": {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: ['Custom'],
      concentrationsWW: ['Steam Boat', 'Ornithopter', 'Steam Wagon'],
    },
    Faith: {
      trait: 'Spirit',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: true,
      concentrationsWW: ['Buddist', 'Christian', 'Other'],
    },
    "Fightin'": {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: [
        'Axe',
        'Brawlin’',
        'Club',
        'Knife',
        'Sword',
        'Custom',
      ],
      concentrationsWW: [
        "Brawlin'",
        'Knife',
        'Lariat',
        'Sword',
        'Whip',
        "Wrasslin'",
        'Custom',
      ],
    },
    "Filchin'": {
      trait: 'Deftness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Flyin'": {
      trait: 'Nimbleness',
      isHoe: false,
      isLC: true,
      isWW: false,
      hasConcHoe: false,
      hasConcLC: true,
      hasConcWW: false,
      concentrationsLC: ['Custom'],
    },
    "Gamblin'": {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Guts: {
      trait: 'Spirit',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Hexslingin'": {
      trait: 'Special',
      isHoe: false,
      isLC: false,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Horse Ridin'": {
      trait: 'Nimbleness',
      isHoe: false,
      isLC: false,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Language: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsLC: [
        'Anouk - one - Fertile Crescent',
        'Anouk - one - Great Wastes',
        'Anouk - one - New Sahara',
        'Anouk - one - the Cold',
        'Anouk - one - Tornado Alley',
        'Anouk - one - Toxic Jungle',
        'Anouk - two',
      ],
      concentrationsHoE: [
        'Apache',
        'English',
        'French',
        'Gaelic',
        'German',
        'Latin',
        'Mandarin',
        'Portugese',
        'Sign Language (Indian)',
        'Sioux',
        'Spanish',
      ],
      concentrationsWW: [
        'Apache',
        'English',
        'French',
        'Gaelic',
        'German',
        'Latin',
        'Mandarin',
        'Portugese',
        'Sign Language (Indian)',
        'Sioux',
        'Spanish',
      ],
      default: 2,
    },
    Leadership: {
      trait: 'Mien',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Lockpickin'": {
      trait: 'Deftness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    'Mad Science': {
      trait: 'Knowledge',
      isHoe: false,
      isLC: false,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Medicine: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      hasUniversalConcentrations: true,
      concentrations: ['General', 'Surgery', 'Veterinary'],
    },
    Overawe: {
      trait: 'Mien',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Performin'": {
      trait: 'Mien',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      hasUniversalConcentrations: true,
      concentrations: [
        'Acting',
        'Dancing',
        'Fiddle',
        'Harmonica',
        'Juggling',
        'Legerdemain',
        'Singing',
      ],
    },
    Persuasion: {
      trait: 'Mien',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Professional: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: [
        'Accounting',
        'Computer Programming',
        'Journalism',
        'Law',
        'Military',
        'Photography',
        'Politics',
        'Stock Broker',
        'Theology',
        'Others',
      ],
      concentrationsWW: [
        'Journalism',
        'Law',
        'Military',
        'Photography',
        'Politics',
        'Theology',
      ],
    },
    'Quick Draw': {
      trait: 'Quickness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: true,
      concentrationsWW: ['Knife', 'Pistol', 'Rifle', 'Shotgun', 'Sword'],
    },
    "Ridin'": {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: false,
      commonHoeAndLC: true,
      hasConcHoe: false,
      hasConcLC: true,
      hasConcWW: false,
      concentrationsLC: ['Custom'],
    },
    Ridicule: {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Ritual: {
      trait: 'Special',
      isHoe: false,
      isLC: false,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Science: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: [
        'General',
        'Biology',
        'Chemistry',
        'Electronics',
        'Engineering',
        'Occult Engineering',
        'Physics',
      ],
      concentrationsWW: ['Biology', 'Chemistry', 'Engineering', 'Physics'],
    },
    "Scroungin'": {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Scrutinize: {
      trait: 'Cognition',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Search: {
      trait: 'Cognition',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      default: 1,
    },
    "Shootin'": {
      trait: 'Deftness',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: ['Bow', 'Pistol', 'MG', 'Rifle', 'Shotgun', 'SMG'],
      concentrationsWW: [
        'Automatics',
        'Flamethrower',
        'Pistol',
        'Rifle',
        'Shotgun',
      ],
    },
    'Sleight of Hand': {
      trait: 'Deftness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Sneak: {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      default: 1,
    },
    'Speed-Load': {
      trait: 'Deftness',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: ['Bow', 'Pistol', 'MG', 'Rifle', 'Shotgun', 'SMG'],
      concentrationsWW: ['Pistol', 'Rifle', 'Shotgun'],
    },
    Spot: {
      trait: 'Cognition',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Streetwise: {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Survival: {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsLC: [
        'the Cold',
        'Tornado Alley',
        'Fertile Crescent',
        'Great Wastes',
        'New Sahara',
        'Toxic Jungle',
        'Space',
      ],
      concentrationsHoE: ['City', 'Desert', 'Mountain', 'Swamp', 'Plains'],
      concentrationsWW: ['Desert', 'Mountain', 'Swamp', 'Plains'],
    },
    "Swimmin'": {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Tale-Tellin'": {
      trait: 'Mien',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Teamster: {
      trait: 'Nimbleness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Throwin'": {
      trait: 'Deftness',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
      hasUniversalConcentrations: true,
      concentrations: ['Balanced', 'Unbalanced'],
    },
    "Tinkerin'": {
      trait: 'Smarts',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    "Trackin'": {
      trait: 'Cognition',
      isHoe: true,
      isLC: true,
      isWW: true,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
    Trade: {
      trait: 'Knowledge',
      isHoe: true,
      isLC: true,
      isWW: true,
      commonHoeAndLC: true,
      hasConcHoe: true,
      hasConcLC: true,
      hasConcWW: true,
      concentrationsHoE: [
        'Blacksmithing',
        'Carpentry',
        'Electrician',
        'Seamanship',
        'Mining',
        'Undertaking',
      ],
      concentrationsWW: [
        'Blacksmithing',
        'Carpentry',
        'Gunsmithing',
        'Mining',
        'Seamanship',
        'Telegraphy',
        'Undertaking',
      ],
    },
    Transmute: {
      trait: 'Smarts',
      isHoe: false,
      isLC: true,
      isWW: false,
      hasConcHoe: false,
      hasConcLC: false,
      hasConcWW: false,
    },
  },

  arcaneFlavour: [
    'none',
    'blessed',
    'huckster',
    'madScientist',
    'shaman',
    'harrowed',
  ],

  arcaneLabel: {
    none: 'DLC.arcaneFlavour.none',
    blessed: 'DLC.arcaneFlavour.blessed',
    huckster: 'DLC.arcaneFlavour.huckster',
    madScientist: 'DLC.arcaneFlavour.madScientist',
    shaman: 'DLC.arcaneFlavour.shaman',
    harrowed: 'DLC.arcaneFlavour.harrowed',
  },

  archtypeChoices: {
    buffaloGirl: 'DLC.archtypes.buffaloGirl',
    cayoteBrave: 'DLC.archtypes.cayoteBrave',
    cowpoke: 'DLC.archtypes.cowpoke',
    custom: 'DLC.archtypes.custom',
    gambler: 'DLC.archtypes.gambler',
    guacho: 'DLC.archtypes.guacho',
    gunslinger: 'DLC.archtypes.gunslinger',
    huckster: 'DLC.archtypes.huckster',
    kid: 'DLC.archtypes.kid',
    madScientist: 'DLC.archtypes.madScientist',
    manInBlack: 'DLC.archtypes.manInBlack',
    muckraker: 'DLC.archtypes.muckraker',
    nun: 'DLC.archtypes.nun',
    ponyExpressRider: 'DLC.archtypes.ponyExpressRider',
    preacher: 'DLC.archtypes.preacher',
    prospector: 'DLC.archtypes.prospector',
    saloonGal: 'DLC.archtypes.saloonGal',
    sheriff: 'DLC.archtypes.sheriff',
    shyster: 'DLC.archtypes.shyster',
    siouxShaman: 'DLC.archtypes.siouxShaman',
    soldier: 'DLC.archtypes.soldier',
    spy: 'DLC.archtypes.spy',
    texasRanger: 'DLC.archtypes.texasRanger',
  },

  archtypes: {
    buffaloGirl: {
      traits: [
        'Nimbleness',
        'Deftness',
        'Quickness',
        'Mien',
        'Cognition',
        'Vigor',
        'Spirit',
        'Strength',
        'Smarts',
        'Knowledge',
      ],
    },
    cayoteBrave: {
      traits: [
        'Strength',
        'Nimbleness',
        'Quickness',
        'Vigor',
        'Deftness',
        'Cognition',
        'Spirit',
        'Knowledge',
        'Mien',
        'Smarts',
      ],
    },
    cowpoke: {
      traits: [
        'Vigor',
        'Deftness',
        'Strength',
        'Nimbleness',
        'Mien',
        'Quickness',
        'Cognition',
        'Spirit',
        'Smarts',
        'Knowledge',
      ],
    },
    gambler: {
      traits: [
        'Smarts',
        'Deftness',
        'Cognition',
        'Knowledge',
        'Quickness',
        'Vigor',
        'Spirit',
        'Nimbleness',
        'Mien',
        'Strength',
      ],
    },
    guacho: {
      traits: [
        'Nimbleness',
        'Deftness',
        'Quickness',
        'Strength',
        'Vigor',
        'Spirit',
        'Cognition',
        'Smarts',
        'Mien',
        'Knowledge',
      ],
    },
    gunslinger: {
      traits: [
        'Quickness',
        'Deftness',
        'Mien',
        'Cognition',
        'Spirit',
        'Nimbleness',
        'Vigor',
        'Strength',
        'Smarts',
        'Knowledge',
      ],
    },
    huckster: {
      traits: [
        'Smarts',
        'Knowledge',
        'Deftness',
        'Cognition',
        'Spirit',
        'Quickness',
        'Strength',
        'Nimbleness',
        'Mien',
        'Vigor',
      ],
    },
    kid: {
      traits: [
        'Nimbleness',
        'Mien',
        'Spirit',
        'Deftness',
        'Quickness',
        'Vigor',
        'Strength',
        'Smarts',
        'Cognition',
        'Knowledge',
      ],
    },
    madScientist: {
      traits: [
        'Knowledge',
        'Smarts',
        'Cognition',
        'Spirit',
        'Mien',
        'Deftness',
        'Vigor',
        'Quickness',
        'Strength',
        'Nimbleness',
      ],
    },
    manInBlack: {
      traits: [
        'Cognition',
        'Mien',
        'Nimbleness',
        'Deftness',
        'Knowledge',
        'Quickness',
        'Smarts',
        'Vigor',
        'Spirit',
        'Strength',
      ],
    },
    muckraker: {
      traits: [
        'Cognition',
        'Smarts',
        'Knowledge',
        'Mien',
        'Spirit',
        'Quickness',
        'Nimbleness',
        'Deftness',
        'Strength',
        'Vigor',
      ],
    },
    nun: {
      traits: [
        'Spirit',
        'Mien',
        'Cognition',
        'Strength',
        'Nimbleness',
        'Quickness',
        'Vigor',
        'Smarts',
        'Knowledge',
        'Deftness',
      ],
    },
    ponyExpressRider: {
      traits: [
        'Nimbleness',
        'Vigor',
        'Deftness',
        'Smarts',
        'Quickness',
        'Mien',
        'Cognition',
        'Strength',
        'Spirit',
        'Knowledge',
      ],
    },
    preacher: {
      traits: [
        'Nimbleness',
        'Vigor',
        'Deftness',
        'Smarts',
        'Quickness',
        'Mien',
        'Cognition',
        'Strength',
        'Spirit',
        'Knowledge',
      ],
    },
    prospector: {
      traits: [
        'Strength',
        'Quickness',
        'Vigor',
        'Nimbleness',
        'Cognition',
        'Deftness',
        'Mien',
        'Spirit',
        'Smarts',
        'Knowledge',
      ],
    },
    saloonGal: {
      traits: [
        'Mien',
        'Smarts',
        'Cognition',
        'Spirit',
        'Knowledge',
        'Nimbleness',
        'Quickness',
        'Deftness',
        'Vigor',
        'Strength',
      ],
    },
    sheriff: {
      traits: [
        'Deftness',
        'Quickness',
        'Nimbleness',
        'Strength',
        'Cognition',
        'Vigor',
        'Mien',
        'Spirit',
        'Smarts',
        'Knowledge',
      ],
    },
    shyster: {
      traits: [
        'Knowledge',
        'Cognition',
        'Mien',
        'Deftness',
        'Smarts',
        'Quickness',
        'Nimbleness',
        'Vigor',
        'Spirit',
        'Strength',
      ],
    },
    siouxShaman: {
      traits: [
        'Spirit',
        'Mien',
        'Cognition',
        'Smarts',
        'Knowledge',
        'Quickness',
        'Vigor',
        'Nimbleness',
        'Deftness',
        'Strength',
      ],
    },
    soldier: {
      traits: [
        'Deftness',
        'Nimbleness',
        'Strength',
        'Quickness',
        'Vigor',
        'Cognition',
        'Spirit',
        'Mien',
        'Smarts',
        'Knowledge',
      ],
    },
    spy: {
      traits: [
        'Cognition',
        'Mien',
        'Smarts',
        'Knowledge',
        'Deftness',
        'Quickness',
        'Vigor',
        'Strength',
        'Nimbleness',
        'Spirit',
      ],
    },
    texasRanger: {
      traits: [
        'Deftness',
        'Quickness',
        'Nimbleness',
        'Strength',
        'Cognition',
        'Vigor',
        'Spirit',
        'Mien',
        'Smarts',
        'Knowledge',
      ],
    },
  },

  dieTypes: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'],

  traits: [
    'Cognition',
    'Deftness',
    'Knowledge',
    'Mien',
    'Nimbleness',
    'Quickness',
    'Smarts',
    'Spirit',
    'Strength',
    'Vigor',
    'Special',
  ],

  valueType: ['trait', 'aptitude', 'chip'],
};

export default dlcConfig;
