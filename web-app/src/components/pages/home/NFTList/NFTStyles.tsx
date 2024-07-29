import styled from 'styled-components';
import { Card, CardContent, Typography, Button } from '@mui/material';

export const CategoryTitle = styled(Typography)`
  font-size: 20px;
  color: #0b0a33;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const NftListContainer = styled.div`
  background: #f3f5ff;
  border-radius: 10px;
  padding: 20px;
`;

export const NftItemContainer = styled.div`
  display: flex;
  overflow: auto;
  gap: 15px;
  padding: 10px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 5px;
`;

export const StyledCardContent = styled(CardContent)`
  width: 200px;
  height: 200px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const SuccessMessage = styled.p`
  color: #596aff;
  margin-bottom: 20px;
`;
