import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//Declaro la interface del componente. 
export interface MyFavouriteBorderProps{
 bgcolor: string;
 disabled?: boolean; 
 onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavouriteBorder(props: MyFavouriteBorderProps){

 const {bgcolor, disabled, onClick } = props
 return(
    <IconButton
    onClick={onClick}
    disabled={disabled}
    sx={{color: bgcolor}}
    >
    <FavoriteBorderIcon ></FavoriteBorderIcon>
    </IconButton>
 
 )
}
export default MyFavouriteBorder;