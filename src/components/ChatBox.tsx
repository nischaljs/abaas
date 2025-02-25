import { RxCross2 } from "react-icons/rx"
import { userData } from "../lib/dummyData"


type ChatBoxPropsType = {
  openChatPopup  : boolean;
  setOpenChatPopup :(openchat :boolean) => void;
}

const ChatBox = ({openChatPopup, setOpenChatPopup} : ChatBoxPropsType) => {
  return (
    <div className="h-full flex flex-col">
        <div id="top" className="flex items-center justify-between px-6 py-2 bg-amber-200 rounded-tl-2xl rounded-tr-2xl cursor-pointer"
        onClick={()=>setOpenChatPopup(true)}>
            <div id="user-details" className="flex gap-2 items-center justify-between">
                <img src={`${userData.img}`} alt={`${userData.name}`} className="w-10 h-10 rounded-full object-cover object-center" />
                <b>{userData.name}</b>
            </div>
            <RxCross2 size={24} className="cursor-pointer"
            onClick={(event)=>{
              event.stopPropagation();
              setOpenChatPopup(false);
            }} />
        </div>
        {openChatPopup && (
          <div className="flex-1 flex flex-col">
            <div id="center" className="flex-1 bg-yellow-50 overflow-y-auto">
                {/* Chat messages go here */}
            </div>
            <div id="bottom" className="relative">
                <input type="text" name="" placeholder="type your message"  className="p-3 w-full h-full focus:outline-0 bg-gray-100" />
                <button className="absolute right-0  px-6 py-2  cursor-pointer rounded-md bg-amber-300">Send</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default ChatBox