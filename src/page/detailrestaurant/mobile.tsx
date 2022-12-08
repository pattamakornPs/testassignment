import * as React from 'react';
import {Card,CardContent,CardMedia,Box,Typography,Grid,Paper,Stack } from '@mui/material';
import {ThemeColor} from '../../assets/color/color'
import {Brightness1} from '@mui/icons-material';
import { format } from 'date-fns';


export default function MobileCard(Props:any) {
    const {data} = Props
    const [tab,settab] = React.useState('info');
    const [dayop,setdayop] = React.useState([])
    const operation_time = () =>{
        var optime = data.operation_time
        setdayop(optime)
    }
    React.useEffect(()=>{
        operation_time()
    },[])
    return (
        <Box sx={{ width: '100%',display: { xs: 'block', md: 'none' }}}>
            <Paper elevation={3} sx={{borderRadius:"30px"}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{borderRadius:"30px"}}
                >
                    <Grid item xs={6} md={6} onClick={()=>{settab("info")}} sx={{textAlign:"center",borderRadius:"30px",background:tab=="info"?"#134B8A":"#fff",color:tab=="info"?"#fff":"#134B8A",padding:"4px 15px 4px 15px",cursor:"pointer",fontSize:"14px"}}>
                        INFORMATION
                    </Grid>
                    <Grid item xs={6} md={6} onClick={()=>{settab("img")}} sx={{textAlign:"center",borderRadius:"30px",background:tab=="img"?"#134B8A":"#fff",color:tab=="img"?"#fff":"#134B8A",padding:"4px 15px 4px 15px",cursor:"pointer",fontSize:"14px"}}>
                        IMAGE
                    </Grid>
                </Grid>
            </Paper>
            {tab=="info"?
                <Box>
                    <Card sx={{ width:"100%",marginTop:"20px" }}>
                        <CardMedia
                            component="img"
                            height="200px"
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
                                <Grid item xs={12} md={12}>
                                    <Typography gutterBottom component="div" sx={{
                                        fontFamily:"'Kanit', sans-serif",
                                        fontWeight:700,
                                        fontSize:"16px",
                                    }}>
                                        Address :
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography sx={{
                                        color:"#000",
                                        fontFamily:"'Kanit', sans-serif",
                                        fontWeight:400,
                                        fontSize:"16px",
                                    }}>
                                        {data.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography gutterBottom component="div" sx={{
                                        fontFamily:"'Kanit', sans-serif",
                                        fontWeight:700,
                                        fontSize:"16px",
                                        marginTop:"16px"
                                    }}>
                                        Opening Hour :
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
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
                </Box>:null
            }

            {tab=="img"?
                <Box>
                    <Card sx={{ width:"100%",marginTop:"20px" }}>
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
                                        <img src={key} key={index} alt="" style={{objectFit:"cover",objectPosition:"center",width:"100%",height:"215px",overflow:"hidden"}} />
                                    )}
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>:null
            }
            
        </Box>
    );
}