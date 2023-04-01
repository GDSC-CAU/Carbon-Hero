import {calculateGreenHouseEffect, GreenHouseGas} from "./greenhousegas";

export type PolygonLabelFn = () => HTMLElement;
export type PolygonCapColorFn = () => string;
export type PolygonSideColorFn = () => string;

export interface PolygonData {
  polygonsData: Object[];
  // @ts-ignore
  polygonLabel: ObjAccessor | undefined;
  polygonAltitude?: number;
  polygonCapColor?: string | PolygonCapColorFn;
  polygonSideColor?: string | PolygonSideColorFn;
}

export interface CountryData {
  type: string;
  properties: CountryProperties;
  bbox: number[];
  geometry: GeometryData;
}

export interface CountryProperties {
  ISO: string;
  // Add what you want
  greenHouseEffect: number;
  greenHouseGases: GreenHouseGas[];
  color: string;
  name: string;
}

export interface GeometryData {
  type: string;
  coordinates: number[][];
}

export enum GreenHouseGasLevel {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
}

export const indicatorColors = [
  "#37ff00",
  "#bbff00",
  "#e1ff00",
  "#e1ff00",
  "#ffff00",
  "#ffbf00",
  "#ff9900",
  "#ff6e00",
  "#ff5000",
  "#ff0000",
]

const zeroToTen = new Array(10).fill(0).map((num, index) => index);
export const colorMap = new Map(zeroToTen.map((eachNum,index) => [eachNum, indicatorColors[index]]));
export const selectPolygonCapColor = (currentGreenHouseGases?: GreenHouseGas[]): string => {
  if (!currentGreenHouseGases) return indicatorColors[4];
  const greenHouseEffect: number = calculateGreenHouseEffect(currentGreenHouseGases);
  const level = Math.floor(Math.round(greenHouseEffect / 10));
  return colorMap.get(level) || indicatorColors[4];
}

export interface FeatureCollection {
  features: GeoNationProperty[];
}
export interface GeoNationProperty {
  properties: any;
}