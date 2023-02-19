import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSendPost } from "../Hooks/Hooks";
import { toast } from "react-toastify";
export default function SignIn({ id }) {
  let routepath = "login";
  const [userstate, setUserstate] = React.useState({
    email: "",
    password: "",
  });
  const [passwordHideshow, setPasswordState] = React.useState(false);
  const { mutate: sendValue } = useSendPost({ routepath });
  const changeHandler = (e) => {
    setUserstate({
      ...userstate,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userstate.email !== "" || userstate.password !== "") {
      sendValue(userstate);
    } else {
      toast.error("please fill form !");
      return false;
    }
  };
  const passwordHideshowfunc = () => {
    setPasswordState(!passwordHideshow);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "text.primery" }}>
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            value={userstate.email || ""}
            type="email"
            name="email"
            onChange={changeHandler}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type={passwordHideshow ? "text" : "password"}
            value={userstate.password || ""}
            onChange={changeHandler}
            placeholder="Password"
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            onClick={passwordHideshowfunc}
            control={<Checkbox value="remember" color="primary" />}
            label="show password"
          />
          <Button
            onClick={submitHandler}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/Signup" style={{ textDecoration: "none" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// import IconButton from "@mui/material/IconButton";
// import { Typography, Box, Button, FormControl } from "@mui/material";
// import { useSendPost } from "../Hooks/Hooks";
// import TextInput from "./Input";
// function Login({ id }) {
//   console.log("user id:", id);

//   return (
//     <>

//       <Box
//         sx={{
//           py: 2,
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           align: "center",
//         }}
//       >
//         <FormControl
//           sx={{
//             width: "25%",
//             height: "330px",
//             border: "1px solid red",
//             backgroundColor: "#101010",
//             p: 2,
//             py: 3,
//             mt: 6,
//             borderRadius: "5px",
//           }}
//         >
//           <Box sx={{ width: "100%" }}>
//             <Typography
//               sx={{
//                 textAlign: "center",
//                 fontSize: "20px",
//                 paddingBottom: "20px",
//                 color: "white",
//                 fontWeight: 700,
//               }}
//             >
//               Login
//             </Typography>
//             <Box
//               sx={{
//                 width: "100%",
//               }}
//             >
//               <TextInput
//                 fullWidth
//                 autoComplete="false"

//                 required
//               />

//               <TextInput
//                 fullWidth
//
//                 autoComplete="off"
//                 endAdornment={
//                   <IconButton
//                     style={{
//                       backgroundColor: "#D9D9D9",
//                       height: "47px",
//                       marginTop: "12px",
//                       borderTopRightRadius: "5px",
//                       borderTopLeftRadius: "5px",
//                       borderBottomRightRadius: "5px",
//                       borderBottomLeftRadius: "0px",
//                       pl: 2,
//                       marginLeft: "-7px",
//                     }}
//
//                   >
//                     {passwordHideshow ? <Visibility /> : <VisibilityOff />}
//                   </IconButton>
//                 }
//                 required
//               />
//               <br />
//               <Button
//
//                 sx={{
//                   width: "100%",
//                   mt: 2,
//                   py: 1.5,
//                   color: "black",
//                   backgroundColor: "white",
//                   "&:hover": {
//                     backgroundColor: "secondary.main",
//                   },
//                 }}
//                 value="submit"
//               >
//                 Submit
//               </Button>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-around",
//                 textAlign: "center",
//                 mt: 2,
//               }}
//             >

//
//                 <Typography
//                   variant="body1"
//                   component="span"
//                   fontWeight="700"
//                   color="white"
//                   borderBottom="1px solid #D9D9D9"
//                   sx={{ cursor: "pointer" }}
//                 >
//                   Signup
//                 </Typography>
//               </NavLink>
//             </Box>
//           </Box>
//         </FormControl>
//       </Box>
//     </>
//   );
// }

// export default React.memo(Login);
