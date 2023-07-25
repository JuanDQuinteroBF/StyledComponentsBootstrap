export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    opacity?: 'opacity-10' |
    'opacity-25' |
    'opacity-50' |
    'opacity-75' |
    'opacity-100' ;
    hoverLink?: 'hover'
}

export const Link: React.FC<LinkProps> = ({
    children,
    opacity = '',

}) => {
    return <a className={`link-${opacity}}`} href="">{children}</a>
}