import { Home as HomeComponent } from '../components/pages/home/index'
import '../global.d.ts';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/components/common/theme';
import { Fuul } from 'fuul-sdk';
import { GroupedNFTs, NFT } from '@/types/nfts';
import { ProjectInfo } from '@/types/project';

const fuul = new Fuul();
const apiKey = 'project-1';

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

export async function getStaticProps() {
  try {
    const info = await fuul.init(apiKey);
    const NFTs = await fuul.getNFTs(apiKey);
    const groupedNfts = groupNFTsByCategory(NFTs);

    return {
      props: {
        initialProjectInfo: info,
        initialNfts: groupedNfts || null,
        error: null
      }
    };
  } catch (e) {
    return {
      props: {
        initialProjectInfo: {},
        initialNfts: [],
        error: 'Failed to fetch project information'
      }
    };
  }
}

type HomeProps = {
  initialProjectInfo: ProjectInfo,
  initialNfts: GroupedNFTs,
  error: string
}

const Home = (props: HomeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent {...props} />
    </ThemeProvider>
  );
};

export default Home;