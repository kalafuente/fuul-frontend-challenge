import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'white', color: 'black', padding: '1rem', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Fuul Frontend Code Challenge
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;