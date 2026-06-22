import { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SectionWrapper from '../ui/SectionWrapper';

const FIELDS = [
  { variant: 'outlined', label: 'Outlined', placeholder: '텍스트를 입력하세요' },
  { variant: 'filled', label: 'Filled', placeholder: '텍스트를 입력하세요' },
  { variant: 'standard', label: 'Standard', placeholder: '텍스트를 입력하세요' },
];

function Section02Inputs() {
  const [values, setValues] = useState({ outlined: '', filled: '', standard: '' });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  return (
    <SectionWrapper title='Inputs' sectionNumber='02'>
      <Grid container spacing={4}>
        {FIELDS.map(({ variant, label, placeholder }) => (
          <Grid key={variant} size={{ xs: 12, sm: 4 }}>
            <Typography
              variant='overline'
              sx={{ display: 'block', mb: 1, color: 'text.secondary' }}
            >
              {variant}
            </Typography>
            <TextField
              variant={variant}
              label={label}
              placeholder={placeholder}
              value={values[variant]}
              onChange={handleChange(variant)}
              fullWidth
            />
            <Box sx={{ mt: 1.5, minHeight: 32, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                입력값:
              </Typography>
              {values[variant] ? (
                <Chip label={values[variant]} size='small' color='primary' variant='outlined' />
              ) : (
                <Typography variant='caption' sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
                  없음
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default Section02Inputs;
