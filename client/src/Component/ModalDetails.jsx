import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Loading from "./Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useCustomhook } from "./Hooks/Hooks";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { Smallbutton } from "./Button";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function Modalbox() {
  const matches = useMediaQuery("(max-width:700px)");
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const params = useParams();
  let route = `getroombyId/${params?.id}`;
  let method = "GET";
  const { isLoading, data, isError, error, isFetching } = useCustomhook({
    route,
    method,
  });
  if (isLoading || isFetching) {
    return <Loading loading={true} />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }

  const img = data?.imageurls;
  const Slidersection = ({ imgpath }) => {
    return (
      <Box sx={{ width: "100%", backgroundColor: "background.secondary" }}>
        <img
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            borderRadius: "10px",
          }}
          src={imgpath}
          alt="Nice"
          loading="lazy"
        />
      </Box>
    );
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          px: 3,
          boxShadow: "0 5px 15px rgba(0,0,0,.35) inset",
          backgroundColor: "background.secondary",
          color: "text.primery",
        }}
      >
        <Slider
          {...settings}
          style={{
            minHeight: matches ? "150px" : "500px",
            width: matches ? "100%" : "50%",
            m: 1,
          }}
        >
          {/* <Slidersection imgpath={img[0]} />
          <Slidersection imgpath={img[1]} />
          <Slidersection imgpath={img[2]} /> */}
        </Slider>
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            minHeight: "500px",

            mt: { xs: 5, md: 1 },
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "32px" },
              textAlign: { xs: "center", md: "left" },
              fontWeight: 700,
              pb: 2,
            }}
          >
            {data?.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              textAlign: { xs: "center", md: "left" },
              py: 2,
            }}
          >
            {data?.rentperday} PK
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },

              mx: { xs: "auto", md: "0px" },
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && <Box sx={{ ml: 2, width: "100%" }}>Reviews</Box>}
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              p: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {data?.description}
          </Typography>
          <br />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Smallbutton> Buy Now </Smallbutton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Modalbox;
