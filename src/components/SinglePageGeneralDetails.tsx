import { FaPaw, FaPercentage, FaWrench } from "react-icons/fa";
import SinglePageInfoItem from "./SinglePageInfoItem";

// General details component
const GeneralDetails = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <SinglePageInfoItem
        icon={<FaWrench size={20} />}
        title="Utilities"
        description="Renter is responsible"
      />
      <SinglePageInfoItem
        icon={<FaPaw size={20} />}
        title="Pet Policy"
        description="Pets Allowed"
      />
      <SinglePageInfoItem
        icon={<FaPercentage size={20} />}
        title="Property Fees"
        description="Must have 3× the rent in total household income"
      />
    </div>
  );
};

export default GeneralDetails;
