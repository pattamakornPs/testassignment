import * as React from 'react';
import Box from '@mui/material/Box';
import {Card,Grid,Stack,CardMedia} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {Brightness1} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import {ThemeColor} from '../../assets/color/color'
import { format } from 'date-fns';

export default function ItemList(Props:any) {
  const {data} = Props
  const [dayop,setdayop] = React.useState([])
  const operation_time = () =>{
    var optime = data.operation_time
    setdayop(optime)
  }
  React.useEffect(()=>{
    operation_time()
  },[])
  return (
    <Box
        sx={{
            background:"#C4D3E9",
            borderRadius:"10px",
            padding:"20px 17px 20px 17px",
            display: { xs: 'none', md: 'block' }
        }}
    >
        
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
    >
        <Grid item xs={12} md={7}>
            <Card sx={{ width:"100%" }}>
                <CardMedia
                    component="img"
                    height="380.44px"
                    image={data.profile_image_url}
                />
                <CardContent>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Typography gutterBottom component="div" sx={{
                            fontFamily:"'Kanit', sans-serif",
                            fontWeight:500,
                            fontSize:"24px",
                        }}>
                            {data.name}
                        </Typography>
                        <Typography sx={{
                            color:ThemeColor.primary,
                            fontFamily:"'Kanit', sans-serif",
                            fontWeight:500,
                            fontSize:"18px",
                        }}>
                            <Brightness1 sx={{width:"11px",height:"11px"}}/> {data.rating}
                        </Typography>
                    </Stack>

                    <Grid container spacing={0}>
                        <Grid item xs={6} md={2}>
                            <Typography gutterBottom component="div" sx={{
                                fontFamily:"'Kanit', sans-serif",
                                fontWeight:700,
                                fontSize:"16px",
                            }}>
                                Address :
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={10}>
                            <Typography sx={{
                                color:"#000",
                                fontFamily:"'Kanit', sans-serif",
                                fontWeight:400,
                                fontSize:"16px",
                            }}>
                                {data.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Typography gutterBottom component="div" sx={{
                                fontFamily:"'Kanit', sans-serif",
                                fontWeight:700,
                                fontSize:"16px",
                            }}>
                                Opening Hour :
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={10}>
                            <Typography sx={{
                                color:"#000",
                                fontFamily:"'Kanit', sans-serif",
                                fontWeight:400,
                                fontSize:"16px",
                            }}>
                                {dayop.map((key:any,index:any)=>
                                    <Typography key={index} sx={{
                                        color:"#000",
                                        fontFamily:"'Kanit', sans-serif",
                                        fontWeight:400,
                                        fontSize:"16px",
                                    }}>
                                        {key.day} : {key.time_open != "closed"?
                                        format(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${key.time_open}`), 'h:mm a') + " - " +format(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${key.time_close}`), 'h:mm a')
                                        :"Closed"}
                                    </Typography>
                                )}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} md={5}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{
                        color:"#000",
                        fontFamily:"'Kanit', sans-serif",
                        fontWeight:500,
                        fontSize:"20px",
                    }} gutterBottom>
                    Image
                    </Typography>
                    <Box
                    sx={{
                        borderRadius:"15px",
                        overflow:"hidden"
                    }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={0}
                            sx={{
                                borderRadius:"15px"
                            }}
                        >
                            {data.images.map((key:any,index:any)=>
                                <img src={key} key={index} alt="" style={{objectFit:"cover",objectPosition:"center",width:"100%",height:"318px",overflow:"hidden"}} />
                            )}
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Grid>

    </Grid>
    </Box>
  );
}