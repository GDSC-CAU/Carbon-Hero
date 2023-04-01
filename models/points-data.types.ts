export type COLOR = {
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
  WHITE: 'white'
}

export interface PointData {
  lat?: number;
  lng?: number;
  size?: number;
  color?: COLOR;
}