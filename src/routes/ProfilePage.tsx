import React from 'react';
import ProfileChatSideGrid from "../components/ProfileChatSideGrid";
import PropertyCardsGrid from "../components/PropertyCardsGrid";
import UserProfileDetails from "../components/UserProfileDetails";
import { listData } from "../lib/dummyData";

type HeadingWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export const HeadingWrapper = ({ title, children }: HeadingWrapperProps) => {
  return (
    <div className="mb-4 w-full">
      <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-3 border-l-4 border-amber-400 pl-3">
        {title}
      </h4>
      <div className="p-3 md:p-4 rounded-lg bg-white shadow-sm border border-gray-100">
        {children}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="container mx-auto py-4 md:py-6 px-3 md:px-4 min-h-[90vh] flex flex-col bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 flex-1">
        <div className="lg:flex-[3] w-full space-y-4 md:space-y-6 overflow-y-auto ">
          {/* User Details */}
          <HeadingWrapper title="User Details">
            <UserProfileDetails />
          </HeadingWrapper>

          {/* My List */}
          <HeadingWrapper title="My List">
            <PropertyCardsGrid properties={listData} />
          </HeadingWrapper>

          {/* Saved List */}
          <HeadingWrapper title="Saved List">
            <PropertyCardsGrid properties={listData} />
          </HeadingWrapper>
        </div>
        
        <div className="lg:flex-[2] w-full flex flex-col sticky top-28 h-[600px] lg:h-[85vh]">
          <ProfileChatSideGrid />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;