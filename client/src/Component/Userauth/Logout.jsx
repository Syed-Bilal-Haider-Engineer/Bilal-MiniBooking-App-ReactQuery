import React, { useEffect } from "react";
function Logout() {
  const token = localStorage.getItem("tokenbook");
  const name = localStorage.getItem("name");
  useEffect(() => {
    if (token || name) {
      localStorage.removeItem("tokenbook");
      localStorage.removeItem("name");
      localStorage.removeItem("userid");
      window.location = "/";
    } else {
      window.location = "/";
    }
  }, []);

  return true;
}

export default Logout;
