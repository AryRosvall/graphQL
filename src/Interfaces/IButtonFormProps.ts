export interface IButtonFormProps {
    label: string;
    classname?: string;
    action?: () => null;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
  }