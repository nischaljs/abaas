import { userDataType } from "../types/userDataType";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";

type SinglePageDetailsContainerPropsTypes = {
  owner: userDataType;
  title: string;
  address: string;
  price: number;
  description: string;
};

const SinglePageDetailsContainer = ({
  owner,
  title,
  address,
  price,
  description,
}: SinglePageDetailsContainerPropsTypes) => {
  // Format price with commas and currency symbol
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-2">
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <p className="text-sm">{address}</p>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <FaTag className="text-gray-500" />
            <p className="text-xl font-semibold text-blue-600">{formattedPrice}</p>
          </div>
        </div>

        {/* Right side - Owner card */}
        <div className="w-full md:w-64 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-1 flex flex-col items-center shadow-sm">
          <div className="w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-amber-200 shadow-sm">
            <img 
              src={owner.img} 
              alt={`${owner.name}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="font-bold text-gray-900 text-xl">{owner.name}</p>
        </div>
      </div>

      {/* Description section */}
      <div className="mt-6 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SinglePageDetailsContainer;