import {SerializedGas} from "./gamestate.types";
// 각각의 온실가스 측정량은 ppm 단위 입니다.
// 온실 효과 계산에 영향을 주는 요소.
// 1. atmospheric lifetime
// 2. concentration => 변하는 양
// 3. absorption properties => 특성
// 4. vertical distribution
// 5. feedback mechanisms

export abstract class GreenHouseGas {
  abstract name: string;
  abstract concentration: number;
  abstract absorption: number;
  abstract lifetime: number;
  lastChangeRate: number = 0.0;

  public commitment(): number {
    return this.concentration*this.absorption*this.lifetime;
  };

  public serialize(): SerializedGas {
    return {
      "type": this.name,
      "concentration": this.concentration,
      "lastChangeRate": this.lastChangeRate
    }
  }
}

// concentration: 온실가스의 대기 중 농도 단위는 %
// absorption: 온실가스의 흡수율(여기서는 단순화를해서 비율로 표현)
// 온실가스가 얼마나 다양한 종류의 파장대의 적외선을 흡수하는지를 나타냄.
// lifetime: 온실가스의 생존 시간. 단위는 년
// 온실효과 산출식: 농도 * 흡수율 * lifetime
export class Co2 extends GreenHouseGas {
  name: string = "Co2";
  concentration: number = 0.0;
  absorption: number = 3;
  lifetime: number = 300;
  constructor(concentration: number, lastChangeRate?: number) {
    super();
    this.concentration = concentration;
    if (lastChangeRate) this.lastChangeRate = lastChangeRate;
  }
}

export class N2o extends GreenHouseGas {
  name: string = "N2o";
  concentration: number = 0.0;
  absorption: number = 2;
  lifetime: number = 121;
  constructor(concentration: number, lastChangeRate?: number) {
    super();
    this.concentration = concentration;
    if (lastChangeRate) this.lastChangeRate = lastChangeRate;
  }
}

export class Ch4 extends GreenHouseGas {
  name: string = "Ch4";
  concentration: number = 0.0;
  absorption: number = 3;
  lifetime: number = 12;
  constructor(concentration: number, lastChangeRate?: number) {
    super();
    this.concentration = concentration;
    if (lastChangeRate) this.lastChangeRate = lastChangeRate;
  }
}

export class Cfcs extends GreenHouseGas {
  name: string = "Cfcs";
  concentration: number = 0.0;
  absorption: number = 2;
  lifetime: number = 187;
  constructor(concentration: number, lastChangeRate?: number) {
    super();
    this.concentration = concentration;
    if (lastChangeRate) this.lastChangeRate = lastChangeRate;
  }
}

export class H2o extends GreenHouseGas {
  name: string = "H2o";
  concentration: number = 0.0;
  absorption: number = 3;
  lifetime: number = 0.1;
  constructor(concentration: number, lastChangeRate?: number) {
    super();
    this.concentration = concentration;
    if (lastChangeRate) this.lastChangeRate = lastChangeRate;
  }
}
export abstract class GasFactory {
  static createGas(type: string, concentration: number, lastChangeRate?: number): GreenHouseGas {
    switch (type) {
      case "co2":
        return new Co2(concentration, lastChangeRate);
      case "no2":
        return new N2o(concentration, lastChangeRate);
      case "ch4":
        return new Ch4(concentration, lastChangeRate);
      case "cfcs":
        return new Cfcs(concentration, lastChangeRate);
      default:
        return new H2o(concentration, lastChangeRate);
    }
  }

  static deserializeGases(greenHouseGases: SerializedGas[]) {
    return Array
      .from(greenHouseGases)
      .map(serializedGas => (
        this.createGas(serializedGas.type, serializedGas.concentration, serializedGas.lastChangeRate)
      ));
  }
}

export const calculateGreenHouseEffect = (greenHouseGases: GreenHouseGas[]): number => (
  greenHouseGases
    .reduce((greenHouseEffect, greenHouseGas) => (
      greenHouseEffect+greenHouseGas.commitment()
    ) ,0)
);

interface CountryCode {
  Code: string;
  Name: string;
}

// concentration(농도)는 부피당 ppm으로 계산
// 대기중 차지하는 비율로 환산하여 사용
// 이하 2021년까지의 측정량
export const concentrations = {
  "co2": 0.0415,
  "n2o": 0.0000332,
  "ch4": 0.000187,
  "cfcs": 0.0000000385
}

export const defaultGreenHouseGases = [
  new Co2(concentrations["co2"]),
  new N2o(concentrations["n2o"]),
  new Ch4(concentrations["ch4"]),
  new Cfcs(concentrations["cfcs"])
]