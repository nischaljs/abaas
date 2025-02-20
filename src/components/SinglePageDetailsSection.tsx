
// Section component with title and content
const DetailsSection = ({ 
    title, 
    children 
  }: { 
    title: string; 
    children: React.ReactNode;
  }) => {
    return (
      <section className="bg-gray-50 rounded-lg p-4 mb-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        {children}
      </section>
    );
  };
  
  

  
  export default DetailsSection;