import { Box, Card, Grid, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import React from 'react';
import AnimatedPage from './AnimatedPage';
import Bio from '../components/AboutPage/Bio';
import Intro from '../components/AboutPage/Intro';
import { IntroMobile } from '../components/AboutPage/Intro';
import { BioMobile } from '../components/AboutPage/Bio';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dashboard from '../components/Dashboard';
import { ReturnHomeButton } from '../components/HomeButton';

export function AboutDesktop() {
  return (
    <AnimatedPage>
      <Grid container spacing={2}>
        <Grid item xl={1.5} lg={0.5}>
        </Grid>
        <Grid item xl={4} lg={5}>
          <Intro/>
        </Grid>
        <Grid item xl={5} lg={6}>
          <Bio/>
        </Grid>
      </Grid>
    </AnimatedPage>
  )
}

export function AboutMobile({id}) {
  return (
    <div>
      <Box id={id} sx={{
        height: "125vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        gap: "20px",
        marginTop: "40px",
        marginBottom: "40px"
      }}>
        <Box sx={{display:"flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
          <ReturnHomeButton/>
          <Typography variant="h3" sx={{color: "white", opacity: 0.8, fontFamily: "Monteserrat", fontSize: 30}}>
            About Myself
          </Typography>
        </Box>
        <IntroMobile/>
        <BioMobile/>
      </Box>
    </div>
  );
}

export default function About({id}) {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    isMobile ? <AboutMobile id={id}/> : <AboutDesktop/>
  )
}

