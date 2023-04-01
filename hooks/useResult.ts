import {get} from "firebase/database";
import {useState} from "react";
import {GameState} from "../models/gamestate.types";
import {calculateGreenHouseEffect, defaultGreenHouseGases, GasFactory} from "../models/greenhousegas";
import {gameStateRef} from "./utils/dbRefs";

export const useResult = () => {
  const [isDefeat, setIsDefeat] = useState(false);
  const [gasDifference, setGasDifference] = useState(0);
  get(gameStateRef()).then((snapshot) => {
    if (!snapshot.exists()) return;
    const gameState = snapshot.val() as GameState;
    if (!gameState.greenHouseGases) return;
    const defaultEffect = calculateGreenHouseEffect(defaultGreenHouseGases);
    const resultEffect = calculateGreenHouseEffect(GasFactory.deserializeGases(gameState.greenHouseGases));
    const result = resultEffect < defaultEffect ? false : true;
    setIsDefeat(result);
    setGasDifference((resultEffect - defaultEffect)/defaultEffect);
  })
  return {isDefeat, gasDifference};
}