import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Background from '../resources/background.jpg'
import Dashboard from '../components/Dashboard';
import HomeName from '../components/HomeName';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import { createTheme, Divider, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { HomeNameMobile } from '../components/HomeName';

const theme = createTheme({
  typography: {
    allVariants: {
        fontFamily: 'Ubuntu mono'
    }
  },
  breakpoints: {
    values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1024, // desktop
        xl: 1400 // large screens
    }
  }
})

export default function Home(props) {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    let location = useLocation();
    return isMobile ?
    // Mobile Version 
    (<div>
      <ThemeProvider theme={theme}>
        <Box style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            margin: "-8px",
            marginTop: "-4vh"
            }}
        >
            <Dashboard/>
            <HomeNameMobile/>
            <Divider/>
            <About id="about"/>
            <Divider/>
            <Projects id="projects"/>
            <Divider/>
            <Contact id="contact"/>
        </Box>
      </ThemeProvider>
    </div>)
    : // Desktop Version
    (<ThemeProvider theme={theme}>
        <Box style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            height: "120vh",
            margin: "-8px"
            }}
        >
            <Dashboard/>
            {location.pathname === "/my-portfolio/" ? <HomeName/> : null}
            <Outlet/>
        </Box>
    </ThemeProvider>);
    
}