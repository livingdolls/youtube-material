import { Skeleton, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MainContent from "./MainContent";

const LazySkeleton = (
    <Box>
        <Skeleton variant="rectangular" width={300} height={194} />
        <Skeleton />
        <Skeleton width={'80%'} />
        <Skeleton width={'60%'} />
    </Box>
)

const BoxCard = styled(Box)((({theme}) => ({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    [theme.breakpoints.down('md')]: {
        justifyContent:'center'
    }
})))

const LayoutMainContent = () => {
    const [loading, setLoading] = useState(true)
    
    setTimeout(() => {
        setLoading(false)
    }, 3000);
    return(
        <>
            {loading 
            ? <Box width="100%">
                <BoxCard gap={2} ml={5} mt={3}>
                    {LazySkeleton}
                    {LazySkeleton}
                    {LazySkeleton}
                    {LazySkeleton}
                    {LazySkeleton}
                    {LazySkeleton}
                    {LazySkeleton}
                </BoxCard>
            </Box>
            : 
                <MainContent />
            }
        </>
    )
}

export default LayoutMainContent;