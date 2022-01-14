import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endMsgRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then((message) => {
        //saved
      }),
      (error) => {
        console.log(error.message);
      };

    endMsgRef.current.scrollIntoView({ behaviour: "smooth" });

    setMessage("");
  }

  return (
    <form
      className="flex w-11/12 fixed bottom-10 bg-black opacity-75 px-6 py-4 max-w-2xl shadow-xl rounded-full border-2 border-blue-400 "
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="flex-grow bg-transparent outline-none placeholder-gray-500 text-white pr-5"
        placeholder={`Enter a message ${user.getUsername()}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="font-bold text-indigo-500" type="submit">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
