import { Card, CardContent } from "@mui/material";
import { BookingFormValues } from "../../types/bookings";
import BookingForm from "../../components/user/BookingForm";
import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../../api/booking";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export default function AddBooking() {
  const userContext = useContext(UserContext);
  const mutation = useMutation({
    mutationFn: (data: BookingFormValues) => {
      return createBooking(data);
    },
  });

  const handleSubmit = (data: BookingFormValues) => {
    if (!userContext?.user) {
      alert("User not found");
      return;
    }
    data.userId = userContext.user.id;
    
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
    <div className="mt-7">
      <Card className="p-5">
        <h2 className="text-xl font-bold mb-5 text-center">Book a Service</h2>
        <CardContent>
          <BookingForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}
