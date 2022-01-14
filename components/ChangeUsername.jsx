import { PencilAltIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Modal from "./Modal";
function ChangeUsername() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 hover:opacity-70 hover:cursor-pointer">
      <PencilAltIcon className="w-8 h-8" onClick={() => setOpen(true)} />

      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
}

export default ChangeUsername;
