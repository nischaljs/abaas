import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";

  // Room sizes component
  const RoomSizes = ({ bedRooms, bathroom, size }: { 
    bedRooms: number; 
    bathroom: number; 
    size: number;
  }) => {
    return (
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FaRulerCombined size={20} className="text-gray-800" />
          <span className="text-md">{size}sqm ({size}sqft)</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBed size={20} className="text-gray-800" />
          <span className="text-md">{bedRooms} bed</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBath size={20} className="text-gray-800" />
          <span className="text-md">{bathroom} bathroom</span>
        </div>
      </div>
    );
  };

  export default RoomSizes ;