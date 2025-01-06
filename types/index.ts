import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  containerStyle?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
