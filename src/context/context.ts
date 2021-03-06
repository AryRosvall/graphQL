import { createContext } from "react";
import { IDessert } from "../Interfaces/IDesserts";

export type TypeContext = {
  addToDesserts: (dessert: IDessert) => void;
  removeFromDesserts: (indexList: number) => void;
  sortDesserts: (desserts:IDessert[]) => void;
  state: any;
};

const AppContext = createContext<TypeContext | null>(null);

export default AppContext;
