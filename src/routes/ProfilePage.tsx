import React from 'react';
import ProfileChatSideGrid from "../components/ProfileChatSideGrid";
import PropertyCardsGrid from "../components/PropertyCardsGrid";
import UserProfileDetails from "../components/UserProfileDetails";
import { listData } from "../lib/dummyData";

type HeadingWrapperProps = {
  title: string;
  children: React.ReactNode
};

export const HeadingWrapper = ({ title, children }: HeadingWrapperProps) => {
  return (
    <div className="mb-6 w-full">
      <h4 className="font-bold text-xl text-gray-800 mb-3 border-l-4 border-amber-400 pl-3">{title}</h4>
      <div className="p-1">
        {children}
      </div>
    </div>
  );
};
const ProfilePage = () => {
  return (
    <div className="container mx-auto py-6 px-4 h-[90vh] flex flex-col">
      <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
        <div className="lg:flex-[3] w-full space-y-8 overflow-y-auto no-scrollbar">
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
        
        <div className="lg:flex-[2] w-full flex flex-col overflow-hidden">
          <ProfileChatSideGrid />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;