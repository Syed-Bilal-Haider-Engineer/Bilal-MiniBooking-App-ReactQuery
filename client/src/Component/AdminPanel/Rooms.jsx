import React, { useState } from "react";
import { useCustomhook } from "../Hooks/Hooks";
import Loading from "../Loading";
import TableComponent from "../Table/Table";
function Rooms() {
  let route = "getpost";
  let method = "GET";
  const { isLoading, data, isError, error, isFetching } = useCustomhook({
    route,
    method,
  });
  if (isLoading || isFetching) {
    return <Loading loading={true} />;
  }
  if (isError) {
    console.log("Booking error:", error);
  }
  console.log("data rooms:", data);
  return <TableComponent data={data?.data} />;
}

export default Rooms;
