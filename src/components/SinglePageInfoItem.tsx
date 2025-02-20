// Reusable info item component
const SinglePageInfoItem = ({ icon, title, description }: { 
    icon: React.ReactNode; 
    title: string; 
    description: string;
  }) => {
    return (
      <div className="flex items-start gap-3">
        <div className="text-amber-600 mt-1">
          {icon}
        </div>
        <div>
          <h6 className="text-md font-medium text-gray-800">{title}</h6>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    );
  };

  export default SinglePageInfoItem;