import { RxCross2 } from "react-icons/rx";
import { userData } from "../lib/dummyData";

type ChatBoxPropsType = {
  openChatPopup: boolean;
  setOpenChatPopup: (openchat: boolean) => void;
};

const ChatBox = ({ openChatPopup, setOpenChatPopup }: ChatBoxPropsType) => {
  const demoMessages = [
    {
      id: 1,
      time: "10:12 am",
      message: "hwllo wats up",
      isOwn: false,
    },
    {
      id: 2,
      time: "10:12 am",
      message: "hello",
      isOwn: true,
    },
    {
      id: 3,
      time: "10:12 am",
      message: "price of the apartment in 12th road",
      isOwn: false,
    },
    {
      id: 4,
      time: "10:12 am",
      message: "1200 $",
      isOwn: true,
    },
    {
      id: 5,
      time: "10:12 am",
      message: "no discounts?",
      isOwn: false,
    },
    {
      id: 6,
      time: "10:12 am",
      message: "i mean if possible",
      isOwn: false,
    },
    {
      id: 7,
      time: "10:12 am",
      message: "not really its the fixed price",
      isOwn: true,
    },
  ];

  return (
    <div className="h-full flex flex-col sticky bottom-0">
      {/* Top Section */}
      <div
        id="top"
        className="flex items-center justify-between px-6 py-2 bg-amber-200 rounded-tl-2xl rounded-tr-2xl cursor-pointer"
        onClick={() => setOpenChatPopup(true)}
      >
        <div id="user-details" className="flex gap-2 items-center">
          <img
            src={`${userData.img}`}
            alt={`${userData.name}`}
            className="w-10 h-10 rounded-full object-cover object-center"
          />
          <b>{userData.name}</b>
        </div>
        <RxCross2
          size={24}
          className="cursor-pointer"
          onClick={(event) => {
            event.stopPropagation();
            setOpenChatPopup(false);
          }}
        />
      </div>

      {/* Chat Messages */}
      {openChatPopup && (
        <div className="flex-1 flex flex-col">
          <div
            id="center"
            className="flex flex-col p-4 space-y-2 overflow-y-scroll h-[50vh] bg-yellow-50 no-scrollbar"
          >
            {demoMessages.map((message) => (
              <ChatMessage
                key={message.id}
                time={message.time}
                message={message.message}
                own={message.isOwn}
              />
            ))}
          </div>

          {/* Input Section */}
          <div id="bottom" className="relative">
            <input
              type="text"
              placeholder="Type your message"
              className="p-3 w-full focus:outline-none bg-gray-100"
            />
            <button className="absolute right-0 px-6 py-2 cursor-pointer rounded-md bg-amber-300">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;

// ChatMessage Component
type ChatMessageProps = {
  time: string;
  message: string;
  own: boolean;
};

const ChatMessage = ({ time, message, own }: ChatMessageProps) => {
  return (
    <div
      className={`max-w-[70%] p-3 rounded-lg ${
        own
          ? "bg-amber-200 text-black self-end"
          : "bg-white text-black self-start shadow-md"
      }`}
    >
      <div className="flex flex-col">
        <span className="block text-sm">{message}</span>
        <span className="block text-xs text-gray-500 mt-1">{time}</span>
      </div>
    </div>
  );
};