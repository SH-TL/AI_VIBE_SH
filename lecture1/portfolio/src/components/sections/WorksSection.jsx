import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const WORKS = [
  {
    id: 1,
    title: 'AI 교육 플랫폼',
    desc: 'AI 기반 맞춤형 학습 경험을 제공하는 교육 서비스 웹 애플리케이션',
    tags: ['React', 'MUI', 'Supabase'],
    year: '2026',
  },
  {
    id: 2,
    title: '포트폴리오 사이트',
    desc: '미니멀리즘 컨셉으로 구성한 개인 작업물 포트폴리오',
    tags: ['React', 'Vite', 'MUI'],
    year: '2026',
  },
  {
    id: 3,
    title: '디자인 시스템 구축',
    desc: '재사용 가능한 컴포넌트 기반의 일관된 디자인 시스템',
    tags: ['Figma', 'MUI', 'UI/UX'],
    year: '2026',
  },
  {
    id: 4,
    title: '대시보드 UI',
    desc: '실시간 데이터 시각화를 위한 관리자 대시보드 인터페이스',
    tags: ['React', 'Chart.js', 'REST API'],
    year: '2025',
  },
];

/**
 * WorkCard 컴포넌트
 *
 * Props:
 * @param {string} title - 프로젝트 이름 [Required]
 * @param {string} desc - 프로젝트 설명 [Required]
 * @param {string[]} tags - 기술 스택 태그 배열 [Required]
 * @param {string} year - 작업 연도 [Required]
 *
 * Example usage:
 * <WorkCard title="AI 교육 플랫폼" desc="설명" tags={['React']} year="2026" />
 */
function WorkCard({ title, desc, tags, year }) {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        border: '1px solid #D4EAFF',
        boxShadow: 'none',
        transition: 'border-color 0.25s ease, transform 0.25s ease',
        '&:hover': {
          borderColor: '#2196F3',
          transform: 'translateY(-3px)',
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, md: 4 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:last-child': { pb: { xs: 3, md: 4 } },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#1A2B4A',
              lineHeight: 1.4,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.6875rem',
              color: '#6B7A8D',
              ml: 2,
              flexShrink: 0,
              mt: '2px',
            }}
          >
            {year}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: '#6B7A8D',
            lineHeight: 1.75,
            mb: 4,
            flexGrow: 1,
          }}
        >
          {desc}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                height: 24,
                fontSize: '0.6875rem',
                fontWeight: 500,
                bgcolor: '#EAF4FF',
                color: '#1565C0',
                borderRadius: '4px',
                border: 'none',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

function WorksSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#FAFAFA',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#2196F3',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Portfolio
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#1A2B4A',
              lineHeight: 1.3,
            }}
          >
            Works
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {WORKS.map((work) => (
            <Grid key={work.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <WorkCard {...work} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorksSection;
