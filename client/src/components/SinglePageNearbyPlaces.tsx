import { FaBus, FaSchool, FaUtensils } from "react-icons/fa";

  // Nearby places component
  const NearbyPlaces = ({ school, bus, restaurant }: {
    school: string;
    bus: string;
    restaurant: string;
  }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center text-center">
          <div  className="mb-1">
            <FaSchool size={20} className="text-gray-500" />
          </div>
          <h6 className="text-sm font-medium">School</h6>
          <p className="text-sm text-gray-800">{school}</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-1" >
            <FaBus size={20} className="text-gray-700" />
          </div>
          <h6 className="text-sm font-medium">Bus Stop</h6>
          <p className="text-sm text-gray-800">{bus}</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-1" >
            <FaUtensils size={20} className="text-gray-700" />
          </div>
          <h6 className="text-sm font-medium">Restaurant</h6>
          <p className="text-sm text-gray-800">{restaurant}</p>
        </div>
      </div>
    );
  };


  export default NearbyPlaces;