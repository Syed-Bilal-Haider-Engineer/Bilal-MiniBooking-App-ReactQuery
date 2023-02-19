import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { Smallbutton } from "../Component/Button";
import { useParams } from "react-router-dom";
import Loading from "../Component/Loading";
import { useCustomhook } from "../Component/Hooks/Hooks";
import { useSendPost } from "../Component/Hooks/Hooks";
import StripeCheckout from "react-stripe-checkout";

function Bookingscreem() {
  const publickey =
    "pk_test_51Juq9WBQek6DJaoPGwE6E0IRMlbyL0RqClXew5antzDLiETVdk7PlH015BMbfY171JTbhhCzzXNgW3q7UKaYg4Y000ukw9FNFm";
  const params = useParams();
  let route = `getroombyId/${params?.id}`;
  let routepath = "createbooking";
  let method = "GET";
  const fromdate = params?.fromtdate;
  const todate = params?.todate;
  const { isLoading, data, isError, error, isFetching } = useCustomhook({
    route,
    method,
  });
  const { mutate: sendValue } = useSendPost({ routepath });
  if (isLoading || isFetching) {
    return <Loading loading={true} />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  const img = data?.imageurls;
  const totalamount = data?.rentperday * params?.days;
  const userid = localStorage.getItem("userid");
  console.log("userid login:", userid);
  function onToken(token) {
    const buynow = {
      room: data?.name,
      roomid: data?._id,
      userid,
      fromdate,
      todate,
      totalamount,
      totalday: params?.days,
      transactionsId: "123456",
      token,
    };
    sendValue(buynow);
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "85%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "5px",
            margin: "16px",
            padding: "10px 16px",
            boxShadow: "0 5px 15px rgba(0,0,0,.35)",
          }}
        >
          <Box sx={{ width: "55%" }}>
            <Typography>{data?.name}</Typography>
            <Box>
              {img?.length > 0 ? (
                <img
                  style={{
                    position: "relative",
                    width: "90%",
                    height: "500px",
                  }}
                  src={img[0]}
                  alt="Nice"
                  loading="lazy"
                />
              ) : (
                <img
                  style={{
                    position: "relative",
                    width: "90%",
                    height: "500px",
                  }}
                  src="https://www.bloctechsolutions.com/static/media/timg.9c8829e64253da2cbc36.png"
                  alt="Nice"
                  loading="lazy"
                />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexDirection: "column",
              height: "500px",
              textAlign: "right",
              width: "45%",
              p: 2,
            }}
          >
            <Box width="100%">
              <Typography
                sx={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "bold",
                  py: 1,
                }}
              >
                Booking Details
              </Typography>
              <Typography mt={2}>
                Name:{localStorage.getItem("name")}
              </Typography>
              <Typography mt={2}>From date: {fromdate} </Typography>
              <Typography mt={2}>To date: {todate}</Typography>
              <br />
              <Typography>Max count:{data?.maxcount}</Typography>
            </Box>
            <Box width="100%">
              <Typography
                sx={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "bold",
                  py: 1,
                }}
              >
                Amount
              </Typography>
              <Typography mt={2}>Total Days:{params?.days}</Typography>
              <Typography mt={2}>Rent per day:{data?.rentperday} </Typography>
              <Typography mt={2}>Total Amount:{totalamount}</Typography>
              <br />
              <StripeCheckout
                amount={totalamount * 100}
                currency="PKR"
                token={onToken}
                stripeKey={publickey}
              >
                <Smallbutton>Pay Now</Smallbutton>
              </StripeCheckout>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Bookingscreem;
