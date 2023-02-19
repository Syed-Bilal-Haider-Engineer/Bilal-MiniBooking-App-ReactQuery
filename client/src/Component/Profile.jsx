import React, { useState } from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import profile from "./images/profile.svg";
import { useCustomhook, useSendPost } from "./Hooks/Hooks";
import Loading from "./Loading";
import profileBg from "../Component/images/profileBg.jpg";
import TextInput from "./Userauth/Input";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function Profile({ id }) {
  let route = `getuser/${id}`;
  let method = "GET";
  let routepath = "userprofileupdate";
  const { isLoading, data, isError, error, isFetching } = useCustomhook({
    route,
    method,
  });
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    description: "",
    phonenumber: "",
  });
  React.useEffect(() => {
    setUserProfile({
      ...userProfile,
      name: data?.name,
      email: data?.email,
      description: data?.description || "",
      phonenumber: data?.phonenumber || "",
    });
  }, [data]);

  const changeHandle = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const { mutate: sendValue } = useSendPost({ routepath });
  if (isLoading || isFetching) {
    return <Loading loading={true} />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  const { name, email, role } = data;
  console.log("data here user profile:", data);
  const updateProfile = (e) => {
    e.preventDefault();
    if (
      userProfile.name !== "" ||
      userProfile.email !== "" ||
      userProfile.description !== ""
    ) {
      sendValue({ ...userProfile, id });
    } else {
      toast.error("Please fill Signup form !");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 4,
          px: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "50px",
            borderRadius: "9px",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              mr: 3,
              mt: { xs: 5, md: 0 },
              boxShadow: 2,
              height: { xs: "540px", md: "400px" },
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,

                  width: "100%",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "20px",
                      paddingBottom: "20px",
                      color: "text.primery",
                      fontWeight: 700,
                    }}
                  >
                    Edit Profile
                  </Typography>
                  <Box
                    sx={(theme) => ({
                      mx: "auto",
                      padding: "30px 25px",
                      backgroundColor: "background.inputBg",
                      borderRadius: "10px",
                    })}
                  >
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                          <Typography sx={{ color: "text.primery" }}>
                            Name
                          </Typography>

                          <TextInput
                            fullWidth
                            type="text"
                            placeholder="Enter Username"
                            name="name"
                            autoComplete="off"
                            value={userProfile?.name}
                            onChange={changeHandle}
                          />
                        </Box>
                        <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                          <Typography sx={{ color: "text.primery" }}>
                            Email
                          </Typography>

                          <TextInput
                            fullWidth
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            autoComplete="off"
                            value={userProfile?.email}
                            onChange={changeHandle}
                          />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                          <Typography sx={{ color: "text.primery" }}>
                            Discription
                          </Typography>

                          <TextInput
                            fullWidth
                            type="text"
                            placeholder="Enter Discription"
                            name="description"
                            autoComplete="off"
                            value={userProfile?.description}
                            onChange={changeHandle}
                          />
                        </Box>
                        <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                          <Typography sx={{ color: "text.primery" }}>
                            Phone Number
                          </Typography>

                          <TextInput
                            fullWidth
                            type="number"
                            placeholder="Enter Phone Number"
                            name="phonenumber"
                            autoComplete="off"
                            value={userProfile?.phonenumber}
                            onChange={changeHandle}
                          />
                        </Box>
                      </Box>
                    </Stack>

                    <Button
                      onClick={updateProfile}
                      sx={{
                        width: "100%",
                        my: 2,
                        py: 1.5,
                        color: "white",
                        backgroundColor: "#1976D2",
                        "&:hover": {
                          backgroundColor: "#1956D2",
                        },
                      }}
                      value="submit"
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              background: "background.secondary",
              boxShadow: 2,
              borderRadius: "10px",
              pb: 3,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url("${profileBg}")`,
                height: "150px",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                opacity: 0.9,
                position: "relative",
                borderRadius: "10px 10px 0px 0px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50px",
                  left: "50%",
                  transform: "translate(-50%, 20%)",

                  backgroundColor: "background.secondary",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={profile}
                  style={{ width: "120px", height: "120px" }}
                  alt="Profile"
                />
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", mt: 12, color: "text.primery" }}>
              <Typography variant="body2">{name}</Typography>
              <Typography variant="body2">{email}</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Typography>Role</Typography>
                <Typography>{role}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Typography>Admin access</Typography>
                <Typography>{role === "admin" ? "Yes" : "No"}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
