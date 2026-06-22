import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function ProfileSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 4, md: 6 },
        py: { xs: 10, md: 12 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Avatar
        sx={{
          width: { xs: 80, md: 96 },
          height: { xs: 80, md: 96 },
          bgcolor: 'primary.main',
          fontSize: { xs: '2rem', md: '2.25rem' },
          fontWeight: 700,
          mb: 5,
        }}
      >
        S
      </Avatar>

      <Typography
        component="h1"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          color: '#1A2B4A',
          mb: 1.5,
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        Kim Seohyun
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '0.8125rem', md: '0.9375rem' },
          color: '#2196F3',
          fontWeight: 500,
          letterSpacing: '0.08em',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Frontend Developer
      </Typography>

      <Box
        sx={{
          maxWidth: 460,
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '0.875rem', md: '0.9375rem' },
            color: '#6B7A8D',
            lineHeight: 1.8,
          }}
        >
          코드로 경험을 설계하는 개발자입니다.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.875rem', md: '0.9375rem' },
            color: '#6B7A8D',
            lineHeight: 1.8,
          }}
        >
          사용자 중심의 인터페이스와 깔끔한 코드를 지향합니다.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <IconButton
          href="https://github.com"
          target="_blank"
          disableRipple
          sx={{
            color: '#1A2B4A',
            transition: 'color 0.2s ease',
            '&:hover': { color: '#2196F3', bgcolor: 'transparent' },
          }}
        >
          <GitHubIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <IconButton
          href="mailto:dev@example.com"
          disableRipple
          sx={{
            color: '#1A2B4A',
            transition: 'color 0.2s ease',
            '&:hover': { color: '#2196F3', bgcolor: 'transparent' },
          }}
        >
          <EmailOutlinedIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ProfileSection;
