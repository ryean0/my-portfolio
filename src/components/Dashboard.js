import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HomeButton from './HomeButton';
import { useMediaQuery, Avatar } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
import ProfilePic from "../resources/profilepic.png"


export default function Dashboard() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    isMobile ? <DashboardMobile/> : <DashboardDesktop/>
  )
}

export function DashboardDesktop() {
  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar   
        position="static"
        color="transparent" 
        sx={{ 
            border: "none", 
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            marginBottom: "30px",
            paddingLeft: "30px"
        }}>
            <HomeButton name="Home" path=""/>
            <HomeButton name="About" path="about"/>
            <HomeButton name="Projects" path="projects"/>
            <HomeButton name="Contact" path="contact"/>
      </AppBar>
    </Box>
  );
}

export function DashboardMobile() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <Box sx={{ flexGrow: 1, marginLeft: "-10px"}}>
      <AppBar   
        position="static"
        color="transparent" 
        sx={{  
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            width: "100vw",
            gap: "5%",
            paddingTop: "120px",
            fontFamily: "Ubuntu mono",
            fontSize: 22,
            textDecoration: "underline",
            color: "white"
        }}>
        <Avatar 
          alt="ProfilePic" 
          src={ProfilePic} 
          sx={{
            width: "80px",
            height: "80px",
            padding: "10px"
          }}
          onClick={scrollToTop}
        />
        <Link
          activeClass='active'
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={350}
          style={{color: "white"}}
        >
        About
        </Link>
        <Link
          activeClass='active'
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={350}
        >
        Projects
        </Link>
        <Link
          activeClass='active'
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={350}
        >
        Contact
        </Link>
      </AppBar>
    </Box>
  );
}




