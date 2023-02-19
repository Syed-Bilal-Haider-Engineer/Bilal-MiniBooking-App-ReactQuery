import { Box, Hidden } from "@mui/material";
import React from "react";
import Navbar from "./Component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/footer";
import Header from "./Component/Header";
export const Main = () => {
  return (
    <>
      <Hidden mdDown>
        <Navbar />
      </Hidden>
      <Hidden mdUp>
        <Header />
      </Hidden>
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light" ? "#ffffff" : "#3A3A3Aa1",
          minHeight: "100vh",
        })}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
