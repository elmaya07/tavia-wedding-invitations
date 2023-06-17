import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined'; 

export default function BottomNavigationBar(props) {
    const [value, setValue] = React.useState(0);
    const executeScroll1 = () => props.myRef1.current.scrollIntoView();
    const executeScroll2 = () => props.myRef2.current.scrollIntoView();
    const executeScroll3 = () => props.myRef3.current.scrollIntoView();
    const executeScroll4 = () => props.myRef4.current.scrollIntoView();
    const executeScroll5 = () => props.myRef5.current.scrollIntoView();

    React.useEffect(()=>{
      console.log(value)
    
    })
  
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
        sx={{ width: '100%',position:'absolute',bottom:0,overflow:'hidden',display:"flex",justifyContent:'space-around' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);   
            if(newValue===0){
              executeScroll1();       
            }else if(newValue===1){
              executeScroll2();
            }else if(newValue===2){
              executeScroll3();
            }else if(newValue===3){
              executeScroll4();
            }else if(newValue===4){
              executeScroll5();
            }         
          }}
        >
          <BottomNavigationAction label={<small>{'Cover'}</small>} icon={<SpaceDashboardOutlinedIcon />} />
          <BottomNavigationAction label={<small>{'Bridgeroom'}</small>}  icon={<MaleOutlinedIcon />} />
          <BottomNavigationAction label={<small>{'Maps'}</small>} icon={<MapOutlinedIcon />} />
          <BottomNavigationAction label={<small>{'Moments'}</small>} icon={<PhotoSizeSelectActualOutlinedIcon />} />   
          <BottomNavigationAction label={<small>{'More'}</small>} icon={<MarkUnreadChatAltOutlinedIcon />} />          
          
        </BottomNavigation>
      </Box>
    );
  }
  