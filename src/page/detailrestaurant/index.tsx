import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {Grid,Button} from '@mui/material';
import NavBar from '../../components/navbar/index'
import SideBar from '../../components/sidebar/index'
import {dataloadbyid} from '../../service/data'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemList from './desktop'
import {
  useParams
} from "react-router-dom";
import MobileCard from './mobile'

export default function DetailApp() {
  let { id,name } = useParams();
  const [datarestaurant,setdatarestaurant] = React.useState({})
  const myload = async () => {
    var data = await dataloadbyid(String(id),String(name))
    console.log("data",data);
    setdatarestaurant(data)
  }
  React.useEffect(()=>{
    myload()
  },[])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar/>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Box sx={{ flexGrow: 1,marginTop:"20px" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Button startIcon={<ArrowBackIosIcon />} onClick={()=>{window.location.href="/"}} variant="contained" sx={{
                  background:"#134B8A",
                  borderRadius:"30px"
                }}>BACK</Button>
              </Grid>
              {Object.keys(datarestaurant).length >0?
                <Grid item xs={12} md={12}>
                  <ItemList data={datarestaurant}/>
                  <MobileCard data={datarestaurant}/>
                </Grid>:null
              }
              
            </Grid>
          </Box>
      </Box>
    </Box>
  );
}