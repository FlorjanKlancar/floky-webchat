import LoginScreen from "../components/LoginScreen";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) return <LoginScreen />;

  console.log(user);
  return (
    <div className="h-screen bg-gradient-to-b from-black to-indigo-900 overflow-y-scroll overflow-hidden text-gray-300">
      <Header user={user} />
      <Messages />
    </div>
  );
}
