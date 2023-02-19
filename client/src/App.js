import Navbar from "./Component/Navbar";
import Homescreen from "./Screen/Homescreen";
import Bookingscreem from "./Screen/Bookingscreem";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Adminpanel from "./Component/AdminPanel/Adminscreen.jsx";
import Signup from "./Component/Userauth/Signup";
import Login from "./Component/Userauth/Login";
import Modalbox from "./Component/ModalDetails";
import Dashboarduser from "./Component/Tabpanel/Tabs";
import Logout from "./Component/Userauth/Logout";
import { useTokenverify } from "./Component/Hooks/Hooks";
import Loading from "./Component/Loading";
import { useState } from "react";
import { Box } from "@mui/material";
import { Main } from "./Main";
import Profile from "./Component/Profile";
function App() {
  const [loading, setloading] = useState(true);
  const { isLoading, data, isError, isFetching } = useTokenverify();
  if (isLoading || isFetching) {
    return <Loading loading={loading} />;
  }
  if (isError) {
    setloading(false);
  }
  const userid = localStorage.getItem("userid");
  console.log("userid:", userid);
  return (
    <>
      <Box
        sx={{
          maxWidth: "xl",
          mx: "auto",
          backgroundColor: "background.secondary",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Homescreen />} />
            <Route path="/adminpanel" element={<Adminpanel />} />
            <Route
              path="/bookscreen/:id/:fromtdate/:todate/:days"
              element={<Bookingscreem />}
            />
            {userid ? (
              <Route path="/profile" element={<Profile id={userid} />} />
            ) : (
              <Route path="/Signup" element={<Signup />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/bootdetails/:id" element={<Modalbox />} />
            <Route path="/Dashboarduser/:id" element={<Dashboarduser />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
