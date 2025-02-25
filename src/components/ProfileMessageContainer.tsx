import { userData } from "../lib/dummyData"

type profileMessageContainerPropsType = {
    openChatPopup: boolean;
}

const ProfileMessageContainer = ({ openChatPopup }: profileMessageContainerPropsType) => {
    return (
        <div className={`overflow-y-auto ${openChatPopup ? "h-[30vh]" : "h-[75vh]"}`}>
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
            <SingleMessage img={userData.img} name={userData.name} message="hello this is me nischal bhattarai from the wold heritage site" />
        </div>
    );
};



const SingleMessage = ({ img, name, message }: {
    img: string,
    name: string,
    message: string
}) => {
    return (
        <div className="flex items-center justify-between gap-2 bg-yellow-50 p-3 rounded-xl mb-3">
            <img src={`${img}`} alt={`${name}`} className="w-10 h-10 object-cover object-center rounded-full" />
            <b>{name}</b>
            <p className="pl-4 text-wrap">{message.substring(0, 40) + "..."}</p>
        </div>
    )
}
export default ProfileMessageContainer