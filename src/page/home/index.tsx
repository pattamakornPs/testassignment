import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Grid,Divider,MenuItem,Pagination,Autocomplete} from '@mui/material';
import NavBar from '../../components/navbar/index'
import SideBar from '../../components/sidebar/index'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ItemList from './itemlist'
import {dataload} from '../../service/data'
import MobileCard from './mobileitem'


export default function App() {
  const [tpyerestaurant,settpyerestaurant] = React.useState('restaurant')
  const [datas,setdatas] = React.useState([])
  const [dataall,setdataall] = React.useState([])
  const [dataSource,setdataSource] = React.useState({
    data:[],
    all:[],
    totalpage:0,
    totaldata:0
  })
  const [pagination,setPagination] = React.useState({
    currentpage:0
  })
  React.useEffect(()=>{
    var data = dataload(tpyerestaurant)
    setdataSource(data)
    setdataall(data.all)
    setdatas(data.data[pagination.currentpage])
  },[])

  const nextpage = async (page:any) => {
    var data = await dataload(tpyerestaurant)
    setPagination({
      currentpage:page-1
    })
    setdatas(data.data[page-1])
  }
  const handleChangetype = async(event: SelectChangeEvent) =>{
    setdatas([])
    settpyerestaurant(event.target.value)
    var data = await dataload(event.target.value)
    setdataSource(data)
    setdatas(data.data[0])
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar/>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography style={{
                  fontFamily:"'Kanit', sans-serif",
                  fontWeight:500,
                  fontSize:"24px",
                  lineHeight:"32.02px",
                  fontStyle:"normal",
                  letterSpacing:"0.15px"
                }}>Place List</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={0}>
                  <Grid item xs={12} md={4}>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        fullWidth
                        value={tpyerestaurant}
                        sx={{ 
                          m: 1,
                          border:"1px solid #134B8A" ,
                          borderRadius:"50px",
                          height:"40px",
                          boxSizing:"border-box",
                          background:"#fff",
                          fontFamily:"'Kanit', sans-serif",
                          fontWeight:400,
                          fontSize:"14px",
                          color:"rgba(0, 0, 0, 0.54)"
                        }}
                        onChange={handleChangetype}
                      >
                        <MenuItem value={"restaurant"} sx={{fontFamily:"'Kanit', sans-serif"}}>Restaurant</MenuItem>
                        <MenuItem value={"bakery"} sx={{fontFamily:"'Kanit', sans-serif"}}>Bakery</MenuItem>
                        <MenuItem value={"cafe"} sx={{fontFamily:"'Kanit', sans-serif"}}>Cafe</MenuItem>
                      </Select>
                  </Grid>
                  <Grid item sx={{
                      display: { xs: 'none', md: 'flex' },
                      alignItems:"center",
                      justifyContent:"center"
                  }} xs={12} md={1}>
                    <Divider orientation="vertical" sx={{height:"25px",border:"1.5px solid #134B8A",background:"#134B8A"}} />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Autocomplete
                      selectOnFocus
                      options={dataall}
                      sx={{ 
                        border:"0px" ,
                        outline:"none",
                        borderRadius:"50px",
                        height:"40px",
                        background:"#fff",
                        fontFamily:"'Kanit', sans-serif",
                        fontWeight:400,
                        fontSize:"14px",
                        color:"rgba(0, 0, 0, 0.54)"
                      }}
                      getOptionLabel={(option) => option['name']}
                      value={dataall[0]}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} onClick={()=>{window.location.href=`/${option['id']}/${option['name']}`}}>
                          {option['name']}
                        </Box>
                      )}
                      fullWidth
                      renderInput={(params) => 
                        <div ref={params.InputProps.ref}>
                          <input type="text" {...params.inputProps} style={{ 
                            marginTop:9,
                            border:"1px solid #134B8A" ,
                            borderRadius:"50px",
                            height:"40px",
                            boxSizing:"border-box",
                            background:"#fff",
                            fontFamily:"'Kanit', sans-serif",
                            fontWeight:400,
                            fontSize:"14px",
                            color:"rgba(0, 0, 0, 0.54)",
                            width:"100%",
                            padding:"15px"
                          }}/>
                        </div>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1,marginTop:"20px" }}>
            <Grid container spacing={4}>
              {datas.map((key,index)=>
                <Grid item xs={12} md={4} key={index}>
                  <ItemList data={key}/>
                  <MobileCard data={key}/>
                </Grid>
              )}
            </Grid>
          </Box>
          <Box sx={{ display:"block",flexGrow: 0,marginTop:"20px",justifyItems:"center",justifyContent:"center",alignContent:"center",alignItems:"center",width:"100%" }}>
            <Grid container spacing={4} sx={{
                  alignItems:"center",
                  justifyItems:"center"
                }}>
                <Grid item xs={12} md={4}/>
                <Grid item xs={12} md={4} sx={{
                  display:"flex",
                  alignItems:"center",
                  justifyItems:"center"
                }}>
                  <Pagination count={dataSource.totalpage} variant="outlined" color="primary" sx={{alignItems:"center"}} onChange={(e,page)=>{nextpage(page)}} />
                </Grid>
                <Grid item xs={12} md={4}/>
            </Grid>
          </Box>
      </Box>
    </Box>
  );
}