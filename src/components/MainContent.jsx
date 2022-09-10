import { AppBar, Box, Divider, Link, styled, Typography,Tabs, Tab, tabsClasses } from "@mui/material"
import CardContent from "./CardContent"
import { Close } from "@mui/icons-material";
import { useState } from "react";

const BoxCard = styled(Box)((({theme}) => ({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    [theme.breakpoints.down('md')]: {
        justifyContent:'center'
    }
})))

const NavAppBar = styled(AppBar)((({theme}) => ({
    height:'40px',
    maxWidth:"90%",
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:theme.palette.background.default,
    top:50,
    overflow:'hidden'
})))

const ButtonSlide =styled(Link)((({theme}) => ({
    height:'15px',
    borderRadius:'20px',
    color:theme.palette.text.primary,
    backgroundColor:theme.palette.divider,
    margin:3,
    padding:7,
    paddingLeft:10,
    paddingRight:10,
    border:'1px solid rgba(123, 117, 120, 0.54)',
    textTransform:'none',
    marginTop:8,
})))

const TabMenu = [
    {menu:'Music'},
    {menu:'Mixes'},
    {menu:'Live'},
    {menu:'Gaming'},
    {menu:'Background Music'},
    {menu:'Radwimps'},
    {menu:'Playlist'},
    {menu:'Kobasolo'},
    {menu:'Manga'},
    {menu:'Programing'},
    {menu:'Gadget'},
    {menu:'Indie Music'},
    {menu:'Rpgs'},
    {menu:'Role Play Gaming'},
    {menu:'Recent Upload'},
    {menu:'Watched dahf'},
    {menu:'Watched daewe'},
    {menu:'Watched dwea'},
    {menu:'Watched daaa'},
    {menu:'Watched das'},
    {menu:'Watched dat'},

]

const MainContent = () => {
    const [breaking, setBreaking] = useState(true)
    return(
        <Box maxWidth="90%" sx={{mx:{xs:'auto',sm:0}}}>
            <NavAppBar position="sticky" elevation={0} sx={{zIndex:2}}>
                {/* <Tabs
                    variant="scrollable"
                    allowScrollButtonsMobile
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    value={1}
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 1,color:'red' },
                            opacity:1,
                            color:'red'
                          },
                    }}
                >
                    <ButtonSlide size="small" sx={{bgcolor:'black', color:'white'}}>All</ButtonSlide>
                    
                    {TabMenu.map((m,index) => {
                        return <ButtonSlide href="#" value={index} key={m.menu} underline="none" textcolor="red">{m.menu}</ButtonSlide>
                    })}
                </Tabs> */}
                {TabMenu.map((m,index) => {
                        return <ButtonSlide href="#" value={index} key={m.menu} underline="none" textcolor="red">{m.menu}</ButtonSlide>
                    })}
            </NavAppBar>

            <Box
                maxWidth="100%"
                bgcolor={'background.default'} 
                overflow='scroll' 
                height="93vh"
                sx={{
                    mx:'auto', 
                    width:'95%',
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
                }}>

                <BoxCard p={2.5} gap={2} >
                    <CardContent id={1} />
                    <CardContent id={2} />
                    <CardContent id={3} />
                    <CardContent id={4} />
                    <CardContent id={5} />
                    <CardContent id={6} />
                    <CardContent id={7} />
                    <CardContent id={8} />
                    <CardContent id={9} />
                    <CardContent id={10} />
                    <CardContent id={11} />
                    <CardContent id={12} />
                    <CardContent id={13} />
                    <CardContent id={14} />
                    <CardContent id={15} />
                    <CardContent id={16} />
                </BoxCard>

                {breaking 
                    ? <>
                    <Divider />
                    
                    <Box 
                        display='flex'
                        justifyContent={'space-between'}
                        p={2}
                        color={'text.primary'}
                        >
                        <Typography variant="h5" color={'text.primary'}>Breaking News</Typography>
                        <Close onClick={() => setBreaking(false)} />
                    </Box>

                    <BoxCard p={2.5} gap={2} >
                        <CardContent id={17} />
                        <CardContent id={18} />
                        <CardContent id={19} />
                        <CardContent id={20} />
                        <CardContent id={21} />
                        <CardContent id={23} />
                        <CardContent id={24} />
                        <CardContent id={25} />
                    </BoxCard>
                    </>
                    :
                    <></>
                    
                }
                    <Divider />

                    <BoxCard p={2.5} gap={2} >
                        <CardContent id={27} />
                        <CardContent id={28} />
                        <CardContent id={29} />
                        <CardContent id={30} />
                        <CardContent id={31} />
                        <CardContent id={32} />
                        <CardContent id={33} />
                        <CardContent id={34} />
                    </BoxCard>
                
            </Box>
        </Box>
    )
}

export default MainContent