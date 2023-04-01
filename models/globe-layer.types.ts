import {COLOR} from "./points-data.types";
import {MeshPhongMaterial} from "three";
import {GlobeContainerTypes} from "./globe-container.types";

export interface Coordinate {
  lat: number;
  lng: number;
}
export interface GlobeClickArgs {
  coordinate: Coordinate;
  event: MouseEvent;
}

export type GlobeLayerTypes = {
  globeImageUrl: string;
  bumpImageUrl: string;
  showGlobe?: boolean;
  showGraticules?: boolean;
  showAtmosphere?: boolean;
  atmosphereColor?: COLOR;
  atmosphereAltitude?: string;
  globeMaterial?: MeshPhongMaterial;
  onGlobeReady?: (args: any) => any;
  onGlobeClick?: (GlobeClickArgs: GlobeClickArgs) => any;
  onGlobeRightClick?: (globeRightClickArgs: GlobeClickArgs) => any;
}

export interface GlobeData {
  containerData: GlobeContainerTypes;
  globeLayerData: GlobeLayerTypes;
}