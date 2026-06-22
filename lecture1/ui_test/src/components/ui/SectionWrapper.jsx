import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/**
 * SectionWrapper 컴포넌트 — 각 UI 섹션을 감싸는 공통 레이아웃
 *
 * Props:
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} sectionNumber - 섹션 번호 (예: '01') [Optional]
 * @param {React.ReactNode} children - 섹션 내용 [Required]
 *
 * Example usage:
 * <SectionWrapper title='Buttons' sectionNumber='01'>
 *   <Button variant='contained'>Click</Button>
 * </SectionWrapper>
 */
function SectionWrapper({ title, sectionNumber, children }) {
  return (
    <Box
      component='section'
      sx={{
        mb: { xs: 6, md: 8 },
        p: { xs: 3, md: 4 },
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box sx={{ mb: 3 }}>
        {sectionNumber && (
          <Typography
            variant='overline'
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2 }}
          >
            {sectionNumber}
          </Typography>
        )}
        <Typography variant='h5' component='h2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          {title}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      {children}
    </Box>
  );
}

export default SectionWrapper;
