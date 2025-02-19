import PropertyCard from "./PropertyCard";
import { propertyCard } from "../types/propertyCard";


type propertyCardsGridProps = {
  properties: propertyCard[];
};

const PropertyCardsGrid = (props: propertyCardsGridProps) => {
  return (
    <div className="flex flex-col gap-6 mx-auto h-[60vh] overflow-y-scroll">
      {props.properties.map((property: propertyCard) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyCardsGrid;

