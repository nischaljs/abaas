import { useState } from "react"
import SinglePageDetailsContainer from "../components/SinglePageDetailsContainer"
import SinglePageImageContainer from "../components/SinglePageImageContainer"
import { singlePostData, userData } from "../lib/dummyData"
import { singlePropertyDetailsType } from "../types/singlePropertyDetails"
import { userDataType } from "../types/userDataType"
import SinglePageMoreDetailsGrids from "../components/SinglePageMoreDetailsGrids"


const SinglePage = () => {
  const [propertyDetails, setPropertyDetails] = useState<singlePropertyDetailsType>(singlePostData);
  const [ownerDetails, setOwnerDetails] = useState<userDataType>(userData)
  return (
    <div className="w-full flex flex-col md:flex-row gap-2">
      <div id="left-wrapper" className="flex-3 ">
        <SinglePageImageContainer
          images={propertyDetails.images}
        />
        <SinglePageDetailsContainer
          owner={ownerDetails}
          address={propertyDetails.address}
          description={propertyDetails.description}
          price={propertyDetails.price}
          title={propertyDetails.title}
        />
      </div>
      <div id="right-wrapper" className="flex-2">
        <SinglePageMoreDetailsGrids propertyDetails={propertyDetails}/>
      </div>
    </div>
  )
}

export default SinglePage