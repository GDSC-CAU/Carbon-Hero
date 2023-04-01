import {onValue} from "firebase/database";
import {useEffect, useMemo, useState} from "react";
import {calculateGreenHouseEffect, defaultGreenHouseGases, GasFactory, GreenHouseGas} from "../models/greenhousegas";
import {GreenHouseGasType} from "../models/gamestate.types";
import {greenHouseGasesRef, playTimeRef} from "./utils/dbRefs";

const greenHouseGasNames = ["co2", "n2o", "ch4", "cfcs"];
export const greenHouseGasIndex:{[index: string]: number} = {
  "co2": 0,
  "n2o": 1,
  "ch4": 2,
  "cfcs": 3
}
export const useGreenHouseGases = () => {
  const [greenHouseGases, setGreenHouseGases] = useState(defaultGreenHouseGases);
  const greenHouseEffect = useMemo(() => calculateGreenHouseEffect(greenHouseGases), [greenHouseGases]);
  const greenHouseEffectChangeRate = useMemo(() => {
    const newGHE = calculateGreenHouseEffect(greenHouseGases);
    const defaultGHE = calculateGreenHouseEffect(defaultGreenHouseGases);
    return (defaultGHE - newGHE) / defaultGHE;
  }, [greenHouseGases]);

  useEffect(() => {
    onValue(greenHouseGasesRef(), (snapshot) => {
      if (!snapshot.exists()) return;
      const greenHouseGases = snapshot.val();
      setGreenHouseGases(GasFactory.deserializeGases(greenHouseGases));
    })
    onValue(playTimeRef(), (snapshot) => {
      if (!snapshot.exists()) return;
      setGreenHouseGases((prevGreenHouseGases) => {
        return greenHouseGasNames.map(gasName => {
          return GasFactory.createGas(
            gasName,
            1.005 * prevGreenHouseGases[greenHouseGasIndex[gasName]].concentration,
            prevGreenHouseGases[greenHouseGasIndex[gasName]].lastChangeRate
          );
        })
      })
    })
  }, []);

  return {greenHouseGases, greenHouseEffect, greenHouseEffectChangeRate};
}

export const updateConcentration = (greenHouseGasType: GreenHouseGasType, concentrationChange: number, greenHouseGases: GreenHouseGas[]) => {
  const index = greenHouseGasIndex[greenHouseGasType];
  const oldConcentration: number = greenHouseGases[index].concentration;
  const newConcentration: number = oldConcentration + oldConcentration * (concentrationChange / 100);
  const newGreenHouseGas: GreenHouseGas = GasFactory.createGas(greenHouseGasType, newConcentration, concentrationChange);
  const newGreenHouseGases: GreenHouseGas[] = [...greenHouseGases];
  newGreenHouseGases[index] = newGreenHouseGas;
  return newGreenHouseGases;
}