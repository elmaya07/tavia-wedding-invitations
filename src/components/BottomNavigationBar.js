import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function BottomNavigationBar() {
    const [value, setValue] = React.useState(1);
  
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
        sx={{ width: '100%',position:'absolute',bottom:0 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Setting" icon={<SettingsSuggestIcon />} />
          
        </BottomNavigation>
      </Box>
    );
  }