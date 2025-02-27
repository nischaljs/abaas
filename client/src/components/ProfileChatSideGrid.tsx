import  { useState } from 'react'
import { HeadingWrapper } from '../routes/ProfilePage'
import ProfileMessageContainer from './ProfileMessageContainer'
import ChatBox from './ChatBox'

const ProfileChatSideGrid = () => {
    const [openchatPopup, setOpenChatPopup] = useState<boolean>(true);

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex-1 overflow-hidden">
                <HeadingWrapper title="Messages">
                    <ProfileMessageContainer openChatPopup={openchatPopup} />
                </HeadingWrapper>
            </div>
            <div className={`${openchatPopup ? 'flex-[2]' : 'flex-[0]'} transition-all duration-300 ease-in-out relative`}>
                <ChatBox setOpenChatPopup={setOpenChatPopup} openChatPopup={openchatPopup} />
            </div>
        </div>
    );
};

export default ProfileChatSideGrid