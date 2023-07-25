import { BaseElement } from "../interfaces/HTMLAtributtes"

interface DivProps extends BaseElement<HTMLDivElement> {

}

export const Div: React.FC<DivProps> = ({children}) => {
    return <div>
        {children}
    </div>
}

// Hacer el resto, que es el resto? card, button hacer todas las transformaciones en los que tenemos 
// enriquecer el componente, de bootstrap en material ui  