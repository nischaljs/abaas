import { useState } from "react";

type ListSearchBarProps = {
  location: string;
  maximumBudget: number;
  minimumBudget: number;
};

const ListSearchBar = ({
  location,
  maximumBudget,
  minimumBudget,
}: ListSearchBarProps) => {
  const [formData, setFormData] = useState({
    location: location || "",
    type: "any",
    property: "any",
    minimumBudget: minimumBudget || 0,
    maximumBudget: maximumBudget || 0,
  });

  // Handle input change for all fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (simulated API hit)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.maximumBudget > 0 && formData.minimumBudget > formData.maximumBudget) {
        alert('Minimum budget cannot be greater than maximum budget');
        return;
      }
      
    console.log("Submitting data for API call:", formData);
   
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Search results for:
      </h2>
      <form onSubmit={handleSubmit}>
        <div id="location" className="mb-2">
          <label htmlFor="location" className="text-gray-700 font-medium">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500"
          />
        </div>

        <div id="other" className="flex justify-between w-full">
          <div id="type" className="w-32">
            <label htmlFor="type" className="block text-gray-700 font-medium text-md">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full text-md px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="any">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>

          <div id="property" className="w-32">
            <label
              htmlFor="property"
              className="block text-gray-700 font-medium text-md"
            >
              Property
            </label>
            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              className="w-full text-md px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="any">Any</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </select>
          </div>

          <div id="min" className="w-32">
            <label htmlFor="min" className="block text-gray-700 font-medium text-md">
              Min Budget
            </label>
            <input
              type="number"
              name="minimumBudget"
              value={formData.minimumBudget}
              onChange={handleChange}
              className="w-full text-md px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div id="max" className="w-32">
            <label htmlFor="max" className="block text-gray-700 font-medium text-md">
              Max Budget
            </label>
            <input
              type="number"
              name="maximumBudget"
              value={formData.maximumBudget}
              onChange={handleChange}
              className="w-full text-md px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          
          <button
            type="submit"
            className="bg-amber-500 text-white font-medium px-6  rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer self-stretch"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListSearchBar;