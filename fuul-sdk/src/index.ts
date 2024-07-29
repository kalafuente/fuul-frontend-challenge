type ProjectInfo = {
  id: string;
  name: string;
  apiKey: string;
  description: string;
}

type NFT = {
  id: string;
  category: string;
  editions: number;
  projectId: string;
}

const API_URL = 'https://66a6f36323b29e17a1a3ca1e.mockapi.io/api/v1/'
export class Fuul {
  public async init(apiKey: string): Promise<ProjectInfo> {
    // Solicita información del proyecto usando un endpoint específico con un ID de proyecto fijo ('project-1') a modo de prueba.
    // En un entorno de producción, el backend debería usar la API Key para autenticar y autorizar la solicitud, 
    // y devolver la información del proyecto correspondiente a esa API Key.
    const response = await fetch(`${API_URL}/project/project-1`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch project information');
    }
    const projectInfo: ProjectInfo = await response.json();
    return projectInfo;
  }
  private mintRecords: { [address: string]: { [category: string]: number } } = {};
  public mintNFT(userAddress: string, nftId: string, category: string): string {
    //Debería pegarle a una API para realizar esta acción por cuestiones de seguridad
    //Debería bajar el numero de editions este endpoint

    if (!this.mintRecords[userAddress]) {
      this.mintRecords[userAddress] = {};
    }
    if (!this.mintRecords[userAddress][category]) {
      this.mintRecords[userAddress][category] = 0;
    }
    if (this.mintRecords[userAddress][category] >= 2) {
      return 'MAXIMUM_EXCEEDED';
    }
    this.mintRecords[userAddress][category] += 1;
    return 'SUCCESS';
  }

  public async getNFTs(projectId: string): Promise<NFT[]> {
    // Recupera todos los NFTs desde MockAPI (sin filtrar por proyecto porque no tengo mucha opción de personalizacion en la version gratuita)
    const response = await fetch(`${API_URL}/nfts`);
    if (!response.ok) {
      throw new Error('Failed to fetch nfts');
    }
    const allNfts: NFT[] = await response.json();
    // Filtra los NFTs en el cliente por el ID del proyecto.
    // Este filtrado local se utiliza debido a las limitaciones de personalización en MockAPI.
    // En un entorno productivo, es preferible que el filtrado se realice en el servidor.
    const filteredNfts = allNfts.filter(nft => nft.projectId === projectId);
    return filteredNfts;
  }
}