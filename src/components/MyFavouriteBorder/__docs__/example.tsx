import React from "react";
import MyFavouriteBorder, { MyFavouriteBorderProps } from "../MyFavouriteBorder"; 
function Example(props: MyFavouriteBorderProps){
 return(
    <MyFavouriteBorder
    onClick={props.onClick}
    disabled={props.disabled}
    bgcolor={props.bgcolor}
  >
    
  </MyFavouriteBorder>
 )
}
export default Example