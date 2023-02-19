import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Typography, Tab, Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Addrooms from "./Addrooms";
import Booking from "./Booking";
import Rooms from "./Rooms";
import Users from "./Users";
import { AdminHeader } from "./AdminHeader";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Adminpanel() {
  const params = useParams();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <AdminHeader />
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            boxShadow: "0 5px 15px rgba(0,0,0,.35)",
            my: 3,
          }}
        >
          <Box sx={{ width: "100%", p: { xs: "0px", md: 3 } }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Booking" {...a11yProps(0)} />
                <Tab label="Rooms" {...a11yProps(1)} />
                <Tab label="Add Rooms" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Booking />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Rooms />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Addrooms />
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </>
  );
}
