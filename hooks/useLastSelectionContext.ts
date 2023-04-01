import {createContext} from "react";
import {ItemDataInterface} from "../models/items.interface";

;
export const ItemContext =  createContext({});

interface ContextProps {
    item: ItemDataInterface;
    setItem: (arg1?: any) => any;
  }

// ItemContext 객체 생성
// export const ItemContext = createContext<ContextProps>({
//     item: {} as ItemDataInterface,		
//     setItem: () => {		
//       return null;
//     },
//   });

// export const ItemContext =  createContext(null);