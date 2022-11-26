import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import AnimatedPage from '../pages/AnimatedPage';
import { AnimatedPC } from '../pages/AnimatedPage';


const theme = createTheme({
    typography: {
        fontFamily: `Ubuntu mono, monospace`,
        h1: {
            fontSize: '10rem',
            color: 'white',
        },
        h2: {
            fontSize: '5rem',
            color: 'white',
        }
    }
})

export function HomeNameMobile() {
    return (
        <AnimatedPage>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '14vh',
                marginLeft: '12vw',
                justifyContent: "flex-start",
                height: "80vh",
                width: "90vw"
            }}>
                <Paper sx={{backgroundColor: 'transparent', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",  marginLeft: "3vw", marginRight: "4vw"}} elevation={0}>
                    <Box sx={{display: "flex", justifyContent: "flex-start", gap: "20px", alignContent: "center"}}>
                        <Typography variant="h1" theme={theme} sx={{fontSize: 100, flex: "1 3 auto"}}>
                            Ryan Phua
                        </Typography>
                    </Box>
                    
                    <Typography variant="h2" theme={theme} sx={{fontSize: 45, flexWrap: "wrap"}}>
                        Frontend & Backend Developer.
                    </Typography>
                    
                </Paper>
            </Box>
        </AnimatedPage>
    )
}

export default function HomeName() {
    return (
        <AnimatedPage>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Paper sx={{backgroundColor: 'transparent', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start"}} elevation={0}>
                    <Typography variant="h1" theme={theme}>
                        Ryan Phua
                    </Typography>
                    <Typography variant="h2" theme={theme} sx={{ fontSize: 50}}>
                        Frontend & Backend Developer.
                    </Typography>

                </Paper>
            </Box>
        </AnimatedPage>
    )
}
