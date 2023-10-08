import { dlcConfig } from '../config.mjs';
import * as DLCFields from '../dlc-fields.mjs';

export class BaseActorDataModel extends foundry.abstract.DataModel {
  static makeAptitudes() {
    let aptitudes = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(dlcConfig.aptitudes)) {
      const ranks = Number.isInteger(value.default) > 0 ? value.default : 0;
      if (value.concentrations.length > 0) {
        aptitudes = {
          ...aptitudes,
          ...DLCFields.dlcConcentrationAptitude(
            key,
            value.trait,
            ranks,
            ...value.concentrations
          ),
        };
      } else if (value.trait === 'Special') {
        aptitudes = {
          ...aptitudes,
          ...DLCFields.dlcVariableAptitude(key, ranks),
        };
      } else {
        aptitudes = {
          ...aptitudes,
          ...DLCFields.dlcAptitude(key, value.trait, ranks),
        };
      }
    }
    return aptitudes;
  }

  // makes the datamodel fragment to be incorporated into character models. Can be added to NPC models
  // with ...makeChips(false). This will add the basic data
  static makeChips(isActive = true) {
    return {
      ...DLCFields.dlcBoolean('ActiveForChips', isActive), // Does this character interact with the chips and bounty system

      ...(!isActive
        ? {}
        : {
            ...DLCFields.dlcChip('white'),
            ...DLCFields.dlcChip('red'),
            ...DLCFields.dlcChip('blue'),
            ...DLCFields.dlcChip('green'),
            ...DLCFields.dlcChip('greenTemp'),

            ...DLCFields.dlcNumberNoMax('careerBounty', 0, 0),
          }),
    };
  }

  static makeTraits() {
    return {
      ...DLCFields.dlcTrait(dlcConfig.traits[0]),
      ...DLCFields.dlcTrait(dlcConfig.traits[1]),
      ...DLCFields.dlcTrait(dlcConfig.traits[2]),
      ...DLCFields.dlcTrait(dlcConfig.traits[3]),
      ...DLCFields.dlcTrait(dlcConfig.traits[4]),

      ...DLCFields.dlcTrait(dlcConfig.traits[5]),
      ...DLCFields.dlcTrait(dlcConfig.traits[6]),
      ...DLCFields.dlcTrait(dlcConfig.traits[7]),
      ...DLCFields.dlcTrait(dlcConfig.traits[8]),
      ...DLCFields.dlcTrait(dlcConfig.traits[9]),
    };
  }

  static makeWoundLocations() {
    return {
      ...DLCFields.dlcNumber('head', 0, 0, 5),
      ...DLCFields.dlcNumber('guts', 0, 0, 5),
      ...DLCFields.dlcNumber('left arm', 0, 0, 5),
      ...DLCFields.dlcNumber('right arm', 0, 0, 5),
      ...DLCFields.dlcNumber('left leg', 0, 0, 5),
      ...DLCFields.dlcNumber('right leg', 0, 0, 5),

      // max Wind and max strain are derived attributes
      ...DLCFields.dlcNumberNoLimit('currentWind', 0),
      ...DLCFields.dlcNumberNoLimit('currentStrain', 0),
    };
  }
}
