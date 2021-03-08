import React, { useContext, useState } from "react";
import AppContext, { TypeContext } from "../context/context";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";
import Icon from "./Icon";
import { IDessert } from "../Interfaces/IDesserts";

/* const addReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DESSERT":
      return {
        ...state,
        desserts: [...state.dessert, action.payload]
      };
    default:
      return state;
  }
}; */

export function Form() {
  /*   const [desserts, dispatch] = useReducer(addReducer, initialState);

  const handleClick = dessert => {
    dispatch({ type: "ADD_DESSERT", payload: dessert });
  }; */

  const { addToDesserts } = (useContext(AppContext) as unknown) as TypeContext;
  const [dessert, setDessert] = useState("");
  const [nutritionData, setNutritionData] = useState({});

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    //TODO Quitar any y agregar guardado en backend
    const submitedNutrition: any = { ...nutritionData };
    const submitedDessert: IDessert = {
      dessert,
      nutritionInfo: submitedNutrition,
    };
    addToDesserts(submitedDessert);
  };

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const name = target.name.toLowerCase();

    name === "dessert name"
      ? setDessert(value)
      : setNutritionData({ ...nutritionData, [name]: value });
  };
  return (
    <div className="sans-serif w-90  black-80 mw6 center relative cover bg-top mt2">
      <div className="relative pa4 pa5-m">
        <div className="tracked  mb4 pv2 tc bg-gold">
          <Icon type="alert" /> Please fill the details before you submit
        </div>
        <form
          id="addDessert"
          onSubmit={(event: React.SyntheticEvent) => handleClick(event)}
        >
          <InputForm
            name="Dessert name"
            type="text"
            required
            handleChange={handleChange}
          />
          <InputForm
            name="Calories"
            type="text"
            required
            handleChange={handleChange}
          />
          <InputForm
            name="Fat"
            type="text"
            required
            handleChange={handleChange}
          />
          <InputForm
            name="Carbs"
            type="text"
            required
            handleChange={handleChange}
          />
          <InputForm
            name="Protein"
            type="text"
            required
            handleChange={handleChange}
          />
          <ButtonForm
            label="Submit"
            type="submit"
            classname="input-reset w-100 light-gray br2 tracked pv2 ph2 pointer bg-dark-green hover-bg-blue bn"
          >
            <Icon type="check" />
          </ButtonForm>
        </form>
      </div>
    </div>
  );
}
