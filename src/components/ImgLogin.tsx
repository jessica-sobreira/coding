import { Box } from '@mui/material';

export default function ImgLogin() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100vh',
        paddingLeft: '0vw', 
      }}
    >
      <img
        src="https://wallpaperaccess.com/full/5277964.jpg"
        alt="login"
        style={{
          width: '50%', 
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center', 
        }}
      />
    </Box>
  );
}
