import { useState } from 'react';
import { userData } from '../lib/dummyData';
import PopUpModal from './PopUpModal';

const UserProfileDetails = () => {

  const [showLogOutModel, setShowLogOutModel] = useState(false);

  const handleLogOutFromThisDevice = () => {
    console.log("pressed logout button");
  }


  const handleLogOutFromAllDevices = () => {
    console.log("pressed logout from all devices")
  }
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
          <button className='px-4 py-1 text-sm mt-4 rounded-lg text-white font-bold hover:bg-red-600 bg-red-500 cursor-pointer'
            onClick={() => setShowLogOutModel(true)}>
            Logout
          </button>
        </div>
      </div>

      {/* Right Section: Update Profile Button */}
      <div className="mt-4 lg:mt-0">
        <button className="px-4 py-2 border rounded-full hover:text-white hover:bg-black text-sm lg:text-base font-medium transition duration-300">
          Update Profile
        </button>
      </div>

      {showLogOutModel && (
        <PopUpModal onClose={() => setShowLogOutModel(false)} className='max-w-7xl '>
          <div>
            <h6 className='text-xl font-bold'>Choose a way to logout</h6>
            <div className='flex items-center justify-between  gap-4'>
              <button className='mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer'
                onClick={() => handleLogOutFromThisDevice()}>
                Log Out From This Device
              </button>
              <button className='mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer'
                onClick={() => handleLogOutFromAllDevices()}>
                Log Out From All Devices
              </button>
            </div>
          </div>
        </PopUpModal>
      )}
    </div>
  );
};

export default UserProfileDetails;