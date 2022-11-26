import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Drawer, Button, Divider, IconButton } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Background from "../../resources/background.jpg"

const Bio = () => {
  return (
    <Card sx={{
        border: '4px solid #c57be0',
        borderRadius: '100px',
        backgroundColor: '#e8edea',
        opacity: "0.8",
        maxHeight: "85vh"
    }}>
        <CardContent sx={{display: "flex",
        flexDirection: "column", justifyContent: "center"}}>
            <Typography variant="h4" align="center" sx={{border: "2px solid #c57be0", borderRadius: "300px", width: "30%", alignSelf: "center", backgroundColor: "transparent", fontSize: 30}}>
              Bio
            </Typography>
            <Typography variant="h5" align="center" sx={{margin: '20px', opacity: "1", fontSize: 21}}>
            I am currently a junior pursuing a B.S in Computer Science at UCLA. Software engineering and its endless possibilities for growth inspires my passion for learning. <br></br><br></br>
            My affinity for new knowledge helped me thrive in situations where I had no prior understanding of the source material. In 2020, I worked at a defense contract firm where I learnt to code custom distributed training protocols that parallelized training of deep-learning models across 4 separate GPU systems. Prior to this, I had zero experience with artificial intelligence. <br></br><br></br>
            Currently, my quest for growth has taken me down the path of web development, where I thoroughly enjoy exploring and learning about new open-sourced frameworks like Next.js.
            </Typography>
        </CardContent>
    </Card>
  )
}

export const BioMobile = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    // open is a boolean that tells us whether the drawer is open
    setState(open);
  }
  const contents = () => {
    return (
      <Typography variant="h5" align="center" sx={{fontSize: 20, backgroundColor: "#e69acb", padding: "10px", opacity: 0.8}}>
        My affinity for new knowledge helped me thrive in situations where I had no prior understanding of the source material. In 2020, I worked at a defense contract firm where I learnt to code custom distributed training protocols that parallelized training of deep-learning models across 4 separate GPU systems. Prior to this, I had zero experience with artificial intelligence. <br></br><br></br>
        Currently, my quest for growth has taken me down the path of web development, where I thoroughly enjoy exploring and learning about new open-sourced frameworks like Next.js.
      </Typography>
    )
  }
  return (
    <Card sx={{
      border: '4px solid #c57be0',
      borderRadius: '100px',
      backgroundColor: '#e8edea',
      justifyContent: "center",
      opacity: "0.8",
      maxHeight: "70%",
      maxWidth: "88%",
      height: "60%"
    }}>
        <CardContent sx={{display: "flex",
        flexDirection: "column", justifyContent: "center"}}>
            <Typography variant="h4" align="center" sx={{border: "1px solid #c57be0", borderRadius: "100px", width: "50%", alignSelf: "center", backgroundColor: "transparent", fontSize: 20}}>
              Bio
            </Typography>
            <Typography variant="h5" align="center" sx={{margin: '20px', opacity: "1", fontSize: 20}}>
            I am currently a junior pursuing a B.S in Computer Science at UCLA. Software engineering and its endless possibilities for growth inspires my passion for learning.
            </Typography>
            <Typography variant="body1" align="center" sx={{fontSize: 16}}>
              Click to read more
            </Typography>
            <IconButton onClick={toggleDrawer(true)} sx={{width: "50px", height: "50px", alignSelf: "center", backgroundColor: "#c57be0", border: "1px solid #c57be0"}}>
              <KeyboardDoubleArrowDownIcon/>
            </IconButton>
            <Drawer
              anchor="bottom"
              open={state}
              onClose={toggleDrawer(false)}
              sx={{backgroundImage:`url(${Background})`}}
            >
              {contents()}
            </Drawer>
        </CardContent>
    </Card>
  )
}

export default Bio