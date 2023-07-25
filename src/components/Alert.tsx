export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>{
    color?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'info'
      | 'light'
      | 'dark'
      | 'link';
    link?: boolean
  }
  
  export const Alert: React.FC<AlertProps> = ({
    children,
    className = '',
    link= true,
    style= {padding: '2rem',
            width: '50%'} ,
    color= 'primary',
    ...rest
  }) => {
    return <div className={`alert ${className} alert-${color}`} style={style} {...rest}>{children}
    { link && (<a className={`alert-link`} href="#">A vr</a>)}
    </div>;
  };