import { AttachMoneyOutlined,  Circle,  EmojiEventsOutlined, ExploreOutlined, FeedbackOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home, KeyboardArrowDown, KeyboardArrowUp,  LocalMoviesOutlined, ModeNight, PlaylistPlay, SettingsOutlined, SmartDisplayOutlined,  SportsEsportsOutlined, SubscriptionsOutlined, ThumbUpOutlined, VideoLibraryOutlined, WatchLaterOutlined } from "@mui/icons-material";
import { Avatar, Box, Collapse, Divider, IconButton, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from "@mui/material";
import { useState } from "react";

const menu = [
    {menu:"Home", icon:<Home />},
    {menu:"Explore", icon:<ExploreOutlined />},
    {menu:"Short", icon:<AttachMoneyOutlined />},
    {menu:"Subscriptions", icon:<SubscriptionsOutlined />},
]

const menuMe = [
    {menu:"Library", icon:<VideoLibraryOutlined />},
    {menu:"History", icon:<HistoryOutlined />},
    {menu:"Your Video", icon:<SmartDisplayOutlined />},
    {menu:"Watch Later", icon:<WatchLaterOutlined />},
    {menu:"Like Videos", icon:<ThumbUpOutlined />},
]

const menuHidden = [
    {menu:"Japanese Musik", icon:<PlaylistPlay />},
    {menu:"Pemrograman Web", icon:<PlaylistPlay />},
    {menu:"Material UI React JS", icon:<PlaylistPlay />},
    {menu:"MERN Stack", icon:<PlaylistPlay />},
]

const menuSubscribtion = [
    {img:"https://picsum.photos/id/37/200/300",name:"Yurina Hirate"},
    {img:"https://picsum.photos/id/75/200/300",name:"Node JS Indo"},
    {img:"https://picsum.photos/id/76/200/300",name:"Express JS"},
    {img:"https://picsum.photos/id/72/200/300",name:"Mern Stack"},
    {img:"https://picsum.photos/id/79/200/300",name:"Material Color"},
    {img:"https://picsum.photos/id/70/200/300",name:"Fullstack Dev"},
    {img:"https://picsum.photos/id/71/200/300",name:"Mern Dev"},
]

const menuExplore = [
    {menu:"Movies",icon:<LocalMoviesOutlined />},
    {menu:"Gaming",icon:<SportsEsportsOutlined />},
    {menu:"Sports",icon:<EmojiEventsOutlined />}
]

const menuMore = [
    {menu:"YouTube Premium",icon:<LocalMoviesOutlined />},
    {menu:"Creator Studio",icon:<SportsEsportsOutlined />},
    {menu:"YouTube Music",icon:<EmojiEventsOutlined />},
    {menu:"YouTube Kids",icon:<EmojiEventsOutlined />},
    {menu:"YouTube TV",icon:<EmojiEventsOutlined />}
]

const menuSetting = [
    {menu:"Settings",icon:<SettingsOutlined />},
    {menu:"Report History",icon:<FlagOutlined />},
    {menu:"Help",icon:<HelpOutlineOutlined />},
    {menu:"Send Feedback",icon:<FeedbackOutlined />}
]

const menuFooter = [
    {menu:'About', link:'#'},
    {menu:'Press', link:'#'},
    {menu:'Copyright', link:'#'},
    {menu:'Contact us', link:'#'},
    {menu:'Creators', link:'#'},
    {menu:'Advertise', link:'#'},
    {menu:'Developers', link:'#'},
]

const menuFooterSec = [
    {menu:'Terms', link:'#'},
    {menu:'Privacy', link:'#'},
    {menu:'Policy & Safety', link:'#'},
    {menu:'How YouTube Works', link:'#'},
    {menu:'Test new features', link:'#'}
]

const SideBar = ({data,mode}) => {
    const [open, setOpen] = useState(false)
    return(
        <Box >

        <Box
            width="250px"
            backgroundColor="background.default"
            height={'93vh'}
            overflow='scroll'
            sx={{
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
                }
            }}
            >
            <List disablePadding> 
                 {menu.map((m) => {
                    return(
                        <ListItem disablePadding key={m.menu}>
                            <ListItemButton key={m.menu}>
                                <ListItemIcon>
                                    {m.icon}        
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="body2" color={'text.primary'}>
                                        {m.menu}
                                    </Typography> 
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
                <Divider />

                {menuMe.map((m) => {
                    return(
                        <ListItem disablePadding key={m.menu}>
                            <ListItemButton key={m.menu}>
                                <ListItemIcon>
                                    {m.icon}        
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="body2" color={'text.primary'}>
                                        {m.menu}
                                    </Typography> 
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}

                        <ListItem disablePadding key={"more"}>
                            <ListItemButton onClick={() => setOpen(!open)}>
                                <ListItemIcon>
                                    <KeyboardArrowDown />        
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="body2" color={'text.primary'}>
                                        Show More
                                    </Typography> 
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {menuHidden.map((m) => {
                                return(
                                <ListItemButton key={m.menu}>
                                    <ListItemIcon>
                                        {m.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                    <Typography variant="body2" color={'text.primary'}>
                                        {m.menu}
                                    </Typography> 
                                    </ListItemText>
                                </ListItemButton>
                                )
                            })}

                            <ListItem disablePadding key={"close"}>
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <ListItemIcon>
                                        <KeyboardArrowUp />        
                                    </ListItemIcon>
                                    <ListItemText>
                                    <Typography variant="body2" color={'text.primary'}>
                                        Show Less
                                    </Typography> 
                                </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Collapse>
                        
                        <Divider />
                        <ListItem key={"Subs"}>
                            <Typography variant="subtitle2"  color='text.secondary'>SUBSCRIPTIONS</Typography>
                        </ListItem>

                        {menuSubscribtion.map((m) => {
                            return(
                                <ListItem 
                                key={m.name}
                                disablePadding
                                secondaryAction={
                                    <IconButton edge="end">
                                        <Circle sx={{color:'#2196f3', fontSize:'8px'}} />
                                    </IconButton>
                                }
                            >
                                <ListItemButton key={m.menu}>
                                    <ListItemAvatar>
                                        <Avatar alt={"subs"} src={m.img} />
                                    </ListItemAvatar>
    
                                    <ListItemText>
                                    <Typography variant="body2" color={'text.primary'}>
                                        {m.name}
                                    </Typography> 
                                </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            )
                        })}

                        <Divider />
                        <ListItem key={"explore"}>
                            <Typography variant="subtitle2"  color='text.secondary'>EXPLORE</Typography>
                        </ListItem>

                        {menuExplore.map((m) => {
                            return(
                                <ListItem disablePadding key={m.menu}>
                                    <ListItemButton key={m.menu}>
                                        <ListItemIcon>
                                            {m.icon}        
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="body2" color={'text.primary'}>
                                                {m.menu}
                                            </Typography> 
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}

                       <Divider />
                        <ListItem key="moreKey">
                            <Typography variant="subtitle2"  color='text.secondary'>MORE FROM YOUTUBE</Typography>
                        </ListItem>

                         {menuMore.map((m) => {
                            return(
                                <ListItem disablePadding key={m.menu}>
                                    <ListItemButton key={m.menu}>
                                        <ListItemIcon>
                                            {m.icon}        
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="body2" color={'text.primary'}>
                                                {m.menu}
                                            </Typography> 
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}

                        <Divider />

                        {menuSetting.map((m) => {
                            return(
                                <ListItem disablePadding key={m.menu}>
                                    <ListItemButton key={m.menu}>
                                        <ListItemIcon>
                                            {m.icon}        
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="body2" color={'text.primary'}>
                                                {m.menu}
                                            </Typography> 
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}

                            {/* <ListItem disablePadding key="mode"
                                secondaryAction={
                                    <IconButton edge="end" onClick={() => data(!mode)}>
                                        <Brightness7 />
                                    </IconButton>
                            }>
                                <ListItemButton key="mode">
                                    <ListItemText>
                                        <Typography variant="body2" color={'text.primary'}>
                                            Mode
                                        </Typography> 
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem> */}

                    <ListItem disablePadding> 
                        <ListItemButton component='a' href='#'>
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="body2" color={'text.primary'}>
                                    Mode {mode}
                                </Typography> 
                            </ListItemText>
                            <Switch onChange={e=>(data(mode ===	 "light" ? "dark" : "light"))}/>
                        </ListItemButton>
                    </ListItem>
            </List>

            <Divider />

            <Box p={1} pl={2} pr={2} sx={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:1}}>
                    {menuFooter.map((m) => {
                        return(
                            <Link key={m.menu} underline="none" href="">
                                <Typography variant="body2" color={'text.secondary'} sx={{fontWeight:700}}>{m.menu}</Typography>
                            </Link>
                        )
                    })}
            </Box>

            <Box p={1} pl={2} pr={2} sx={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:1}}>
                    {menuFooterSec.map((m) => {
                        return(
                            <Link key={m.menu} underline="none" href="">
                                <Typography variant="body2" color={'text.secondary'} sx={{fontWeight:700}}>{m.menu}</Typography>
                            </Link>
                        )
                    })}
            </Box>
            
            <Typography color="text.secondary" fontSize='13px' ml={2} mt={2}>@ 2022 YouTube</Typography>
        </Box>
        </Box>
    )
}

export default SideBar;