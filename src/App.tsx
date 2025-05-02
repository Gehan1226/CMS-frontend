import { UserProvider } from "./provider/UserProvider";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

export default App;
