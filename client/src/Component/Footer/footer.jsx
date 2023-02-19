import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import footerBg from "../../Component/images/footerBg.png";
import footerimg from "../../Component/images/footerimg.png";
import footerLogo from "../../Component/images/footerLogo.png";
import footer from "../../Component/images/footer.jpg";
import logo2 from "../../Component/images/logo2.png";
import { color, styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const Text = styled(Typography)(({ theme }) => ({
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "18px",
    color: "#FFFFFF",
    marginTop: "1px ",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginTop: "30px",
    },
  }));

  const IconStyle = styled(Box)({
    backgroundColor: "#00D2BA",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    boxShadow:
      "inset -4px 4px 4px rgba(255, 255, 255, 0.25), inset 5px -4px 4px rgba(0, 0, 0, 0.25)",
    filter: "drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.3))",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
  });
  return (
    <Box
      sx={{
        backgroundImage: `url(  ${footer})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        py: 12,
        height: "350px",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(179.04deg, rgba(79, 152, 208, 0.2) 0.89%, rgba(52, 217, 177, 0.2) 40.03%, rgba(0, 0, 0, 0) 97.17%)",
        }}
      ></Box>
      <Box
        sx={{
          mx: "auto",
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo2}
          alt=""
          srcSet=""
          style={{ width: "100px", height: "100px" }}
        />
        <Box>
          <Stack spacing={2} direction="row" sx={{ color: "white" }}>
            <Typography>Home</Typography>
            <Typography>Service</Typography>
            <Typography>Contant</Typography>
            <Typography>About</Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={3} direction="row" sx={{ color: "white" }}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Stack>
          <Typography sx={{ textAlign: "center", mt: 5, color: "white" }}>
            {" "}
            All rights reserved @metacubez nft 2023
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mx: "auto",
          width: { xs: "90%", md: "50%" },
          mx: "auto",
          mt: 5,
          textAlign: "center",
          color: "white",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        architecto sapiente non, qui amet iste magnam quibusdam ab assumenda vel
        illo at accusantium laborum commodi facilis modi dignissimos
        necessitatibus. Magni.
      </Box>
    </Box>
  );
};

export default Footer;
