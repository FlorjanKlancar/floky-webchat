import LoginScreen from "../components/LoginScreen";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (!isAuthenticated) return <LoginScreen />;

  console.log(user);
  return (
    <div className="h-screen">
      <h1>Welcome to app {user.id}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
