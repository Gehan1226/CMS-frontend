import ViewOnlyBookingsTable from "../../components/user/ViewOnlyBookingsTable";

export default function Dashboard() {
  return (
    <>
      <p className="text-sm text-gray-500 mb-5">Dashboard</p>

      <div className="flex justify-between mb-3">
        <h1 className="text-2xl font-bold">Your Bookings</h1>
        <button className="bg-green-100 shadow-md text-gray-800 border border-gray-300 rounded-md px-4 py-2 hover:bg-green-200 transition duration-200">
          Add Booking
        </button>
      </div>
      <ViewOnlyBookingsTable />
    </>
  );
}
