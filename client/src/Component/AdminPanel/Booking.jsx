import React, { useState } from "react";
import { useCustomhook } from "../Hooks/Hooks";
import Loading from "../Loading";
import TableComponent from "../Table/Table";
function Booking() {
  let route = "bookingAllRecord";
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
  console.log("booking data:", data);
  return <TableComponent data={data} bookRecord={true} />;
}

export default Booking;
