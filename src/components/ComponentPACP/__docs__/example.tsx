import React from "react";

import ComponentPACP, { ComponentPACPProps } from "../ComponentPACP"; 

function Example(props: ComponentPACPProps){
 return(
 <ComponentPACP
 text={props.text}
 bgcolor={props.bgcolor}
 txtcolor={props.txtcolor}
 disabled={props.disabled}
 size={props.size}
 bordercolor={props.bordercolor}
 borderwidth={props.borderwidth}
 hoverTxtcolor={props.hoverTxtcolor}
 hoverBgcolor={props.hoverBgcolor}
 onClick={props.onClick}
 />
 )
}
export default Example