import { Button } from "@mui/material";
export const StyledButtton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        // boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        borderRadius: "24px",
        color: "#fff",
        textTransform: "capitalize",
        height: "48px",
        width: "170px",
        marginLeft: "20px",
        fontSize: "18px",
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
