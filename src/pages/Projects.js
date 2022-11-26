import React from 'react'
import AnimatedPage from './AnimatedPage'
import { Grid, Card, CardContent, CardMedia, Typography, Box, Button, CardActionArea } from '@mui/material'
import { projectList } from '../components/ProjectList'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ReturnHomeButton } from '../components/HomeButton'

export default function Projects({id}) {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    isMobile ? <ProjectsMobile id={id}/> : <ProjectsDesktop/>
  )
}

export function ProjectsDesktop() {
  return (
    <AnimatedPage>
      <Box sx={{marginLeft: '2.5vw', opacity: "0.9"}}>
        <Grid container rowSpacing={{ xl: 0, lg: 0}}>
          {projectList.map((project) => {
            return (
              <Grid item xl={4} lg={4} key={project.id}>
                <Card sx={{
                  border: '4px solid #c57be0',
                  borderRadius: '100px',
                  backgroundColor: '#e8edea',
                  width: '28vw',
                  height:'auto'
              }}>
                  <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Typography variant="h6" align="center" sx={{border: "2px solid #eebbdc", borderRadius: "100px", width: "80%", alignSelf: "center", backgroundColor: "#eebbdc", fontSize: 25, marginTop: "20px", marginBottom: "20px"}}>
                      {project.name}
                    </Typography>
                    {project.content.map((line) => {
                      return (
                        <Typography variant="h5" align="center" sx={{padding: "10px", marginTop: "10px", fontSize: 21}}>
                          • {line}
                        </Typography>
                      )
                    })}

                    <Typography variant="body1" align="center">Link to Github Repository ⬇</Typography>
                    <Button sx={{width: "60%", height: "15%", alignSelf: "center", padding: 0, margin: "20px"}} onClick={() => {window.open(project.github)}}>
                      <img src={project.image} alt="Logo" height="80%" width="90%"/>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </AnimatedPage>
    
  )
}

export function ProjectsMobile({id}) {
  return (
    <Box id={id} sx={{
      height: "115vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      alignContent: "center",
      gap: "20px"
    }}>
      <Box sx={{display: "flex", gap:"20px", alignItems: "center", marginTop: "40px" }}>
        <ReturnHomeButton/>
        <Typography variant="h3" sx={{color: "white", opacity: 0.8, fontFamily: "Monteserrat", fontSize: 30}}>
        Projects
        </Typography>
      </Box>
      
      {projectList.map((project) => {
        return (
          <Card sx={{
            border: '4px solid #c57be0',
            borderRadius: '100px',
            backgroundColor: '#e8edea',
            width: '85vw',
            height:'auto',
            opacity: 0.85
            }}>
              <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                <Typography variant="h6" align="center" sx={{
                  border: "1px solid #eebbdc",
                  borderRadius: "100px",
                  width: "auto", 
                  backgroundColor: "#eebbdc", 
                  fontSize: 20,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}>
                  {project.name}
                </Typography>
                <Typography align="center" sx={{margin: "10px"}}>
                • {project.content[0]}
                </Typography>
                <Typography variant="h6" align="center" sx={{fontSize: 16}}>
                  Github Link ⬇
                </Typography>
                <Button 
                  sx={{
                    width: "80px", 
                    height: "50px", 
                    alignSelf: "center",
                    borderRadius: "20%",
                    border: "3px solid #c57be0",
                    padding: 0
                  }} 
                  onClick={() => {window.open(project.github)}}
                  variant="text"
                >
                  <img src={project.image} alt="Logo" height="100%" width="100%" style={{borderRadius: "20%"}}/>
                </Button>  
              </CardContent>
        </Card>
        )
      })}
      
    </Box>
  );
}

