import {GameState, ItemState} from "../models/gamestate.types";
import {useEffect, useState} from "react";
import {ItemDataInterface, ItemSelectInterface} from "../models/items.interface";
import {updateConcentration} from "./useGreenHouseGases";
import {get, onValue, update} from "firebase/database";
import PERSON_ITEMS from "../data/items/personal_item";
import COUNTRY_ITEMS from "../data/items/country_items";
import ENTERPRISE_ITEMS from "../data/items/enterprise_items";
import {GasFactory} from "../models/greenhousegas";
import {gameStateRef, itemViewStateRef, phaseRef} from "./utils/dbRefs";
import {defaultGameState, defaultItemViewState} from "../data/defaultGameState";

export const useActionItems = () => {
  const data = [...PERSON_ITEMS, ...COUNTRY_ITEMS, ...ENTERPRISE_ITEMS];
  const [lastSelection, setLastSelection] = useState({} as ItemDataInterface);
  const [currItem, setCurrItem] = useState({} as ItemDataInterface);
  const [select, setSelect] = useState<ItemState>(defaultItemViewState)
  const [phase, setPhase] = useState(0);

  // 가장 최근 사용한(선택)한 아이템
  const getLastSelection = (item: ItemDataInterface) => {setLastSelection(item)}
  // 현재까지 선택하여 사용한 아이템 정보를 업데이트한다.
  const getItemSelect = (new_select: ItemSelectInterface) => {setSelect(new_select)}
  // 현재 선택된 아이템
  const getCurrItem = (item: ItemDataInterface) => {setCurrItem(item)}

  useEffect(() => {
    onValue(itemViewStateRef(), (snapshot) => {
      if (!snapshot.exists()) return;
      const itemViewState = snapshot.val();
      if (itemViewState) {setSelect(JSON.parse(itemViewState))}
    })
    onValue(phaseRef(), (snapshot) => {
      if (!snapshot.exists()) return;
      const savedPhase = snapshot.val();
      setPhase(savedPhase);
    })
  }, []);

  useEffect(() => {
    if (Object.keys(lastSelection).length === 0) return;
    get(gameStateRef())
      .then((snapshot) => {
        const newGameState: {[index: string]: any} = defaultGameState;
        if (snapshot.exists()) {
          const savedGameState = snapshot.val() as GameState;
          const {greenHouseGases, playtime, phase} = savedGameState;
          const newGreenHouseGases = updateConcentration(lastSelection.greenGasType, lastSelection.concentration, GasFactory.deserializeGases(greenHouseGases));
          newGameState["greenHouseGases"] = newGreenHouseGases.map(greenHouseGas => greenHouseGas.serialize());
          if (phase === 2) {
            newGameState["playtime"] = playtime + 1;
            newGameState["phase"] = 0;
          }
          else {
            newGameState["phase"] = phase + 1;
          }
        }
        newGameState["itemViewState"] = JSON.stringify(select);
        update(gameStateRef(), newGameState);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lastSelection]);


  return {lastSelection, setLastSelection, select, getItemSelect, currItem, getCurrItem, getLastSelection, data, phase}
}