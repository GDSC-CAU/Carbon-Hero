import {ActivationState, GameState, ItemState} from "../models/gamestate.types";
import {defaultGreenHouseGases} from "../models/greenhousegas";

export const itemActivationPersonal: ActivationState = {
  'Riding public transportation': false,
  'Recycling trash': false,
  'Use of electric vehicles': false,
  'Reduced travel demand': false,
  'Reduce the use of disposable products': false,
  'By foot or bicycle': false,
  'Use items produced at close range': false,
  'Use of low-carbon footprint products': false,
  'Refrain from excessive cooling or heating': false,
  'Saving energy': false,
  'Reduce unnecessary water use': false,
  'Reduce gas use': false
}

export const itemActivationEnterprise: ActivationState = {
  'Education and Awareness': false,
  'Waste Management': false,
  'New product development': false,
  'Use of recycled materials': false,
  'Increase the use of renewable energy': false,
  'Improved fuel efficiency with advanced design, materials, and technology': false,
  'Streamlining the distribution process': false,
  'Reduced use of fossil fuels': false,
  'Fuel conversion': false,
  'Use of methane gas reducer': false,
  'Reuse of greenhouse gas': false,
  'Biogas production': false
}

export const itemActivationCountry: ActivationState = {
  'International Methane Gas Reduction Program under the United Nations': false,
  'Carbon emission rights system': false,
  'Sustainable Development Goals': false,
  'UN Environment Program': false,
  'Land and crop management': false,
  'International Resource Panel': false,
  'United Nations Framework Convention on Climate Change': false,
  'Livestock or manure management': false,
  'Sustainable Consumption and Production': false,
  'Environmental Justice': false,
  'Change of land use': false,
  'Marine Waste Management': false
}

export const defaultItemViewState: ItemState = {
  'person': [1, 1, 1],
  'enterprise': [1, 1, 1],
  'country': [1, 1, 1],
}

export const defaultGameState: GameState = {
  "playtime": 2023,
  "greenHouseGases": defaultGreenHouseGases.map(gas => gas.serialize()),
  "items": {
    "personal": itemActivationPersonal,
    "enterprise": itemActivationEnterprise,
    "country": itemActivationCountry
  },
  "phase": 1,
  "itemViewState": JSON.stringify(defaultItemViewState)
}