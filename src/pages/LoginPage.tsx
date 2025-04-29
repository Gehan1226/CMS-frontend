import LoginWelcomeSection from "../components/auth/LoginWelcomeSection";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <LoginWelcomeSection />
      <div className="bg-white flex items-center justify-center shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Login</h2>
          <form className="space-y-4">
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
        </div>
      </div>
    </div>
  );
}
