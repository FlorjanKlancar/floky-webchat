import Image from "next/image";
import bg from "../public/bg5.jpg";
import { useMoralis } from "react-moralis";

function LoginScreen() {
  const { authenticate } = useMoralis();

  async function authWalletConnect() {
    const user = await authenticate({
      provider: "walletconnect",
      mobileLinks: ["metamask"],
      signingMessage: "Welcome!",
    });
    console.log("user", user);
  }

  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 items-center justify-center text-white h-5/6 w-full">
        <button
          className="w-1/2 md:w-1/3 lg:w-1/4 bg-teal-600 border-2 border-white rounded-lg p-4 font-bold animate-bounce "
          onClick={authenticate}
        >
          Login to chat with metamask!
        </button>
      </div>

      <div className="flex flex-col absolute z-50 items-center justify-center text-white h-3/6 w-full">
        <button
          className="w-1/2 md:w-1/3 lg:w-1/4 bg-teal-600 border-2 border-white rounded-lg p-4 font-bold animate-bounce "
          onClick={authWalletConnect}
        >
          Login to chat with WalletConnect!
        </button>
      </div>

      <div className="w-full h-screen">
        <Image layout="fill" src={bg} objectFit="cover" />
      </div>
    </div>
  );
}

export default LoginScreen;
