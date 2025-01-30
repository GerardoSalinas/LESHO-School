import { Box, Typography, Divider, Container } from "@mui/joy"
import { CarousselSlider } from "../components/CarousselSlider/CarousselSlider";
import { mainGroup } from "./../components/CarousselSlider/groupMembersInfo"

export function Credits(){
  return (
    <Container
      sx={{
        display: "flex",
        width: "100vw",
        height: "70vh",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ width: "100%", marginX: { sm: '1vw', lg: '5vw' }  }}>
        <Typography variant="h6" component="h6" sx={{ color:'#1E1E1E' }}>
          Equipo Principal
        </Typography>
        <Divider />

        <CarousselSlider  items={mainGroup} />

      </Box>
    </Container>
  );
}