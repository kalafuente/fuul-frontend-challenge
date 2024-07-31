import { useEffect, useState } from 'react';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Container } from '@mui/material';
import Footer from '../../layout/Footer';
import { NFTList } from './NFTList/index';
import { ProjectInfo } from '@/types/project';
import { GroupedNFTs, NFT } from '@/types/nfts';
import { ReferralModal } from './ReferralModal/index';
import Header from '../../layout/Header';
import { StyledBox, ProjectTitle, ProjectDescription, CenteredText, InfoContainer, InfoText } from './HomeStyles';

type HomeProps = {
  initialProjectInfo: ProjectInfo,
  initialNfts: GroupedNFTs,
  error: string
}

export const Home = (props: HomeProps) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isClientSide, setIsClientSide] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClientSide(true);
    }
  }, []);

  function handleAccounts(accounts: string[] | undefined) {
    const account = accounts && accounts[0] ? accounts[0] : null;
    setAccount(account);
  }

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (Array.isArray(accounts)) {
          handleAccounts(accounts)
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div className="wrapper">
      <Header />
      {open && props.initialProjectInfo && account && <ReferralModal
        handleClose={handleClose}
        open={open}
        isClientSide={isClientSide}
        account={account}
        projectInfo={props.initialProjectInfo}
      />}
      <Container component="main" className="main" maxWidth="lg">
        <StyledBox my={4}>
          {props.initialProjectInfo ? (
            <>
              <ProjectTitle variant="h1">
                {props.initialProjectInfo.name}
              </ProjectTitle>
              {!account && (
                <>
                  <ProjectDescription>
                    {props.initialProjectInfo.description}
                  </ProjectDescription>
                  <Button variant="contained" color="primary" onClick={connectWallet}>
                    Connect Wallet
                  </Button>
                </>
              )}
            </>
          ) : (
            <CenteredText>
              {props.error ? <p>{props.error}</p> : <CircularProgress />}
            </CenteredText>
          )}
          {account && (
            <InfoContainer>
              <InfoText>
                Browse the collection and choose up to 2 NFTs per category to mint. Limited editions are available in various categories.
              </InfoText>
              <NFTList groupedNfts={props.initialNfts} account={account} callback={handleOpen} />
            </InfoContainer>
          )}
        </StyledBox>
      </Container>
      <Footer />
    </div>
  );
};
