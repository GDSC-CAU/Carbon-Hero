import {GreenHouseGasType} from "./gamestate.types";

export interface ItemDataInterface {
    name: string;
    img: string;
    story: string;
    tier: number;
    valid_year: number;
    img_tag: string;
    group: number;
    type: string;
    greenGasType: GreenHouseGasType;
	  concentration: number;
};

export interface ItemSelectInterface {
    [index: string]: number[]
    person: number[];
    enterprise: number[];
    country: number[];
}

