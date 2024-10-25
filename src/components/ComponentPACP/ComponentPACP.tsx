import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ComponentPACPProps {
  text: string;
  txtcolor: string;
  bgcolor: string;
  height?: string | number;
  width?: string | number;
  disabled?: boolean;
}

function ComponentPACP(props: ComponentPACPProps) {
  const { bgcolor, text, txtcolor, height, width, disabled } = props;

  return (
    <Card
      sx={{
        backgroundColor: bgcolor,
        maxWidth: width || 300,
        height: height || 'auto',
        padding: 2,
        boxShadow: 3,
      }}
      disabled={disabled}
    >
      <CardContent>
        <Typography variant="body1" sx={{ color: txtcolor }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ComponentPACP;