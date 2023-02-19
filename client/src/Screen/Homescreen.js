import React, { useState } from "react";
import Loading from "../Component/Loading";
import Room from "../Component/Room";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useCustomhook } from "../Component/Hooks/Hooks";
import { DateRangePicker, Grid } from "rsuite";
import moment from "moment";
import "rsuite/dist/rsuite.css";
import Comingsoon from "../Component/Modal/Modal";
import homebg from "../Component/images/homebg.jpg";
import SpacingGrid from "../grid";
function Homescreen() {
  let route = "getpost";
  let method = "GET";
  const { isLoading, data, isError, isFetching } = useCustomhook({
    route,
    method,
  });
  const [allData, setAlldata] = useState([]);

  // console.log("data here:", data);
  const [time, setTimestate] = useState("");
  const [firstdate, setFirststate] = useState("");
  const [seconddate, setSecondstate] = useState("");
  const [diff, setDiffstate] = useState("");
  const [searchValue, searchState] = React.useState("All");
  if (isLoading || isFetching) {
    return <Loading loading={true} />;
  }
  if (isError) {
    return <Comingsoon />;
  }
  const boxstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    padding: "10px 10px",
    boxShadow: "0 5px 15px rgba(0,0,0,.35)",
  };
  const defaultValue = {
    start: null,
    end: null,
  };

  // ..............................Range start here....................
  const setTimeHandle = (time) => {
    const firstday = moment?.utc(time[0])?.format("X") || "";
    const secondday = moment?.utc(time[1])?.format("X") || "";
    let days = (+secondday - +firstday) / 86400;
    setDiffstate(days);
    setSecondstate(moment(time[1])?.format("DD-MM-YYYY"));
    setFirststate(moment(time[0])?.format("DD-MM-YYYY"));
  };
  // .......................Range date end .......................

  const filterHandle = (event) => {
    searchState(event.target.value);
    const value = event.target.value?.toLowerCase();
    let result;
    if (value !== "All") {
      result = allData?.data?.filter((items) => {
        return items?.type?.toLowerCase().includes(value);
      });
      console.log("result", result);
      // setAlldata(result);
    } else {
      // setAlldata(allData);
    }
  };

  console.log("rooms data:", allData);
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          alignItems: "start",
          backgroundImage: `url('${homebg}')`,
          backgroundRepeat: "no-repate",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ pt: "70px" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "35px" },
                fontWeight: "bold",
                color: "white",
              }}
            >
              Find Hotels in Dubai, United Arab Emirates
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", md: "25px" }, color: "white" }}
            >
              15801 vacation rentals and hotels available now
            </Typography>
          </Box>
          <Box
            style={boxstyle}
            sx={{
              width: {
                md: "70%",
                xs: "100%",
              },
              mx: "auto",
              zIndex: 0.1,
              border: "1px solid yellow",
              mt: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mr: 2, width: "100%" }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { fontSize: 15, color: "white" } }}
                inputProps={{ style: { fontSize: 15, color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </Box>

            <DateRangePicker
              value={time}
              placeholder="Select Date Range"
              cleanable={true}
              editable={true}
              format="yyyy-MM-dd"
              default={defaultValue}
              onChange={setTimeHandle}
            />
          </Box>
        </Box>
      </Container>

      <Box sx={{ width: "95%", mx: "auto", py: 5 }}>
        <SpacingGrid data={data} />
      </Box>
    </>
  );
}

export default Homescreen;
