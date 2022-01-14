import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();

  const isUser = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUser && "justify-end mr-4"
      }`}
    >
      <div className={`w-8 h-8 relative ${isUser && "order-last"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 rounded-lg p-3 text-black ${
          isUser ? "rounded-br-none bg-blue-500" : "rounded-bl-none bg-teal-500"
        }`}
      >
        <div>{message.get("message")}</div>
      </div>

      <div
        className={`absolute -bottom-5 text-xs  ${
          isUser ? "text-right text-blue-500" : "text-left text-teal-500"
        }`}
      >
        {message.get("username")}
      </div>
    </div>
  );
}

export default Message;
