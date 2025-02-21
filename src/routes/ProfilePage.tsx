import PropertyCardsGrid from "../components/PropertyCardsGrid";
import UserProfileDetails from "../components/UserProfileDetails"
import { listData } from "../lib/dummyData";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-3">
      <HeadingWrapper title="User Details">
      <UserProfileDetails/>
      </HeadingWrapper>
      <HeadingWrapper title="My List">
        <PropertyCardsGrid properties={listData}/>
      </HeadingWrapper>
      <HeadingWrapper title="Saved List">
        <PropertyCardsGrid properties={listData}/>
      </HeadingWrapper>
      </div>
      <div className="flex-2"></div>
    </div>
  )
}



type HeadingWrapperProps = {
  title:string;
  children: React.ReactNode
}

const HeadingWrapper = ({title,children}:HeadingWrapperProps) =>{

  return(
    <div className="mb-3">
      <h4 className="font-bold text-xl opacity-85">{title}</h4>
      <div className="p-3">
        {children}
      </div>
    </div>
  )
}

export default ProfilePage