import { Card, CardContent } from "@mui/material";
import { BookingFormValues } from "../../types/bookings";
import BookingForm from "../../components/user/BookingForm";
import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../../api/booking";

export default function AddBooking() {
  const mutation = useMutation({
    mutationFn: (data: BookingFormValues) => {
      return createBooking(data);
    },
  });

  const handleSubmit = (data: BookingFormValues) => {
    mutation.mutate(data, {
      onSuccess: (response) => {
        alert(response);
      },
      onError: (error) => {
        alert("Error: " + error);
      },
    });
  };

  return (
    <>
      <p className="text-sm text-gray-500 mb-5">Add Booking</p>
      <div className="mt-10">
        <Card className="p-5">
          <h2 className="text-xl font-bold mb-5 text-center">Book a Service</h2>
          <CardContent>
            <BookingForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
