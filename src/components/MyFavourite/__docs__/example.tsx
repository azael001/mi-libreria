import React from "react";
import MyFavourite, { MyFavouriteProps } from "../MyFavourite"; 
function Example(props: MyFavouriteProps){
 return(
    <MyFavourite
    onClick={props.onClick}
    disabled={props.disabled}
    bgcolor={props.bgcolor}
  >
    
  </MyFavourite>
 )
}
export default Example