import { Home as HomeComponent } from '../components/pages/home/index'
import '../global.d.ts';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/components/common/theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent />
    </ThemeProvider>
  );
};

export default Home;