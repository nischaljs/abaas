import { singlePropertyDetailsType } from "../types/singlePropertyDetails";
import DetailsSection from "./SinglePageDetailsSection";
import GeneralDetails from "./SinglePageGeneralDetails";
import LocationMap from "./SinglePageLocationMap";
import NearbyPlaces from "./SinglePageNearbyPlaces";
import RoomSizes from "./SinglePageRoomSizes";

type SinglePageMoreDetailsGridsPropsTypes = {
  propertyDetails: singlePropertyDetailsType;
};


const SinglePageMoreDetailsGrids = ({ propertyDetails }: SinglePageMoreDetailsGridsPropsTypes) => {
  const { 
    bedRooms, bathroom, size, latitude, longitude,
    school, bus, restaurant,address,title,id
  } = propertyDetails;

  return (
    <div className="space-y-4">
      <DetailsSection title="General">
        <GeneralDetails />
      </DetailsSection>

      <DetailsSection title="Room Sizes">
        <RoomSizes 
          bedRooms={bedRooms} 
          bathroom={bathroom} 
          size={size} 
        />
      </DetailsSection>

      <DetailsSection title="Nearby Places">
        <NearbyPlaces 
          school={school} 
          bus={bus} 
          restaurant={restaurant}
        />
      </DetailsSection>

      <DetailsSection title="Location">
        <LocationMap 
          latitude={latitude} 
          longitude={longitude}
          address={address}
          title={title}
          propertyId={id}
        />
      </DetailsSection>

    </div>
  );
};

export default SinglePageMoreDetailsGrids;