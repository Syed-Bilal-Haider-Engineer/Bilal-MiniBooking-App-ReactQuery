import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, TextField, Checkbox } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSendPost } from "../Hooks/Hooks";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export default function Signup() {
  const routepath = "createuser";
  const [userstate, setUserstate] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordHideshow, setPasswordState] = React.useState(false);
  // custom hooks for post data
  const { mutate: sendValue } = useSendPost({ routepath });
  const changeHandler = (e) => {
    setUserstate({
      ...userstate,
      [e.target.name]: e.target.value,
    });
  };
  //Submit form, after filling the user form;
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userstate.name !== "" ||
      userstate.email !== "" ||
      userstate.password !== ""
    ) {
      sendValue(userstate);
    } else {
      toast.error("Please fill Signup form !");
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
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            value={userstate.name || ""}
            type="text"
            name="name"
            placeholder="Username"
            onChange={changeHandler}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
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
            type={passwordHideshow === false ? "password" : "text"}
            value={userstate.password || ""}
            onChange={changeHandler}
            name="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            onClick={passwordHideshowfunc}
            control={<Checkbox value="remember" color="primary" />}
            label="Show password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                {"Login"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
