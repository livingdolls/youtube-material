import { AccountBoxOutlined, AccountCircleOutlined, AdminPanelSettingsOutlined, AnnouncementOutlined, Brightness3Outlined, ExitToAppOutlined, HelpOutlineOutlined, KeyboardAltOutlined, KeyboardArrowRightOutlined, LanguageOutlined, MonetizationOnOutlined, OndemandVideoOutlined, RecentActorsOutlined, SettingsOutlined, TranslateOutlined } from "@mui/icons-material"
import { Avatar, Divider, Link, ListItemAvatar, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, styled, Typography } from "@mui/material"
import yurina from '../img/static/Yurina.png'
const itemChannel = [
    {menu:'Your Channel', icon:<AccountBoxOutlined />},
    {menu:'Youtube Studio',icon:<OndemandVideoOutlined />},
    {menu:'Switch Account', icon:<RecentActorsOutlined />,arr:<KeyboardArrowRightOutlined />},
    {menu:'Sign Out', icon:<ExitToAppOutlined />}
]

const itemChannelPurchases = [
    {menu:'Purchases and membership', icon:<MonetizationOnOutlined />},
    {menu:'Your data in youtube', icon:<AccountCircleOutlined />}
]

const itemSetting = [
    {menu:'Apperance', icon:<Brightness3Outlined />,arr:<KeyboardArrowRightOutlined />},
    {menu:'Language', icon:<TranslateOutlined />,arr:<KeyboardArrowRightOutlined />},
    {menu:'Restricted Mode', icon:<AdminPanelSettingsOutlined />,arr:<KeyboardArrowRightOutlined />},
    {menu:'Location', icon:<LanguageOutlined />,arr:<KeyboardArrowRightOutlined />},
    {menu:'Keyboard Shortcuts', icon:<KeyboardAltOutlined />}
]

const Paperbox = styled(Paper)((({theme})=> ({
    width:320,
    maxWidth:'100%',
    border:`1px solid ${theme.palette.divider}`,
    borderBottom:'none',
    borderTop:'none',
    backgroundColor:theme.palette.divider
})))

const MenuProfil = () => {
    return(
        <Paperbox elevation={0}>
            <MenuList sx={{mt:-2, borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}}>
                <MenuItem sx={{p:2,pt:3,pb:3, mb:-1}}>
                    <ListItemAvatar>
                        <Avatar alt="N" src={yurina} />
                    </ListItemAvatar>
                    <ListItemText 
                        primary="Yurina Hirate" 
                        secondary={<Link href="#" underline="none">Manage Your Google Account</Link>} />
                </MenuItem>
            </MenuList>
            <MenuList sx={{mb:-1}}>

                {itemChannel.map((m) => {
                    return(
                        <MenuItem>
                            <ListItemIcon>{m.icon}</ListItemIcon>
                            <ListItemText>{m.menu}</ListItemText>
                            <Typography variant="body2">{m.arr}</Typography>

                        </MenuItem>
                    )
                })}

                <Divider />

                {itemChannelPurchases.map((m) => {
                    return(
                        <MenuItem>
                            <ListItemIcon>{m.icon}</ListItemIcon>
                            <ListItemText>{m.menu}</ListItemText>
                        </MenuItem>
                    )
                })}

                <Divider />

                {itemSetting.map((m) => {
                    return(
                        <MenuItem>
                            <ListItemIcon>{m.icon}</ListItemIcon>
                            <ListItemText>{m.menu}</ListItemText>
                            <Typography>{m.arr}</Typography>
                        </MenuItem>
                    )
                })}

                <Divider />

                <MenuItem>
                    <ListItemIcon><SettingsOutlined /></ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>

                <Divider />

                <MenuItem>
                    <ListItemIcon><HelpOutlineOutlined /></ListItemIcon>
                    <ListItemText>Help</ListItemText>
                </MenuItem>                
                
                <MenuItem>
                    <ListItemIcon><AnnouncementOutlined /></ListItemIcon>
                    <ListItemText>Feedback</ListItemText>
                </MenuItem>
            </MenuList>
        </Paperbox>
    )
}

export default MenuProfil