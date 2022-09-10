import { CheckCircleRounded, CircleRounded } from "@mui/icons-material"
import { Avatar, Box, Card, CardActions, CardMedia, styled, Typography } from "@mui/material"
import yurina from "../img/static/Yurina.png"

const CardCont = styled(Card)((({theme}) => ({
    maxWidth:350, 
    boxShadow:'none', 
    position:'relative',
    [theme.breakpoints.up('xs')]: {
        flex:'1 0 80%'
    },
    [theme.breakpoints.up('sm')]: {
        flex:'1 0 40%'
        
    },
    [theme.breakpoints.up('md')]: {
        flex:'1 0 30%'
        
    },
    [theme.breakpoints.up('lg')]: {
        flex:'1 0 21%'
    },
    [theme.breakpoints.up('xl')]: {
        flex: '0 1 18%'

    }
})))

const CardContent = ({id}) => {
    return (
        <CardCont >
            <CardMedia 
                component="img"
                height="194"
                image={"https://picsum.photos/id/"+id+"/200/300"}
                alt="yurina"
            />
            <Box sx={{position:'absolute', borderRadius:'5px',pl:0.5, pr:0.5, right:10, top:170, bgcolor:'rgba(0,0,0, 0.9)'}}>
                <Typography color='white' variant="caption">1:40:25</Typography>
            </Box>
            <CardActions>
                <Box sx={{display:'flex', gap:1}}>
                    <Avatar src={yurina}/>
                    <Box>
                        <Typography variant="body1" color={'text.primary'} sx={{fontWeight:700}}>Judul Youtube Typography Bold Body Text Primary</Typography>
                        <Typography variant="body2" color={'text.secondary'} sx={{fontWeight:500}}>
                            Yurina CH <CheckCircleRounded sx={{fontSize:'13px'}} />
                        </Typography>

                        <Typography variant="body2" color={'text.secondary'} sx={{fontWeight:400}}>
                            12K Views &nbsp;    
                            <CircleRounded sx={{fontSize:'6px'}} />
                            &nbsp; 4 Hours Ago
                        </Typography>
                    </Box>
                </Box>
            </CardActions>
        </CardCont>
    )
}

export default CardContent