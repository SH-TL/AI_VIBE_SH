import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
      light: '#42B0FF',
      dark: '#1565C0',
    },
    secondary: {
      main: '#5BC8FF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2B4A',
      secondary: '#6B7A8D',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.35 },
    h3: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.35 },
    h4: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.5 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 },
    caption: { fontSize: '0.75rem', fontWeight: 400 },
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          height: 44,
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'none',
          padding: '0 24px',
        },
        sizeSmall: { height: 32, padding: '0 16px', fontSize: '0.75rem' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { height: 28, fontSize: '0.75rem', fontWeight: 600 },
      },
    },
  },
});

export default theme;
