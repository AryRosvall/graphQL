import React, { ReactElement } from "react";

import { List } from "../components/List";
import { Form } from "../components/Form";

export function Nutrition(): ReactElement {
  const title = "Nutrition List";
  const headers = ["", "Dessert", "Calories", "Fat", "Carbs", "Protein"];

  return (
    <div>
      <Form />
      <List title={title} headers={headers} />
    </div>
  );
}
