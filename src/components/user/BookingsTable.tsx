import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteBooking,
  getBookingsByUserId,
  updateBooking,
} from "../../api/booking";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Pencil, Trash } from "lucide-react";
import BookingModal from "./BookingModal";
import { Booking, BookingFormValues } from "../../types/bookings";
import { useState } from "react";
import { queryClient } from "../../main";

export default function BookingsTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const { data } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookingsByUserId(3),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => {
      return deleteBooking(id);
    },
    onSuccess: (response) => {
      alert(response);
    },
    onError: (error) => {
      alert("Error deleting booking: " + error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: BookingFormValues }) => {
      return updateBooking(id, data);
    },
    onSuccess: (response) => {
      alert(response);
    },
    onError: (error) => {
      alert("Error updating booking: " + error);
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const handleEdit = (booking: Booking) => {
    setSelectedBooking(booking);
    setModalOpen(true);
  };

  const handleUpdate = async (id: number, data: BookingFormValues) => {
    await updateMutation.mutateAsync({ id, data });
    queryClient.invalidateQueries(["bookings"]);
  };

  return (
    <>
      <TableContainer component={Paper} className="p-3">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Actions</TableCell>
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
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          handleEdit({
                            id: booking.id,
                            customerName: booking.customerName,
                            address: booking.address,
                            date: booking.date,
                            time: booking.time,
                            service: booking.service,
                            user: booking.user,
                          })
                        }
                      >
                        <Pencil size={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(booking.id)}
                      >
                        <Trash size={18} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialValues={selectedBooking || undefined}
        onSubmit={handleUpdate}
      />
    </>
  );
}
