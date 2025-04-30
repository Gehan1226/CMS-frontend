import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { X } from "lucide-react";
import { Booking, BookingFormValues } from "../../types/bookings";
import BookingForm from "./BookingForm";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
  initialValues?: Booking;
  onSubmit: (id: number, data: BookingFormValues) => void;
};

export default function BookingModal({
  open,
  onClose,
  initialValues,
  onSubmit,
}: Readonly<BookingModalProps>) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <div className="flex items-center justify-between px-6 pt-5">
        <DialogTitle className="p-0">Update Booking</DialogTitle>
        <IconButton onClick={onClose}>
          <X />
        </IconButton>
      </div>
      <DialogContent dividers>
        {initialValues && (
          <BookingForm
            defaultValues={initialValues}
            onUpdate={(id, data) => onSubmit(id, data)}
          />
        )}
      </DialogContent>
      <DialogActions className="px-6 pb-4">
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
