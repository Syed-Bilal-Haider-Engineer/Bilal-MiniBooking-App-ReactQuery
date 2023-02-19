import { Button } from "@mui/material";
export const StyledButtton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        borderRadius: "10px",
        color: "#fff",
        textTransform: "capitalize",
        height: { md: "40px", xs: "25px" },
        width: { md: "160px", xs: "120px" },
        marginLeft: "20px",
        fontSize: { md: "18px", xs: "12px" },
        fontFamily: "Roboto",
        "&:hover": {
          background:
            "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export const Smallbutton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        color: "black",
        textTransform: "capitalize",
        height: { md: "35px", xs: "30px" },
        width: "100%",
       
        fontSize: { md: "14px", xs: "10px" },
        fontFamily: "Roboto",
    
        "&:hover": {
          background:
            "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
          color: "white",
        },
      }}
    >
      {children}
    </Button>
  );
};
