import { MoreVert, SettingsOutlined } from "@mui/icons-material";
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText,  Paper, styled, Typography } from "@mui/material"
import yurina from '../img/static/Yurina.png'
import { Box } from "@mui/system";

const NavApp = styled(Box)((({theme}) => ({
    display:'flex',
    justifyContent:'space-between', 
    position: 'sticky',
    top: 0,
    backgroundColor:theme.palette.background.default,
    borderBottom:`1px solid ${theme.palette.divider}`,
    zIndex:'1'
})))

const data = [
    {id:1,img:"https://picsum.photos/id/52/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'5'},
    {id:2,img:"https://picsum.photos/id/35/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'6'},
    {id:3,img:"https://picsum.photos/id/93/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'7'},
    {id:4,img:"https://picsum.photos/id/56/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'8'},
    {id:5,img:"https://picsum.photos/id/45/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'9'},
    {id:6,img:"https://picsum.photos/id/99/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'12'},
    {id:7,img:"https://picsum.photos/id/78/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'14'},
    {id:8,img:"https://picsum.photos/id/90/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'13'},
    {id:9,img:"https://picsum.photos/id/34/200/300",title:'ONE OK ROCK uploaded: Let Me Let You Go - ONE OK ROCK #shorts', date:'15'},
]
const Notif = () => {
    return(
        <Paper>
            <NavApp
                p={2.5}
                mt={-1}
            >
                <Typography>Notifications</Typography>
                <SettingsOutlined />
            </NavApp>
            <Paper
                sx={{width:490, 
                maxWidth:'100%', 
                height:'600px',
                overflow:'scroll', 
                mt:-1,
                mb:-1,
                overflowX:'hidden',
                "&::-webkit-scrollbar":{
                    width:8
                },
                "&::-webkit-scrollbar-thumb":{
                    backgroundColor:'rgba(34,34,34, 0)',
                },
                "&:hover":{
                    "&::-webkit-scrollbar-thumb":{
                        backgroundColor:'#9e9e9e',
                    }   
                },
                }}>

            <List sx={{width:490, maxWidth:'100%', mb:-1, mt:1}} disablePadding>

                {data.map((m) => {
                    return(
                        <ListItem key={m.id}>
                        <ListItemButton sx={{pt:2,margin:-2, mb:-1}} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Yurina" src={yurina} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={m.title}
                                secondary={<>{m.date} Hours Ago</>}
                                />
    
                                <img src={m.img} height="50px" width="150px" alt={'asuka'} />
    
                                <MoreVert />
                        </ListItemButton>
                    </ListItem>
                    )
                })}

            </List>
            </Paper>
        </Paper>
    )
}

export default Notif;