import { Box, Typography, Divider, Container } from "@mui/joy"
import { CarousselSlider } from "../components/CarousselSlider/CarousselSlider";
import { mainGroup } from "./../components/CarousselSlider/groupMembersInfo"

export function Credits(){
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: 'column',
        width: "100vw",
        height: "79vh",
        justifyContent: 'space-evenly',
      }}
    >
      <Box sx={{ width: "100%", marginX: { sm: '1vw', lg: '5vw' }  }}>
        <Typography variant="h6" component="h6" sx={{ color:'#1E1E1E', fontSize: '1.3rem' }}>
          Equipo Principal
        </Typography>
        <Divider />
        <CarousselSlider  items={mainGroup} delay={3000} />
      </Box>
      <Box sx={{ width: "100%", marginX: { sm: '1vw', lg: '5vw' }  }}>
        <Typography variant="h6" component="h6" sx={{ color:'#1E1E1E', fontSize: '1.3rem' }}>
          Equipo Secundario 
        </Typography>
        <Divider />
        <CarousselSlider  items={mainGroup} delay={3600} />
      </Box>
    </Container>
  );
}