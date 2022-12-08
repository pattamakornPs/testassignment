import Box from '@mui/material/Box';
import {Card,Grid,Stack} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {CalendarMonth,Brightness1} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import {ThemeColor} from '../../assets/color/color'
import {dateop} from '../../service/data'

export default function ItemList(Props:any) {
  const {data} = Props
  return (
    <Card sx={{ minWidth: 275,cursor:"pointer",display: { xs: 'none', md: 'block' } }} onClick={()=>{window.location.href=`/${data.id}/${data.name}`}}>
      <CardContent>
        <Box>
          <Grid container spacing={3} sx={{alignItems:"center"}}>
            <Grid item xs="auto">
              <Box
                  sx={{
                      display: { xs: 'flex', md: 'flex' },
                      width: "60px",
                      height:"60px",
                      marginTop:"8px",
                      marginBottom:"8px",
                  }}
              >
                  <img src={data.profile_image_url} alt="Logo" style={{borderRadius:"10px",width:"100%"}} />
              </Box>
            </Grid>
            <Grid item xs>
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <Typography sx={{
                      fontFamily:"'Kanit', sans-serif",
                      fontWeight:500,
                      fontSize:"18px",
                  }}>
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={0}
                    sx={{alignItems:"center"}}
                  >
                    <Typography sx={{
                        fontFamily:"'Kanit', sans-serif",
                        fontWeight:400,
                        fontSize:"16px",
                    }}>
                      <CalendarMonth sx={{width:"16px",height:"16px"}}/> {dateop(data)}
                    </Typography>

                    <Typography sx={{
                      color:ThemeColor.primary,
                      fontFamily:"'Kanit', sans-serif",
                      fontWeight:500,
                      fontSize:"16px",
                    }}>
                       <Brightness1 sx={{width:"11px",height:"11px"}}/> {data.rating}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height:"120px",
            borderRadius:"25px"
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            sx={{borderRadius:"15px",overflow:"hidden"}}
          >
            {data.images.map((key:any,index:any)=>
              <img src={key} key={index} alt="" style={{objectFit:"fill",width:"100%",height:"120px",overflow:"hidden"}} />
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}