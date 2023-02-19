import React, { useState } from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import { TextInput } from "./InputStyle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSendPost } from "../Hooks/Hooks";
function Addrooms() {
  const [addrooms, setRoomstate] = useState({
    name: "",
    rentperday: "",
    maxcount: "",
    description: "",
    phonenumber: "",
    roomtype: "",
    imagurls1: "",
    imagurls2: "",
    imagurls3: "",
  });
  const routepath = "createRooms";
  const { mutate: sendValue } = useSendPost({ routepath });
  const inputOnChangeHanldes = (e) => {
    setRoomstate({ ...addrooms, [e.target.name]: e.target.value });
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    sendValue(addrooms);
    setRoomstate({
      name: "",
      rentperday: "",
      maxcount: "",
      description: "",
      phonenumber: "",
      roomtype: "",
      imagurls1: "",
      imagurls2: "",
      imagurls3: "",
    });
  };
  ////////////////////Input selections here///////////
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = ["All", "Delux", "Non-Delux"];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",

          alignItems: "center",
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
            Add rooms
          </Typography>
          <Box
            sx={(theme) => ({
              width: { xs: "1000", md: "60%", lg: "40%" },
              mx: "auto",
              padding: "30px 25px",
              backgroundColor: "background.inputBg",
              borderRadius: "10px",
              border:
                theme.palette.mode === "light"
                  ? "1px solid #000000"
                  : "1px solid #fff",
            })}
          >
            <Stack spacing={2}>
              <Box>
                <Typography sx={{ color: "text.primery" }}>Name</Typography>

                <TextInput
                  fullWidth
                  type="text"
                  value={addrooms.name || ""}
                  placeholder="Enter Hotal Name"
                  name="name"
                  onChange={inputOnChangeHanldes}
                  autoComplete="off"
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Rent-Per-Day
                </Typography>

                <TextInput
                  fullWidth
                  type="number"
                  value={addrooms.rentperday || ""}
                  placeholder="Enter Rent-Per-day"
                  onChange={inputOnChangeHanldes}
                  name="rentperday"
                  autoComplete="off"
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Max Count
                </Typography>

                <TextInput
                  fullWidth
                  type="number"
                  value={addrooms.maxcount || ""}
                  placeholder="Enter Maxcount"
                  onChange={inputOnChangeHanldes}
                  name="maxcount"
                  autoComplete="off"
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Phone Number
                </Typography>

                <TextInput
                  fullWidth
                  type="number"
                  value={addrooms.phonenumber || ""}
                  placeholder="Enter Phone Number"
                  onChange={inputOnChangeHanldes}
                  name="phonenumber"
                  autoComplete="off"
                />
              </Box>

              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Discription
                </Typography>
                <TextInput
                  fullWidth
                  type="text"
                  value={addrooms.description || ""}
                  placeholder="Enter Eescriptions"
                  onChange={inputOnChangeHanldes}
                  name="description"
                  autoComplete="off"
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Image Url
                </Typography>

                <TextInput
                  fullWidth
                  type="text"
                  value={addrooms.imagurls1 || ""}
                  placeholder="Enter Image URL"
                  onChange={inputOnChangeHanldes}
                  name="imagurls1"
                  autoComplete="off"
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Image Url 2
                </Typography>

                <TextInput
                  fullWidth
                  type="text"
                  value={addrooms.imagurls2 || ""}
                  placeholder="Enter Image URL"
                  onChange={inputOnChangeHanldes}
                  name="imagurls2"
                  autoComplete="off"
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primery" }}>
                  Image Url 3
                </Typography>

                <TextInput
                  fullWidth
                  type="text"
                  value={addrooms.imagurls3 || ""}
                  placeholder="Enter Image URL"
                  onChange={inputOnChangeHanldes}
                  name="imagurls3"
                  autoComplete="off"
                />
              </Box>
            </Stack>
            <FormControl sx={{ mt: 1, width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                value={addrooms.roomtype || ""}
                onChange={inputOnChangeHanldes}
                input={<OutlinedInput label="Types" />}
                MenuProps={MenuProps}
                name="type"
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} color="black">
                    <Typography color="black">{name}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            ></Box>

            <Button
              onClick={onSubmitHandle}
              sx={{
                width: "100%",
                my: 1,
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
    </>
  );
}

export default Addrooms;
