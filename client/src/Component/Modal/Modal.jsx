import React from "react";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
function Comingsoon() {
  return (
    <div>
      <Box sx={{ border: "none" }}>
        <Paper
          sx={{
            position: "absolute",
            top: { xs: "50%", md: "40%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "280px", sm: "400px", md: "600px" },
            p: { xs: 1, sm: 2, md: 4 },
            borderRadius: "10px",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              fontSize: { xs: "15px", sm: "20px", md: "40px" },
            }}
          >
            Coming Soon
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default Comingsoon;
