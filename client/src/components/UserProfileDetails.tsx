import { userData } from '../lib/dummyData';

const UserProfileDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between border-b pb-4">
      {/* Left Section: Profile Picture and Details */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-6">
        {/* Profile Picture */}
        <img
          src={`${userData.img}`}
          alt={`${userData.name}`}
          className="w-20 h-20 lg:w-24 lg:h-24 object-cover object-center rounded-full"
        />

        {/* User Details */}
        <div className="mt-4 lg:mt-0 text-center lg:text-left">
          <p className="font-semibold text-lg lg:text-xl">{userData.name}</p>
          <p className="font-medium opacity-80 text-sm lg:text-base">
            useremail@gmail.com
          </p>
        </div>
      </div>

      {/* Right Section: Update Profile Button */}
      <div className="mt-4 lg:mt-0">
        <button className="px-4 py-2 border rounded-full hover:text-white hover:bg-black text-sm lg:text-base font-medium transition duration-300">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileDetails;