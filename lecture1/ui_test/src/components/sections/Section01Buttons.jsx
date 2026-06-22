import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SectionWrapper from '../ui/SectionWrapper';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

function Section01Buttons() {
  const handleClick = (variant, color) => {
    alert(`variant: ${variant} / color: ${color}`);
  };

  return (
    <SectionWrapper title='Buttons' sectionNumber='01'>
      {VARIANTS.map((variant) => (
        <Box key={variant} sx={{ mb: 3 }}>
          <Typography
            variant='overline'
            sx={{ display: 'block', mb: 1, color: 'text.secondary' }}
          >
            {variant}
          </Typography>
          <Grid container spacing={2}>
            {COLORS.map((color) => (
              <Grid key={color} size={{ xs: 12, sm: 4 }}>
                <Button
                  variant={variant}
                  color={color}
                  fullWidth
                  onClick={() => handleClick(variant, color)}
                >
                  {color}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </SectionWrapper>
  );
}

export default Section01Buttons;
