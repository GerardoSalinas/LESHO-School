import { Box } from "@mui/joy"
import { DrawerMobileNavigation } from "./Drawer"

export function NavBar(){
    return (
      <Box
        sx={{
          background: "linear-gradient(to right, #0B58E6, #063180)",
          width: "100vw",
          height: "10vh",
          position: "fixed",
          boxSizing: 'border-box',
          top: "0px",
          left: "0px",
          filter: 'drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)'
        }}
      >
        <DrawerMobileNavigation sx={{

        }} />
      </Box>
    );
}