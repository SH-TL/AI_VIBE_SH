import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import LoadingScreen from './components/common/LoadingScreen';
import ProfileSection from './components/sections/ProfileSection';
import WorksSection from './components/sections/WorksSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Fade in={isLoading} timeout={{ exit: 600 }} unmountOnExit>
        <Box sx={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
          <LoadingScreen />
        </Box>
      </Fade>

      <Fade in={!isLoading} timeout={800} mountOnEnter>
        <Box>
          <ProfileSection />
          <WorksSection />
        </Box>
      </Fade>
    </Box>
  );
}

export default App;
