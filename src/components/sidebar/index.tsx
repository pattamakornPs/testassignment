import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import {Divider,Stack} from '@mui/material';
import Logo from '../../assets/image/icslogo.svg'
import placeicon from '../../assets/image/placeicon.svg'

const drawerWidth = 90;

export default function SideBar() {
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: 'none', md: 'flex' },
          flexShrink: 0,
          zIndex: (theme) => theme.zIndex.drawer + 2,
          [`& .MuiDrawer-paper`]: { width: drawerWidth,maxHeight:"1456px",height:"100%", boxSizing: 'border-box',borderRadius:"0px 50px 50px 0px", },
        }}
      >
        <Box sx={{ display: 'flex',overflow: 'auto',textAlign:"center",alignItems:"center",justifyItems:"center",justifyContent:"center" }}>
              <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: "53px",
                    height:"53px",
                    marginTop:"25px",
                    marginBottom:"18px",
                    cursor:"pointer"
                }}
            >
                <img src={Logo} alt="Logo" style={{borderRadius:"10px"}} />
            </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex',overflow: 'auto',textAlign:"center",alignItems:"center",justifyItems:"center",justifyContent:"center" }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
            style={{cursor:"pointer"}}
          >
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: "53px",
                    height:"53px",
                    marginTop:"26px",
                }}
            >
                <img src={placeicon} alt="placeicon" style={{borderRadius:"10px",width:"100%",height:"100%"}} />
            </Box>

            <Typography style={{
              fontFamily:"'Kanit', sans-serif",
              fontWeight:500,
              fontSize:"12px",
              lineHeight:"19.92px",
              fontStyle:"normal",
              width: "31px",
              height: "20px",
              letterSpacing:"0.15px"
            }}>Place</Typography>
          </Stack>
        </Box>
      </Drawer>
  );
}