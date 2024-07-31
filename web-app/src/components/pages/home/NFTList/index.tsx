import { Card, CardContent, Typography, Button, Grid, Snackbar } from '@mui/material';
import { NFT } from '../../../../types/nfts'
import Web3 from 'web3';
import { Fuul } from 'fuul-sdk';
import { useState } from 'react';
import { CategoryTitle, NftItemContainer, NftListContainer, StyledCard, StyledCardContent, SuccessMessage } from './NFTStyles';
const fuul = new Fuul();

type NFTListProps = {
  groupedNfts: { [key: string]: NFT[] };
  account: string;
  callback: () => void;
}

const mintNFT = async (nftId: string, account: string, category: string, callback: () => void, setError: (error: boolean) => void,
  setMintedNfts: any) => {
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      const web3 = new Web3(window.ethereum);
      const message = `Minting NFT: ${nftId}`;
      await web3.eth.personal.sign(message, account, '');
      const result = fuul.mintNFT(account, nftId, category);
      if (result === 'SUCCESS') {
        callback();
        setMintedNfts((prev: Set<string>) => new Set(prev).add(nftId));
      }
      if (result === 'MAXIMUM_EXCEEDED') {
        setError(true)
      }
    } catch (error) {
      console.error('Error signing message:', error);
    }
  } else {
    alert('Please connect to a wallet!');
  }
};

export const NFTList = (props: NFTListProps) => {
  const [error, setError] = useState(false);
  const [mintedNfts, setMintedNfts] = useState(new Set());

  return (<>
    <Snackbar
      open={error}
      autoHideDuration={6000}
      onClose={() => setError(false)}
      message="You cannot mint more than 2 NFTs from the same category"
    />
    {Object.keys(props.groupedNfts).map((category) => (
      <div key={category}>
        <CategoryTitle variant="h4">
          {category}
        </CategoryTitle>
        <NftListContainer>
          <NftItemContainer className='custom-scrollbar'>
            {props.groupedNfts[category].map((nft) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={nft.id}>
                <StyledCard>
                  <StyledCardContent>
                    <Typography variant="h5" component="div" style={{ textAlign: 'center', margin: '20px' }}>
                      {nft.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                      Editions: {mintedNfts.has(nft.id) ? nft.editions - 1 : nft.editions}
                    </Typography>
                    {mintedNfts.has(nft.id) ? <SuccessMessage>Successfully minted</SuccessMessage> :
                      <Button
                        sx={{ padding: '5px' }}
                        variant="contained" onClick={() => mintNFT(nft.id, props.account, nft.category, props.callback, setError, setMintedNfts)}>
                        Mint
                      </Button>}
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))}
          </NftItemContainer>
        </NftListContainer>
      </div>
    ))}
  </>)
}