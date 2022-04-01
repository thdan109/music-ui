import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  url: string,
  title: string,
  artist: string,
  album: string,
  date: string,
  time: string
) {
  return { url, title, artist, album, date, time };
}

const rows = [
  createData(
    "https://i.scdn.co/image/ab67616d0000b27335f1e6eb48870a8e15620570",
    "Runtuh",
    "Feby Putri Fiersa Besari",
    "Runtuh",
    "3 days ago",
    "3:44"
  ),
  createData(
    "https://i.scdn.co/image/ab67616d00001e02b0e4b65f2a08acafa00c0ac7",
    "It's only me",
    "Kaleb J",
    "It's only me",
    "3 days ago",
    "3:34"
  ),
  createData(
    "https://yt3.ggpht.com/ytc/AKedOLQSXG7ZFQBrR78HtIMNo8ARzeEIPBIerrJnvmfN=s900-c-k-c0x00ffffff-no-rj",
    "Here's your peer",
    "Jemie Miller",
    "Here's your peer",
    "3 days ago",
    "3:44"
  ),
  createData(
    "https://avatar-ex-swe.nixcdn.com/song/2021/05/31/0/e/6/f/1622427158959_640.jpg",
    "Double take",
    "Dhruv",
    "Double take",
    "3 days ago",
    "3:44"
  ),
  createData(
    "https://upload.wikimedia.org/wikipedia/vi/1/1e/Poster_b%C3%A0i_h%C3%A1t_%22Stay%22.png",
    "Stay",
    "Justin",
    "Stay",
    "3 days ago",
    "3:44"
  ),
];

const TableList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell sx={{ color: "gray", fontWeight: 600 }} align="left">
              TITLE
            </TableCell>
            <TableCell sx={{ color: "gray", fontWeight: 600 }} align="right">
              ARTIST
            </TableCell>
            <TableCell sx={{ color: "gray", fontWeight: 600 }} align="right">
              ALBUM
            </TableCell>
            <TableCell sx={{ color: "gray", fontWeight: 600 }} align="right">
              DATE
            </TableCell>
            <TableCell sx={{ color: "gray", fontWeight: 600 }} align="right">
              TIME
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.title} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={{ color: "#001c72", fontWeight: 700 }} component="th" scope="row">
                {index}
              </TableCell>
              <TableCell
                sx={{ color: "#001c72", fontWeight: 700, display: "flex", alignItems: "center" }}
                // align="right"
              >
                <img style={{ width: 50, borderRadius: 10, marginRight: 20 }} src={row.url} alt="" />
                {row.title}
              </TableCell>
              <TableCell sx={{ color: "#0110418a", fontWeight: 600 }} align="right">{row.artist}</TableCell>
              <TableCell sx={{ color: "#0110418a", fontWeight: 600 }} align="right">{row.album}</TableCell>
              <TableCell sx={{ color: "#0110418a", fontWeight: 600 }} align="right">{row.date}</TableCell>
              <TableCell sx={{ color: "#0110418a", fontWeight: 600 }} align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
