export default function LoginWelcomeSection() {
  return (
    <div className="bg-green-50 ">
      <h1 className="text-2xl font-bold text-green-700 p-4">CleanSwift</h1>
      <div className="mt-10 p-4 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-700 text-lg">
          Log in to manage your cleaning bookings and enjoy a sparkling
          experience.
        </p>
        <img
          src="/images/clean-img-1.png"
          alt="Cleaning illustration"
          className="w-96 mx-auto"
        />
      </div>
    </div>
  );
}
