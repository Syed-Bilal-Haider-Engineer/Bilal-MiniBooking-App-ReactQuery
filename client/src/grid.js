import * as React from "react";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import Room from "./Component/Room";
import { Box } from "@mui/material";

export default function SpacingGrid({ data }) {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {data?.data?.map((room, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  my: 3,
                  height: "430px",
                  width: "100%",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  borderRadius: "10px",
                }}
              >
                <Room
                  rooms={room}
                  image={room?.imageurls}
                  // firstdate={room.firstdate}
                  // seconddate={room.seconddate}
                  // days={room.days}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      
      </Grid> */}
    </Grid>
  );
}
