import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Avatar, Button } from '@mui/material'
import Logos from "../../resources/Logos.png"
import ProfilePic from "../../resources/profilepic.png"
import Resume from '../../resources/resume.pdf'

const Intro = () => {
    const onResumeClick = () => {
        window.open(Resume);
    }
  return (
    <Card sx={{
        border: '4px solid #c57be0',
        borderRadius: '100px',
        backgroundColor: '#e8edea',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        opacity: "0.85",
        maxHeight: "85vh",
        height: "auto"
    }}>
        <CardContent>
            <Box sx={{display: 'flex', marginTop: "10%"}}>
                <Avatar alt="ProfilePic" src={ProfilePic} sx={{width: 170, height: 170, paddingLeft: "10px", paddingRight: "5px"}}/>
                <Card sx={{
                    border: '4px solid #98e39d',
                    borderRadius: '100px',
                    backgroundColor: '#98e39d',
                    opacity: "1"
                    }}>
                    <CardContent>
                        <Typography variant="h5" align="center" sx={{padding: '10px', fontSize: 23}}>
                        Currently Looking for a Summer 23 Internship!
                        </Typography>
                        <Typography variant="body1" align="center">
                        Click the link below to view my Resume 🠟
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '10px' }}>
                        <Button size="small" sx={{color: 'black', width: '100px', border: '4px solid green', fontSize: 16, fontFamily: 'serif', marginBottom: "10px"}} onClick={onResumeClick}> Resume </Button>
                    </Box>
                </Card>
            </Box>
            <Typography variant="body2" align="center" sx={{margin: '20px', fontSize: 22}}>
            • Fullstack web developer based in Los Angeles, California <br></br> 
            • 2-3 years of experience with frontend & backend development
            </Typography>
            <Typography variant="h5" align="center" sx={{fontSize: 16}}>
                Key Technologies & Frameworks:
            </Typography>
        </CardContent>
        <CardMedia
            component="img"
            alt="logos"
            image={Logos}
            sx = {{width: "60%", alignSelf: "center", paddingBottom: "30px"  }}
        />
    </Card>
  )
}

export const IntroMobile = () => {
    const onResumeClick = () => {
        window.open(Resume);
    }
  return (
    <Card sx={{
        border: '4px solid #c57be0',
        borderRadius: '100px',
        backgroundColor: '#e8edea',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        opacity: "0.8",
        maxWidth: "88%",
        height: "90%"
    }}>
        <CardContent sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant="body2" align="center" sx={{fontSize: 23}}>
            • Fullstack web developer based in Los Angeles, California <br></br> 
            • 2-3 years of experience with frontend & backend development 
            </Typography>
            <br></br>
            <Typography variant="h5" align="center" sx={{fontSize: 17, border: "1px solid #c57be0", borderRadius: "100px", width: "50%", alignSelf: "center", padding: "5px"}}>
                Key Technologies & Frameworks:
            </Typography>
        </CardContent>
        <CardMedia
            component="img"
            alt="logos"
            image={Logos}
            sx = {{width: "50%", alignSelf: "center", paddingBottom: "10px"  }}
        />
        <Box sx={{display: "flex", justifyContent: "center", paddingBottom: "2.5vh", marginRight: "-5px"}}>
            <Card sx={{
                    border: '4px solid #98e39d',
                    borderRadius: '100px',
                    backgroundColor: '#98e39d',
                    opacity: "1",
                    maxWidth: "80%",
                    maxHeight: "90%"
                    }}>
                    <CardContent>
                        <Typography variant="h6" align="center" sx={{padding: '5px', fontSize: 19}}>
                        Currently Looking for a Summer 23 Internship!
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '5px'}}>
                        <Button size="small" sx={{color: 'black', width: '150px', border: '4px solid green', fontSize: 16, fontFamily: 'serif', marginTop: "-15px", marginBottom: "10px"}} onClick={onResumeClick}> Resume </Button>
                    </Box>
            </Card>
        </Box>
    </Card>
  )
}

export default Intro