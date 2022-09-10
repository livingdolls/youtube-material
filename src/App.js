import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import LayoutMainContent from "./components/LayoutMainContent";
import MainSidebar from "./components/MainSidebar";
import Navbar from "./components/Navbar";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [mode,setMode] = useState('light')

  const handleSide = (data) => {
    setOpenSidebar(data)
  }

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'}>
        <Navbar handleSide={handleSide} openSidebar={openSidebar} />
        <Stack direction={'row'} justifyContent="flex-start" alignItems='flex-start' gap={2}>
          <MainSidebar openSidebar={openSidebar} mode={mode} setMode={setMode} />
          <LayoutMainContent />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
