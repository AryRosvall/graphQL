import React, { ReactElement } from "react";

// @ts-ignore
export function ItemList({ item, selectItem }): ReactElement {
  console.log("item", item);
  return (
    <tr className="stripe-dark">
      <td className="pa3">
        <input
          className="mr2"
          type="checkbox"
          id={item.id}
          value={item.dessert}
          onClick={(event) => selectItem(event)}
        />
      </td>
      <td className="pa3">{item.dessert}</td>
      <td className="pa3">{item.nutritionInfo.calories}</td>
      <td className="pa3">{item.nutritionInfo.carbs}</td>
      <td className="pa3">{item.nutritionInfo.fat}</td>
      <td className="pa3">{item.nutritionInfo.protein}</td>
    </tr>
  );
}
