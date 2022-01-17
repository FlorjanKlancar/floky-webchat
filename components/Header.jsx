import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import { LogoutIcon } from "@heroicons/react/solid";

function Header({ user }) {
  return (
    <div className="bg-black flex flex-col lg:flex-row  justify-between p-4 mx-2 mt-4 border-solid border-4 border-indigo-500 rounded-xl relative md:m-auto md:w-4/6 lg:w-3/4 xl:w-1/2 ">
      <div className="relative h-36 w-36 lg:w-48 lg:h-48 rounded-full border-4 border-indigo-500 mx-auto">
        <Avatar />
      </div>

      <div className="my-auto ">
        <div className="text-xl text-indigo-500">
          Welcome to Floky web 3.0 chat
        </div>
        <div className="text-3xl font-bold truncate ">{user.getUsername()}</div>
      </div>

      <div>
        <ChangeUsername user={user} />
      </div>
    </div>
  );
}

export default Header;
