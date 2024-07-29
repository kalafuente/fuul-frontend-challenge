type ProjectInfo = {
    id: string;
    name: string;
    apiKey: string;
    description: string;
};
type NFT = {
    id: string;
    category: string;
    editions: number;
    projectId: string;
};
export declare class Fuul {
    init(apiKey: string): Promise<ProjectInfo>;
    private mintRecords;
    mintNFT(userAddress: string, nftId: string, category: string): string;
    getNFTs(projectId: string): Promise<NFT[]>;
}
export {};
