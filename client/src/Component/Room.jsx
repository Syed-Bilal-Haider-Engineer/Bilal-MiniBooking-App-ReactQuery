import React from "react";
import { Box, Typography } from "@mui/material";
import { Smallbutton } from "./Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Room({ rooms, image, firstdate, seconddate, days }) {
  const token = localStorage.getItem("tokenbook");
  const navigate = useNavigate();
  let { name, maxcount, phonenumber, roomtype } = rooms;
  console.log(image, "imageurls");
  const boxstyle = {
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    padding: "16px 16px",
    boxShadow: "0 5px 15px rgba(0,0,0,.35)",
  };
  const typoStyle = {
    fontSize: "16px",
    fontWeight: 700,
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const roomNavigateHandle = (id) => {
    if (token) {
      navigate(`/bookscreen/${id}/${firstdate}/${seconddate}/${days}`);
    } else {
      toast.error("please first login !");
    }
  };
  return (
    <Box>
      <Box
        style={boxstyle}
        sx={{
          width: "100%",
          backgroundColor: "background.secondary",
          color: "text.primery",
        }}
      >
        <Box>
          <img
            style={{ height: "210px", width: "100%", borderRadius: "10px" }}
            // src={rooms?.imageurls[0]}
            alt=""
          />
        </Box>
        <Box px={1}>
          <Typography
            sx={{
              fontSize: { md: "18px", xs: "14px" },
              mt: 1,
              overflow: "hidden",
              width: "100%",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name?.slice(0, 50)}
          </Typography>
          <Typography style={typoStyle}>
            Max count :
            <span style={{ fontSize: "14px", marginLeft: "5px" }}>
              {maxcount}
            </span>
          </Typography>
          <Typography style={typoStyle}>
            Phone number :
            <span style={{ fontSize: "14px", marginLeft: "5px" }}>
              {phonenumber}
            </span>
          </Typography>
          <Typography style={typoStyle}>
            Type :
            <span style={{ fontSize: "14px", marginLeft: "5px" }}>
              {roomtype}
            </span>
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            {firstdate && seconddate ? (
              <Smallbutton
                onClick={() => {
                  roomNavigateHandle(rooms?._id);
                }}
              >
                Buy Book
              </Smallbutton>
            ) : (
              ""
            )}
            <NavLink
              to={`/bootdetails/${rooms?._id}`}
              style={{
                textDecoration: "none",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Smallbutton>View Details</Smallbutton>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Room;
