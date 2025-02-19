import { useNavigate } from "react-router";
import { propertyCard } from "../types/propertyCard";


type propertyCardProps = {
  property: propertyCard;
};

const PropertyCard = (props: propertyCardProps) => {
  const property = props.property;
  const navigate = useNavigate()

  const handlePropertyCardClick  = () =>{
    navigate(`/${property.id}`);
  }

  return (
    <div className="flex flex-col md:flex-row  md:max-h-40 cursor-pointer " onClick={()=>handlePropertyCardClick()}>
      {/* Image Section */}
      <div className="w-full md:w-[40%] h-36 md:h-full relative rounded-lg overflow-hidden">
        <img
          src={property.img}
          alt={property.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Details Section */}
      <div className="p-2 flex flex-col justify-between w-full md:w-[60%]">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-1">{property.title}</h4>
          <p className="text-gray-600 text-sm">{property.address}</p>

          

        {/* Price Section */}
        <div className="mt-4">
          <p className="text-lg font-semibold text-amber-600">${property.price.toLocaleString()}</p>
        </div>
        {/* Bedroom and Bathroom */}
        <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-1">
              <span className="text-gray-500 font-medium">🛏 {property.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-500 font-medium">🛁 {property.bathroom}bathroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

