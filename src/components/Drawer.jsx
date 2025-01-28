import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import { useNavigate, useLocation } from 'react-router';
import ListItemButton from '@mui/joy/ListItemButton';
import Menu from '@mui/icons-material/Menu';


export  function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <IconButton
        color="neutral"
        onClick={() => setOpen(true)}
        sx={{
          position: "absolute",
          right: "0.5rem",
          top: "1rem",
        }}
      >
        <Menu sx={{ color: "#FFF9F9", filter: 'drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)' }} />
      </IconButton>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        size="sm"
        disableAutoFocus="false"
      >
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            justifyContent: "center",
            height: "100%",
            alignContent: "center",
            background: "linear-gradient(to top, #063180, #0B58E6)",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton
            onClick={() => {
              // console.log(location.pathname)
              setOpen(false)
              navigate('/')
            }}
            sx={{
              fontWeight: location.pathname === '/' ?  "lg" : "regular" ,
              color: "#FFFFFF",
              filter: "drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)",
            }}
          >
            General
          </ListItemButton>
          <ListItemButton
            onClick={() => { 
              setOpen(false)
              navigate('/alfabeto')
            }}
            sx={{
              fontWeight: location.pathname === '/alfabeto' ?  "lg" : "regular" ,
              color: "#FFFFFF",
              filter: "drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)",
            }}
          >
            Alfabeto
          </ListItemButton>
          <ListItemButton
          onClick={() => {
            setOpen(false)
            navigate('/frases')
          }}
            sx={{
              fontWeight: location.pathname === '/frases' ?  "lg" : "regular" ,
              color: "#FFFFFF",
              filter: "drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)",
            }}
          >
            Frases
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpen(false)
              navigate('/FAQ')
            }}
            sx={{
              fontWeight: location.pathname === '/FAQ' ?  "lg" : "regular" ,
              color: "#FFFFFF",
              filter: "drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)",
            }}
          >
            FAQ
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpen(false)
              navigate('/creditos')
            }}
            sx={{
              fontWeight: location.pathname === '/creditos' ?  "lg" : "regular" ,
              color: "#FFFFFF",
              filter: "drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)",
            }}
          >
            Créditos
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
