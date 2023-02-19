import React from "react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { IconButton, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { useTheme } from "@emotion/react";
import HomeIcon from "@mui/icons-material/Home";
import { ColorModeContext } from "../theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const array = [
  {
    name: "Home",
    link1: "/",
    icon: <HomeIcon />,
  },
  {
    name: "About",
    link1: "/about",

    icon: <InfoIcon />,
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000000 !important",
    justifyContent: "flex-start",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header({ children }) {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      width: "45px",
      fontSize: "20px",
      marginLeft: "10px",
      color: isActive
        ? "#ffffff"
        : theme.palette.mode === "light"
        ? "#000000"
        : "#ffffff",

      display: "flex",
      gap: "20px",
      alignItems: "center",

      background: isActive
        ? "linear-gradient(90.1deg, #4F98D0 0.11%, #4F98D0 95.94%)"
        : "",
    };
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
      <br />

      <List sx={{ mt: 5 }}>
        {array.map(({ icon, link1, name }, index) => {
          return (
            <>
              <NavLink to={link1} key={index} style={styledactivelink}>
                {icon}

                <Typography
                  sx={(theme) => ({
                    color: theme.palette.mode === "light" ? "#000" : "#ffffff",
                  })}
                >
                  {name}
                </Typography>
              </NavLink>
            </>
          );
        })}
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="55px"
        width="100%"
        sx={{ backgroundColor: "background.secondary", boxShadow: 2 }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Hidden mdUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        sx={(theme) => ({
                          fontSize: "25px",
                          cursor: "pointer",
                          mr: 3,
                          color:
                            theme.palette.mode === "light" ? "#000" : "#fff",
                        })}
                      />
                    </Button>
                    <Box>
                      <IconButton
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                      >
                        {theme.palette.mode === "dark" ? (
                          <Brightness7Icon />
                        ) : (
                          <Brightness4Icon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}

                      <Box sx={{ mb: 2 }}>
                        <NavLink to="/profile" style={styledactivelink}>
                          <PersonIcon />
                          <Typography
                            sx={(theme) => ({
                              color:
                                theme.palette.mode === "light"
                                  ? "#000"
                                  : "#ffffff",
                            })}
                          >
                            Profile
                          </Typography>
                        </NavLink>
                      </Box>
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
}
