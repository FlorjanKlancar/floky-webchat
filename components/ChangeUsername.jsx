import { PencilAltIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Modal from "./Modal";
import { LogoutIcon } from "@heroicons/react/solid";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const [open, setOpen] = useState(false);
  const { logout } = useMoralis();

  return (
    <div className="flex flex-col sm:flex-row absolute top-4 right-0 sm:right-4 ">
      <PencilAltIcon
        className="w-8 h-8 mr-4 hover:opacity-70 hover:cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <LogoutIcon
        className="w-8 h-8 hover:opacity-70 hover:cursor-pointer"
        onClick={logout}
      />
      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
}

export default ChangeUsername;
