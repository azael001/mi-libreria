import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps{
 bgcolor: string;
 disabled?: boolean; 
 onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavourite(props: MyFavouriteProps){

 const {bgcolor, disabled, onClick } = props
 return(
    <IconButton
    onClick={onClick}
    disabled={disabled}
    sx={{color: bgcolor}}
    >
    <FavoriteIcon></FavoriteIcon>
    </IconButton>
 
 )
}
export default MyFavourite;