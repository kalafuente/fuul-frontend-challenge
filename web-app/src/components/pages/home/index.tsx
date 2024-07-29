import { useEffect, useState } from 'react';
import { Fuul } from 'fuul-sdk';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Container } from '@mui/material';
import Footer from '../../layout/Footer';
import { NFTList } from './NFTList/index';
import { ProjectInfo } from '@/types/project';
import { NFT } from '@/types/nfts';
import { ReferralModal } from './ReferralModal/index';
import Header from '../../layout/Header';
import { StyledBox, ProjectTitle, ProjectDescription, CenteredText, InfoContainer, InfoText } from './HomeStyles';
type GroupedNFTs = {
  [key: string]: NFT[];
};
const fuul = new Fuul();
const apiKey = 'project-1';

export const Home = () => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | null>(null);
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [account, setAccount] = useState<string | null>(null);
  const [isClientSide, setIsClientSide] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClientSide(true);
    }
    const initProject = async () => {
      try {
        const info = await fuul.init(apiKey);
        setProjectInfo(info);
        const NFTs = await fuul.getNFTs(apiKey)
        if (NFTs) {
          setNfts(NFTs);
          setError(null)
        }
      } catch (e) {
        setError('Failed to fetch project information')
      }
    };
    initProject();
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

  const groupNFTsByCategory = (nfts: NFT[]) => {
    return nfts.reduce((grouped: GroupedNFTs, nft) => {
      const category = nft.category || 'Uncategorized';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(nft);
      return grouped;
    }, {});
  };

  const groupedNfts = groupNFTsByCategory(nfts);
  return (
    <div className="wrapper">
      <Header />
      {open && projectInfo && account && <ReferralModal
        handleClose={handleClose}
        open={open}
        isClientSide={isClientSide}
        account={account}
        projectInfo={projectInfo}
      />}
      <Container component="main" className="main" maxWidth="lg">
        <StyledBox my={4}>
          {projectInfo ? (
            <>
              <ProjectTitle variant="h1">
                {projectInfo.name}
              </ProjectTitle>
              {!account && (
                <>
                  <ProjectDescription>
                    {projectInfo.description}
                  </ProjectDescription>
                  <Button variant="contained" color="primary" onClick={connectWallet}>
                    Connect Wallet
                  </Button>
                </>
              )}
            </>
          ) : (
            <CenteredText>
              {error ? <p>{error}</p> : <CircularProgress />}
            </CenteredText>
          )}
          {account && (
            <InfoContainer>
              <InfoText>
                Browse the collection and choose up to 2 NFTs per category to mint. Limited editions are available in various categories.
              </InfoText>
              <NFTList groupedNfts={groupedNfts} account={account} callback={handleOpen} fuul={fuul} />
            </InfoContainer>
          )}
        </StyledBox>
      </Container>
      <Footer />
    </div>
  );
};
