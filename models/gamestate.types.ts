export interface GameState {
  "playtime": number;
  "greenHouseGases": SerializedGas[];
  "items": Items;
  "phase": number;
  "itemViewState": string;
}

export type SerializedGas = {
  "type": string,
  "concentration": number,
  "lastChangeRate": number,
}

export interface ActivationState {
  [index: string]: boolean;
}

export interface Items {
  "personal": ActivationState;
  "enterprise": ActivationState;
  "country": ActivationState;
}

export type GreenHouseGasType = "co2" | "n2o" | "ch4" | "cfcs";

export type ItemState = {
  "person": number[],
  "enterprise": number[],
  "country": number[]
}