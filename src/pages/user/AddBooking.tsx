import BookingForm from "../../components/user/BookingForm";

export default function AddBooking() {
  return (
    <>
      <p className="text-sm text-gray-500 mb-5">Add Booking</p>
      <div className="mt-10">
        <BookingForm />
      </div>
    </>
  );
}
