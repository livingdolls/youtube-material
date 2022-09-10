import { DensityMedium, Mic, NotificationsNoneOutlined, Search, VideoCallOutlined } from "@mui/icons-material"
import { AppBar, Avatar, Box, Button, Input, InputAdornment, Menu, styled } from "@mui/material"
import { useState } from "react"
import logo from '../img/static/YTLogo.png'
import yurina from '../img/static/Yurina.png'
import MenuProfil from "./MenuProfil"
import Notif from "./Notif"

const NavAppBar = styled(AppBar)((({theme}) => ({
    height:'65px',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:theme.palette.background.default,
})))

const NavItems = styled(Box)((({theme}) => ({
    display:'flex',
    alignItems:'center',
    color:theme.palette.text.primary
})))

const SearchBox = styled('div')((({theme}) => ({
    width:'500px',
    padding:'1px',
    backgroundColor:theme.palette.divider,
    border:'1px solid rgba(99,99,99, 0.1)'
})))

const ButtonMod = styled(Button)((({theme}) => ({
    height:'37px',
    backgroundColor:theme.palette.divider,
    color:theme.palette.text.primary,
    borderRadius:'0',
    marginRight:-1
})))

const Navbar = ({handleSide, openSidebar}) => {
    const [menuProfil, setMenuProfil] = useState(null)
    const [notif, setNotif] = useState(null)

    const open = Boolean(menuProfil)
    const openNotif = Boolean(notif)

    const handleClick = e => {
        setMenuProfil(e.currentTarget);
    }

    const handleClickNotif = e => {
        setNotif(e.currentTarget);
    }

    const handleClose = () => {
        setMenuProfil(null)
        setNotif(null)
    }

 
    return(
        <NavAppBar position='sticky' elevation={0}>
            {/* LogoBar */}
            <NavItems ml={3} sx={{gap:3}}>
                <DensityMedium onClick={() => handleSide(!openSidebar)} />
                <img src={logo} width="100px" alt="logo" />
            </NavItems>

            {/* Search Bar */}
            <NavItems gap={3}  sx={{display:{xs:'none',sm:'none',md:'inline-flex',lg:'inline-flex'}}}>
                <SearchBox border={1}>
                    <Input 
                        fullWidth
                        placeholder="Search" 
                        disableUnderline
                        startAdornment ={
                            <InputAdornment position='start'>
                                <Search />
                            </InputAdornment>
                        }

                        endAdornment ={
                            <InputAdornment position='end'>
                                <ButtonMod disableElevation size="small"><Search /></ButtonMod>
                            </InputAdornment>
                        }
                    />
                </SearchBox>
                        <Mic />
                    {/* <Button variant="contained" color="success" > */}
                    {/* </Button> */}
            </NavItems>

            {/* IconBar */}
            <NavItems gap={2} mr={3}>
                <VideoCallOutlined sx={{fontSize:'30px', fontWeight:'100px'}}/>
                
                <NotificationsNoneOutlined sx={{fontSize:'30px'}} onClick={handleClickNotif} />
                <Menu
                    anchorEl={notif}
                    open={openNotif}
                    onClose={handleClose}
                >
                    <Notif />
                </Menu>

                
                <Avatar sx={{height:40, width:40}} src={yurina} onClick={handleClick} />
                {/* Menu */}
                <Menu
                    anchorEl={menuProfil}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuProfil />
                </Menu>
            </NavItems>
        </NavAppBar>
    )
}

export default Navbar