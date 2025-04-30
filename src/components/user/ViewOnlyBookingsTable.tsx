import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { getBookingsByUserId } from "../../api/booking";

export default function ViewOnlyBookingsTable() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getBookingsByUserId(3),
  });

  return (
    <TableContainer component={Paper} className="p-3">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Service Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((booking) => (
            <TableRow
              key={booking.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {booking.customerName}
              </TableCell>
              <TableCell>{booking.address}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>{booking.service.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
