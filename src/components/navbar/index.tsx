import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container,IconButton,Avatar} from '@mui/material';
import Logo from '../../assets/image/icslogo.svg'
import Profile from '../../assets/image/userprofile.png'
import {ThemeColor} from '../../assets/color/color'


export default function NavBar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:ThemeColor.primary }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box
              sx={{
                  display: { xs: 'flex', md: 'none' },
                  width: "50px",
                  height:"50px",
                  marginTop:"8px",
                  marginBottom:"8px",
              }}
          >
              <img src={Logo} alt="Logo" style={{borderRadius:"10px"}} />
          </Box>

          <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
              }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0,mr:"11.5px" }}>
                  <Avatar alt="Akkarapol" src={Profile} />
              </IconButton>
              Akkarapol
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}