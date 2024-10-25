import React from "react";

import MyButton, { MyButtonProps } from "../MyButton"; 

function Example(props: MyButtonProps){
 return(
 <MyButton
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