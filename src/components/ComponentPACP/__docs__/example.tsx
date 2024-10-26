import React from "react";
import ComponentPACP, { ComponentPACPProps } from "../ComponentPACP"; 

function Example(props: ComponentPACPProps) {
  return (
    <ComponentPACP
      text={props.text}
      bgcolor={props.bgcolor}
      txtcolor={props.txtcolor}
      height={props.height} 
      width={props.width}
      icon={props.icon}
      iconColor={props.iconColor}
      
    />
  );
}

export default Example;