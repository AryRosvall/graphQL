import React, { ReactElement } from "react";
import { IButtonFormProps } from "../Interfaces/IButtonFormProps";

export function ButtonForm({
  label,
  classname,
  action,
  type = "button",
  children,
}: IButtonFormProps): ReactElement {
  return (
    <div>
      <button type={type} className={classname} onClick={() => action?.()}>
        {children} {label}
      </button>
    </div>
  );
}
