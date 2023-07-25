import { concatArraysToString } from "../utils/concatArraysToString";
import { objectToArrayString } from "../utils/objectToArrayString";
import { MarginPadding } from "../interfaces/Margin&Padding";
import { BaseElement } from "../interfaces/HTMLAtributtes";


export interface CardProps extends BaseElement<HTMLDivElement>{
  }


  export const Card: React.FC<CardProps> = ({
    m,
    mx,
    my,
    p,
    children,
    ...rest
  }) => {
  
   const newClass = concatArraysToString(['card'], objectToArrayString<MarginPadding>({m, mx, my, p}) )


    
    return <div className={`${newClass}`} {...rest}>
                {children}
            </div>;
  };