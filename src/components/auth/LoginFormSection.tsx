export default function LoginFormSection() {
  return (
    <div className="bg-white flex shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.1)]">
      <div className="w-full px-20 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Login</h2>
        <p className="text-gray-600 mb-6">
          Please enter your email and password to access your account. If you
          don't have an account yet, you can sign up in just a few clicks.
        </p>

        <form className="space-y-4  mt-10">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Login
          </button>
        </form>

        <div className="mt-6 flex justify-between">
          <p className="text-gray-600">
            New user?{" "}
            <span className="text-green-600 font-semibold">Sign up</span>
          </p>

          <p className="text-gray-600">Forgot password?</p>
        </div>
      </div>
    </div>
  );
}
