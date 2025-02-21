import { RxCross2 } from "react-icons/rx"
import { userData } from "../lib/dummyData"


const ChatBox = () => {
  return (
    <div>
        <div id="top" className="flex items-center justify-between px-6 py-2 bg-amber-200 rounded-tl-2xl rounded-tr-2xl">
            <div id="user-details" className="flex gap-2 items-center justify-between">
                <img src={`${userData.img}`} alt={`${userData.name}`} className="w-10 h-10 rounded-full object-cover object-center" />
                <b>{userData.name}</b>
            </div>
            <RxCross2 size={24} className="cursor-pointer" />
        </div>
        <div id="center" className="h-90 bg-yellow-50">
            
        </div>
        <div id="bottom" className="relative ">
            <input type="text" name="" placeholder="type your message"  className="p-3 w-full h-full focus:outline-0 bg-gray-100" />
            <button className="absolute right-0  px-6 py-2  cursor-pointer rounded-md bg-amber-300">Send</button>
        </div>
    </div>
  )
}

export default ChatBox