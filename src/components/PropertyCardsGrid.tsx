import PropertyCard from "./PropertyCard";
import { propertyCard } from "../types/propertyCard";


type propertyCardsGridProps = {
  properties: propertyCard[];
};

const PropertyCardsGrid = (props: propertyCardsGridProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 max-h-[60vh] overflow-y-auto  pr-2">
      {props.properties.map((property: propertyCard) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyCardsGrid;

