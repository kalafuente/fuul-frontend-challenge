import styled from 'styled-components';
import { Box, Typography, Modal } from '@mui/material';

export const StyledModal = styled(Modal)`
  box-shadow: 24px;
  padding: 4px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(Box)`
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled(Typography)`
  font-size: 30px;
`;

export const ModalDescription = styled.div`
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 20px;
`;

export const ShareLinkContainer = styled.div`
  padding: 5px;
  display: flex;
  color: #4457ff;
  background-color: #f3f5ff;
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ProjectContainer = styled.div`
  padding: 15px;
  background-color: #f3f5ff;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;