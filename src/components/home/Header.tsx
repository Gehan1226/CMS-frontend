import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex flex-col justify-between md:flex-row items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-700">CleanSwift</h1>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Login
          </button>
        </Link>
        <button className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-100">
          Signup
        </button>
      </div>
    </header>
  );
};
