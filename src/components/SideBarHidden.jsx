import { AttachMoneyOutlined, ExploreOutlined, Home, SubscriptionsOutlined, VideoLibraryOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, styled, Typography } from "@mui/material";

const BoxNav = styled(Box)((({theme}) => ({
    height:'100vh',
    padding:5,
    width:'60px',
})))

const menu = [
    {menu:"Home", icon:<Home sx={{mx:'auto', fontSize:30}} />},
    {menu:"Explore", icon:<ExploreOutlined sx={{mx:'auto',fontSize:30}} />},
    {menu:"Short", icon:<AttachMoneyOutlined sx={{mx:'auto', fontSize:30}} />},
    {menu:"Subscriptions", icon:<SubscriptionsOutlined sx={{mx:'auto', fontSize:30}} />},
    {menu:"Library", icon:<VideoLibraryOutlined sx={{mx:'auto', fontSize:30}} />},
]

const SidebarHidden = () => {
    return(
        <BoxNav>
            <List sx={{ml:1}} disablePadding>
            {menu.map((m) => {
                return(
                        <ListItem key={m.menu} disablePadding>
                            <ListItemButton 
                                sx={{display:'flex', 
                                    flexDirection:'column',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    }}>
                                <ListItemIcon>
                                    {m.icon}
                                </ListItemIcon>
                                <Typography variant="caption" color="text.primary">{m.menu}</Typography>
                            </ListItemButton>
                        </ListItem>
                )
            })}
            </List>
        </BoxNav>
    )
}

export default SidebarHidden;