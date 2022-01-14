import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMoralis } from "react-moralis";
export default function Example({ open, setOpen }) {
  const [username, setUsername] = useState("");

  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  function submitHandler(e) {
    e.preventDefault();
    if (!username) return;

    setUserData({ username });

    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex mt-48 justify-center w-full   pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="w-11/12 sm:w-10/12 md:w-4/6 lg:w-3/6 xl:w-2/6 m-auto inline-block text-gray-300 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
              <form onSubmit={submitHandler}>
                <div className="bg-indigo-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="p-2">
                    <div>
                      Change username.
                      <br /> Current username is {user.getUsername()}
                    </div>
                    <div className="mt-4 bg-gray-300 opacity-75 px-6 rounded-full py-4">
                      <input
                        className="bg-transparent outline-none placeholder-gray-500 text-black"
                        type="text"
                        placeholder="Enter new username!"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                    </div>
                  </div>

                  <div className="flex p-4 justify-between">
                    <button
                      type="button"
                      className="bg-gray-300 rounded-full px-12 py-4 text-black"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 rounded-full px-12 py-4 text-black hover:bg-green-600 hover:cursor-pointer"
                      disabled={isUserUpdating}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
