import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import { useRef } from "react";
import Message from "./Message";

const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endMsgRef = useRef();
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );

  return (
    <div className="pb-56">
      <div className="my-5 space-y-8 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center ">
        <SendMessage endMsgRef={endMsgRef} />
      </div>

      <div className="text-center text-gray-500 text-sm mt-5" ref={endMsgRef}>
        <div>You are up to date {user.getUsername()}! 😊</div>
      </div>
    </div>
  );
}

export default Messages;
