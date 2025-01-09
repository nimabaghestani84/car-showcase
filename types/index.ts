import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  containerStyle?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:"button"|"submit";
  textStyles?:string;
  rightIcon?:string;
  isDisables?:boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}