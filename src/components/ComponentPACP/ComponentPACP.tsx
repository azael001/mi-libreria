import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

export interface ComponentPACPProps{
 text: string; 
 txtcolor: string; 
 bgcolor:string; 
 size?: "small" | "medium" | "large"; 
 hoverTxtcolor?: string;
 hoverBgcolor?: string;
 bordercolor?: string;
 borderwidth?: string;

 disabled?: boolean;
 onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ComponentPACP(props: ComponentPACPProps){
 
 const { bgcolor, text, txtcolor, disabled, onClick, size ,hoverTxtcolor,hoverBgcolor,bordercolor,borderwidth} = props
 return(
 <Button
 type='button'
 onClick={onClick}
 disabled={disabled}
 size={size}
 sx={{
    backgroundColor: bgcolor,
    color: txtcolor,
    '&:hover': {
      backgroundColor: hoverBgcolor || bgcolor,
      color: hoverTxtcolor || txtcolor,border: `${borderwidth || '1px'} solid ${bordercolor || 'transparent'}`
    },
  }}>
 {text}
 </Button>
 )
}
export default ComponentPACP;