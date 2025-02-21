
import { userData } from '../lib/dummyData'

const UserProfileDetails = () => {
  return (
    <div className='flex items-center justify-between  border-b-1 pb-3'>
        <div className='flex-2'>
            <img src={`${userData.img}`} className='w-18 h-18 object-cover object-center rounded-full' />
            <p className='font-semibold mt-2'>{userData.name}</p>
            <p className='font-medium opacity-80'>useremail@gmail.com</p>
        </div>
        <div className='flex-1 flex items-start'>
            <button className='px-4 py-2 border rounded-full  hover:text-white hover:bg-black font-normal cursor-pointer'>Update Profile</button>
        </div>
    </div>
  )
}

export default UserProfileDetails