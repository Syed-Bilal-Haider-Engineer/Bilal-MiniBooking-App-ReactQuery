import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import "./Table.css";
import { rowStyle } from "./Row";
const StyledTableRow = styled(TableRow)(() => ({
  [`&.${StyledTableRow.body}`]: {
    padding: "40px 25px",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "16px",
    color: "#C1C6C2",
  },
}));

const head = {
  color: "white",
};
export default function TableComponent({ data, bookRecord }) {
  console.log("data[0]", data[0]);
  // let record = Object?.keys(data[0]);
  // console.log("record:", record);
  return (
    <>
      <TableContainer
        sx={{
          position: "relative",
          mt: 3,
          backgroundColor: "background.secondary",
          borderRadius: "10px",
          boxShadow: 2,
          width: "100%",
        }}
      >
        <Table
          sx={{ minWidth: 650, color: "red", py: 2 }}
          aria-label="simple table"
        >
          {/* <TableHead style={{ backgroundColor: "#101010" }}>
            {bookRecord !== true ? (
              <>
                <StyledTableRow sx={rowStyle}>
                  <TableCell component="th" style={head}>
                    {record[3]}
                  </TableCell>
                  <TableCell component="th" style={head}>
                    {record[5]}
                  </TableCell>
                  <TableCell component="th" style={head}>
                    {record[6]}
                  </TableCell>
                  <TableCell component="th" style={head}>
                    {record[7]}
                  </TableCell>
                  <TableCell component="th" style={head}>
                    {record[8]}
                  </TableCell>
                  <TableCell component="th" style={head}>
                    {record[10]}
                  </TableCell>
                </StyledTableRow>
              </>
            ) : (
              <StyledTableRow sx={rowStyle}>
                <TableCell component="th" style={head}>
                  {record[1]}
                </TableCell>
                <TableCell component="th" style={head}>
                  {record[4]}
                </TableCell>
                <TableCell component="th" style={head}>
                  {record[5]}
                </TableCell>
                <TableCell component="th" style={head}>
                  {record[6]}
                </TableCell>
                <TableCell component="th" style={head}>
                  {record[7]}
                </TableCell>
                <TableCell component="th" style={head}>
                  {record[9]}
                </TableCell>
              </StyledTableRow>
            )}
          </TableHead> */}
          <TableBody>
            {data?.map((items, index) => {
              return (
                <StyledTableRow sx={rowStyle} key={index}>
                  <TableCell component="th" scope="row">
                    {items?.name || items?.room}
                  </TableCell>
                  <TableCell>{items?.rentperday || items?.fromdate}</TableCell>
                  <TableCell>{items?.type || items?.todate}</TableCell>
                  <TableCell>{items?.maxcount || items?.totalamount}</TableCell>
                  <TableCell>{items?.phonenumber || items?.totalday}</TableCell>
                  <TableCell>
                    {items?.description?.substring(0, 90) || items?.status}
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
    </>
  );
}
