import { Box, Typography } from "@mui/joy"

export function Footer(){
    return (
        <Box sx={{ position: 'fixed', bottom: '0px', width: '100vw', backgroundColor: 'white', padding: '2rem' }} >
            <Typography>Footer!</Typography>
        </Box>
    )
}