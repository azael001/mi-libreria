import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
export interface ComponentPACPProps{
 text: string; 
 txtcolor: string; 
 bgcolor:string; 
 size?: "small" | "medium" | "large";  

 disabled?: boolean; 
 onClick?: MouseEventHandler<HTMLButtonElement>;

}

function ComponentPACP(props: ComponentPACPProps){
 
 const { bgcolor, text, txtcolor, disabled, onClick, size } = props
 return(
 <Button
 type='button'
 onClick={onClick}
 disabled={disabled}
 size={size}
 sx={{backgroundColor: bgcolor, color: txtcolor}}
 >
 {text}
 </Button>
 )
}
export default ComponentPACP;