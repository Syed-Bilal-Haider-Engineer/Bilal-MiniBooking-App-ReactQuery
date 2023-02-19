import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import profile from "../../Component/images/profile.png";
// import userProfile from "../../../images/userProfile.png";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";




import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import banner from "../../Component/images/banner.jpg";


 const profilestyle = {
    width: "170px",
    height: "170px",
    borderRadius: "15px",
  };

export const AdminHeader = () => {

  const navigate = useNavigate();

  const array = [
    {
      name: "Facebook",
    
      icon: <FacebookIcon />,
      id: 1,
    },
    {
      name: "Instagram",
  
      icon: <InstagramIcon />,
      id: 2,
    },
    {
      name: "Twitter",

      icon: <TwitterIcon />,
      id: 3,
    },
    {
      name: "LinkedIn",
   
      icon: <LinkedInIcon />,
      id: 4,
    },
  ];
  

  return (
    <>
    
      <Box sx={{ width: "100%", mx: "auto", mt: { xs: 1, md: 10 } }}>
        <Box
          sx={{
            maxWidth: "95%",
            mx: "auto",
            borderRadius: "20px",
            mt: 3,
            "& .css-46bh2p-MuiCardContent-root": { padding: 0 },

            // boxShadow: 3,
            height: { xs: "500px", md: "450px" },
          
          }}
        >
          <Box
            sx={{
              position: "relative",
              backgroundImage:`url("${banner}")`,
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "-80px",
                textAlign: "center",
                left: "32px",
              }}
            >
              <Box
                sx={{
                  width: "176px",
                  height: "176px",
                  padding: "2px",
                  borderRadius: "18px",

                  background:
                    "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                }}
              >
                
                  <img
                    src={profile}
                    srcSet={profile}
                    style={profilestyle}
                    alt=""
                  />
             
              </Box>

              
            </Box>

           

          
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "25px",
                bottom: "-80px",
              }}
            >
              <Tooltip title="Edit" placement="top">
                <IconButton
                  sx={{
                    borderRadius: "5px",
                    background:
                      "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                    mr: 1,
                    mt: 1.5,
                  }}
                 
                >
                  <EditIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
          
            </Box>
          </Box>
          <Box sx={{ maxWidth:{xs:"200px",md:"500px"}, mt:{xs:12, md:3},ml:{xs:"32px",md:"270px"}, overflow:"hidden"}}>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight:"bold",
                  color:"text.primery"
                }}
              >
               Jon Smith
           
              </Typography>
            </Box>
        </Box>
      </Box>
    </>
  );
};
