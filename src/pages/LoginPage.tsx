export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-green-50 min-h-screen">
      <div className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-fit bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold text-green-700 p-4">Login</h1>
        <form className="p-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
