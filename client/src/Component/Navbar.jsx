import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../Component/images/logo2.png";
function Navbar() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const name = localStorage.getItem("name");
  return (
    <Box
      sx={{
        backgroundColor: "background.secondary",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        boxShadow: 2,
      }}
    >
      <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
        <img
          src={logo}
          alt="logo"
          srcSet=""
          style={{ width: "40px", height: "40px" }}
        />
      </NavLink>
      <Box
        sx={{
          display: "flex ",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} direction="row" sx={{ color: "text.primery" }}>
          <Typography>Home</Typography>
          <Typography>Service</Typography>
          <Typography>Trip</Typography>
          <Typography>About</Typography>
        </Stack>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <NavLink
          to="/Signup"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button variant="contained" sx={{ mr: 3 }}>
            Sign Up
          </Button>
        </NavLink>
        {name ? (
          <NavLink
            to="/profile"
            style={{ color: "black", textDecoration: "none" }}
          >
            Profile
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
          </NavLink>
        )}
      </Box>

      <IconButton
        sx={(theme) => ({
          ml: 1,
          color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
        })}
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
  );
}

export default Navbar;
