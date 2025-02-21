import ProfileMessageContainer from "../components/ProfileMessageContainer";
import PropertyCardsGrid from "../components/PropertyCardsGrid";
import UserProfileDetails from "../components/UserProfileDetails"
import { listData } from "../lib/dummyData";

const ProfilePage = () => {
  return (
    <div className="flex  justify-between">
      <div className="flex-3 w-full h-full">
        <HeadingWrapper title="User Details">
          <UserProfileDetails />
        </HeadingWrapper>
        <HeadingWrapper title="My List">
          <PropertyCardsGrid properties={listData} />
        </HeadingWrapper>
        <HeadingWrapper title="Saved List">
          <PropertyCardsGrid properties={listData} />
        </HeadingWrapper>
      </div>
      <div className="flex-2 w-full h-screen ">
        <div className="sticky top-0">
        <HeadingWrapper title="Messages">
          <ProfileMessageContainer />
        </HeadingWrapper>
        </div>
      </div>
    </div>
  )
}



type HeadingWrapperProps = {
  title: string;
  children: React.ReactNode
}

const HeadingWrapper = ({ title, children }: HeadingWrapperProps) => {

  return (
    <div className="mb-3 w-full h-full">
      <h4 className="font-bold text-xl opacity-85">{title}</h4>
      <div className="p-3">
        {children}
      </div>
    </div>
  )
}

export default ProfilePage