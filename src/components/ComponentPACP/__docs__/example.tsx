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
 onClick={props.onClick}
 />
 )
}
export default Example