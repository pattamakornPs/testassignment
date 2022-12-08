import {Card,CardContent,CardMedia,CardActionArea,Box,Typography,Paper,Button} from '@mui/material';
import {CalendarMonth} from '@mui/icons-material';
import {dateop} from '../../service/data'
import Carousel from 'react-material-ui-carousel'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function MobileCard(Props:any) {
    const {data} = Props
    return (
        <Card sx={{ width:"100%",display: { xs: 'block', md: 'none' } }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="87px"
                    image={data.profile_image_url}
                    alt="green iguana"
                    onClick={()=>{window.location.href=`/${data.id}/${data.name}`}}
                />
                <Box
                    sx={{width:"67px",position:"absolute",marginTop:"-15px",right:20}} onClick={()=>{window.location.href=`/${data.id}/${data.name}`}}
                >
                    <Paper elevation={3} sx={{
                        textAlign: 'center',
                        fontFamily:"'Kanit', sans-serif",
                        fontWeight:500,
                        fontSize:"16px",
                        padding:"2px 17px 2px 17px",
                        borderRadius:"30px",
                        background: "#134B8A",
                        color:"#fff"
                    }}>
                        {data.rating}
                    </Paper>
                </Box>
                <CardContent>
                    <Box onClick={()=>{window.location.href=`/${data.id}/${data.name}`}}>
                        <Typography gutterBottom component="div" sx={{
                            fontFamily:"'Kanit', sans-serif",
                            fontWeight:500,
                            fontSize:"14px",
                        }}>
                            {data.name}
                        </Typography>

                        <Typography gutterBottom component="div" sx={{
                            fontFamily:"'Kanit', sans-serif",
                            fontWeight:400,
                            fontSize:"12px",
                        }}>
                            <CalendarMonth sx={{width:"16px",height:"16px"}}/> {dateop(data)}
                        </Typography>
                    </Box>
                    <Box>
                        <Carousel
                            NextIcon={<KeyboardArrowRightIcon/>}
                            PrevIcon={<KeyboardArrowLeftIcon/>}
                            autoPlay={false}
                            indicators={false}
                            navButtonsAlwaysVisible={true}
                            fullHeightHover={true}
                            animation="slide"
                        >
                            {data.images.map((key:any,index:any)=>
                                <img src={key} key={index} alt="" style={{objectFit:"fill",width:"100%",height:"176px",overflow:"hidden",borderRadius:"10px"}} />
                            )}
                        </Carousel>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}