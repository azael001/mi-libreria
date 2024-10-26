import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import FavoriteIcon from '@mui/icons-material/Favorite'

export interface ComponentPACPProps {
  text: string;
  txtcolor: string;
  bgcolor: string;
  height?: string | number;
  width?: string | number;        
  icon?: string;                
  iconColor?: string;
 
}

function ComponentPACP(props: ComponentPACPProps) {
  const { bgcolor, text, txtcolor, height, width,icon,iconColor } = props;

  return (
    <Card
      sx={{
        backgroundColor: bgcolor,
        maxWidth: width || 300,
        height: height || 'auto',
        padding: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
      <Typography variant="body1" sx={{ color: txtcolor }}>
          {text}
        </Typography>
        {icon && (
          <Icon sx={{ color: iconColor, fontSize: 40, marginBottom: 1 }}>
            {icon === 'favorite' && <FavoriteIcon></FavoriteIcon>}
          </Icon>
        )}
       
      </CardContent>
    </Card>
  );
}

export default ComponentPACP;