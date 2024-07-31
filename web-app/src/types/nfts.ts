export type NFT = {
  id: string;
  category: string;
  editions: number;
};

export type GroupedNFTs = {
  [key: string]: NFT[];
};