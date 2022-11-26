import React from 'react'
import AnimatedPage from './AnimatedPage'
import { contactList } from '../components/ProjectList'
import { Button, ButtonGroup, Box, Typography } from '@mui/material'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ReturnHomeButton } from '../components/HomeButton'

export default function Contact({id}) {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    isMobile ? <ContactMobile id={id}/> : <ContactDesktop/>
  )
}


export function ContactDesktop() {
  const [isCopied, setCopied] = useState(false);
  const onContactClick = (contact) => {
    if (contact.type === "email") {
      navigator.clipboard.writeText(contact.link);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000)
    } else {
      window.open(contact.link);
    }
  }
  return (
    <AnimatedPage>
      <Box sx={{display:"flex", flexDirection: "column", justifyContent: "center", marginTop: "150px"}}>
        <Typography align="center" variant='h3' sx={{color:"#2f294b", opacity: 0.8, textDecoration: "underline", fontSize: 40}}>
          Contact Me
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "50px", marginRight: "-40px"}}>
          <ButtonGroup variant="text" size="medium" color="primary" sx={{gap: "10px"}}>
            {contactList.map((contact) => {
              return (
                <button onClick={() => onContactClick(contact)} key={contact.id}>
                  <img src={contact.image} alt="logo" height="120px" width="120px" style={{borderRadius: "100px"}}/>
                  {(contact.type==="email" && isCopied) ? <Typography>Copied to Clipboard</Typography> : null}
                </button>
              )
            })}
          </ButtonGroup>
        </Box>
      </Box>
      
    </AnimatedPage>
    
  )
}

export function ContactMobile({id}) {
  const [isCopied, setCopied] = useState(false);
  const onContactClick = (contact) => {
    if (contact.type === "email") {
      navigator.clipboard.writeText(contact.link);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000)
    } else {
      window.open(contact.link);
    }
  }
  return (
    <Box id={id} sx={{
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      alignContent: "center",
      gap: "20px",
      marginTop: "50px"
    }}>
      <Box sx={{display: "flex", gap:"20px", alignItems: "center", marginTop: "40px" }}>
        <ReturnHomeButton/>
        <Typography variant="h3" sx={{color: "white", opacity: 0.8, fontFamily: "Monteserrat", fontSize: 30}}>
        Contact Me
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "80vw",
        height: "auto"
      }}>
        <ButtonGroup variant="text" size="medium" color="primary" sx={{gap: "15px"}}>
            {contactList.map((contact) => {
              return (
                <Button sx={{
                  borderRadius: "20px"
                }}
                  onClick={() => onContactClick(contact)} key={contact.id}
                >
                  <img src={contact.image} alt="logo" height="60px" width="60px" style={{borderRadius: "100px"}}/>

                  {(contact.type==="email" && isCopied) ? 
                  <Typography sx={{padding: "20px"}}>
                    Copied to Clipboard
                  </Typography> : null}
                </Button>
              )
            })}
        </ButtonGroup>

      </Box>
    </Box>
  );
}

