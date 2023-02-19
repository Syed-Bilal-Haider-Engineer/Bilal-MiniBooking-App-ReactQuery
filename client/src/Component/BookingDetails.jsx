import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useCustomhook, useSendPost } from "./Hooks/Hooks";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";
function BookingDetails({ id }) {
  const [dataState, setDataState] = useState([]);
  let route = `booksdetails/${id}`;
  let method = "GET";
  const { isLoading, data, isError, error, isFetching } = useCustomhook({
    route,
    method,
  });
  useEffect(() => {
    setDataState(data?.data);
  }, [data?.data]);
  console.log("data booking details", data);
  //////Order canceled function ///////////
  const routepath = "orderCancelBook";
  const { mutate: sendValue } = useSendPost({ routepath });
  if (isLoading || isFetching) {
    return <Loading loading={true} />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  const orderCancelHadnling = (id) => {
    sendValue({ id });
  };

  return (
    <>
      {dataState?.length > 0 ? (
        dataState?.map(
          ({ _id, room, totalamount, todate, totalday, status }, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                key={index}
              >
                <Box
                  sx={{
                    width: { md: "30%", xs: "90%" },
                    minHeight: "50px",
                    background: "lightgray",
                    borderRadius: "9px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography>Name</Typography>
                    <Typography>{room}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography>amount</Typography>
                    <Typography>{totalamount}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography>To Date</Typography>
                    <Typography>{todate}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography>Total Day</Typography>
                    <Typography>{totalday}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    {status === "active" ? (
                      <Button
                        sx={{ color: "yellow", border: "1px solid black" }}
                        onClick={() => {
                          orderCancelHadnling(_id);
                        }}
                      >
                        Cancel
                      </Button>
                    ) : (
                      <Button
                        sx={{ color: "green", border: "1px solid black" }}
                      >
                        Active
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            );
          }
        )
      ) : (
        <Typography>Not Found</Typography>
      )}
    </>
  );
}

export default BookingDetails;
