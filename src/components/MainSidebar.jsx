import { Box } from "@mui/material"
import SideBar from "./SideBar"
import SidebarHidden from "./SideBarHidden"

const MainSidebar = ({openSidebar,mode,setMode}) => {
    const handleData = (m) => {
        setMode(m)
    }
    return(
        <>
            {openSidebar
                ?
                <>
                    <Box maxWidth="250px"
                        sx={{
                            position:{xs:'fixed', sm:'fixed', md:"fixed", lg:'static'}, 
                            width:{xs:"45%", sm:"40%"},
                            zIndex:{xs:199,sm:199},
                            }} >
                        <SideBar data={handleData} mode={mode} />
                    </Box>

                    <Box width="8vh" sx={{display:{xs:'none',sm:'block',md:'block',lg:'none'}}}>
                        <SidebarHidden/>
                    </Box>
                </>
                :
                <>
                    <Box sx={{
                        display:{xs:'none',sm:'none',md:'none',lg:'none'}}}>
                        <SideBar data={handleData} mode={mode}/>                        
                    </Box>
                    
                    <Box width="8vh" sx={{display:{xs:'none', sm:'block'}}}>
                        <SidebarHidden/>
                    </Box>
                </> 
            }
        </>
    )
}

export default MainSidebar