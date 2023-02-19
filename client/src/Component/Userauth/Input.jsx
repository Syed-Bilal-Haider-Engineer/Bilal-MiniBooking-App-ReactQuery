import { InputBase } from "@mui/material";
import { styled } from "@mui/styles";
const TextInput = styled(InputBase)({
  "& .MuiInputBase-input": {
    position: "relative",
    borderRadius: "5px",
    color: "#000",
    backgroundColor: "#D9D9D9",
    fontSize: "18px",
    padding: "10px 18px",
    marginTop: "12px",
  
    "&:focus": {
      backgroundColor: "#D9D9D9",
    },
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "input:-internal-autofill-selected": {
      backgroundColor: "#D9D9D9 !important",
    },
  },
});

export default TextInput;
