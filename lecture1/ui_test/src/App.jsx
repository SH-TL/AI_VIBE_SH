import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// 섹션 컴포넌트들을 여기에 순서대로 import합니다
// import Section01Buttons from './components/sections/Section01Buttons';

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      bgcolor: 'grey.50',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          component='h1'
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: 600,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          UI Components Showcase
        </Typography>

        {/* 섹션 컴포넌트들을 아래에 순서대로 추가합니다 */}
        {/* <Section01Buttons /> */}

      </Container>
    </Box>
  );
}

export default App;
