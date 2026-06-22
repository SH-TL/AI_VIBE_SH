import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LoadingScreen() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#FFFFFF',
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 1.6s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1, transform: 'scale(1)' },
            '50%': { opacity: 0.6, transform: 'scale(0.92)' },
          },
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '1.5rem',
          }}
        >
          S
        </Typography>
      </Box>

      <Typography
        sx={{
          color: '#6B7A8D',
          fontWeight: 400,
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
}

export default LoadingScreen;
