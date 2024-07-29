import styled from 'styled-components';
import { Box, Typography, Button, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectTitle = styled(Typography)`
  font-size: 40px;
  color: #0b0a33;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ProjectDescription = styled(Typography)`
  font-size: 20px;
  color: #7a7d9c;
  margin-bottom: 25px;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const InfoText = styled(Typography)`
  font-size: 20px;
  color: #7a7d9c;
  margin-top: 5px;
`;

export const CenteredText = styled.div`
  text-align: center;
`;