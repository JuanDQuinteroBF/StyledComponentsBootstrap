import { BaseElement } from "../interfaces/HTMLAtributtes";
import { MarginPadding } from "../interfaces/Margin&Padding";
import { concatArraysToString } from "../utils/concatArraysToString";
import { objectToArrayString } from "../utils/objectToArrayString";

export interface ButtonProps extends BaseElement<HTMLButtonElement>{
    color?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'info'
      | 'light'
      | 'dark'
      | 'link';
    variant?: 'outlined' | 'filled';
    size?: 'lg' | 'sm';
    disabledBtn?: 'disabled' | ''
  }
  
  export const Button: React.FC<ButtonProps> = ({
    m,
    mx,
    my,
    p,
    className = '',
    color = 'primary',
    size = 'lg' ,
    disabledBtn = '',
    ...rest
  }) => {
    const newClass = concatArraysToString(['btn'], objectToArrayString<MarginPadding>({m, mx, my, p}) )

    return <button className={`${newClass}${className} btn-${color} btn-${size} ${disabledBtn} `}  {...rest} />;
  };