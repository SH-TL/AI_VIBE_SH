import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SectionWrapper from '../ui/SectionWrapper';

const MENU_ITEMS = [
  { label: 'Home', icon: <HomeIcon fontSize='small' /> },
  { label: 'Profile', icon: <PersonIcon fontSize='small' /> },
  { label: 'Notifications', icon: <NotificationsIcon fontSize='small' /> },
  { label: 'Settings', icon: <SettingsIcon fontSize='small' /> },
  { label: 'Help', icon: <InfoIcon fontSize='small' /> },
  { divider: true },
  { label: 'Logout', icon: <LogoutIcon fontSize='small' />, color: 'error.main' },
];

function Section03Menu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);

  const isOpen = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (label) => {
    setSelected(label);
    handleClose();
  };

  return (
    <SectionWrapper title='Menu' sectionNumber='03'>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Button
          variant='contained'
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleOpen}
          aria-haspopup='true'
          aria-expanded={isOpen}
        >
          메뉴 열기
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            선택된 메뉴:
          </Typography>
          {selected ? (
            <Chip label={selected} size='small' color='primary' variant='outlined' />
          ) : (
            <Typography variant='caption' sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
              없음
            </Typography>
          )}
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: { elevation: 3, sx: { minWidth: 200, borderRadius: 2, mt: 1 } },
        }}
      >
        {MENU_ITEMS.map((item, idx) =>
          item.divider ? (
            <Divider key={`divider-${idx}`} />
          ) : (
            <MenuItem
              key={item.label}
              onClick={() => handleSelect(item.label)}
              sx={{ color: item.color ?? 'inherit', py: 1 }}
            >
              <ListItemIcon sx={{ color: item.color ?? 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </MenuItem>
          )
        )}
      </Menu>
    </SectionWrapper>
  );
}

export default Section03Menu;
