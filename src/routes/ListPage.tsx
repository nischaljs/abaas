import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router'

const ListPage = () => {
  const [searchParams] = useSearchParams();

  const [inputData, setInputData] = useState({
    location: searchParams.get('location') || '',
    minimumBudget: parseInt(searchParams.get('minimumBudget') || '0'),
    maximumBudget: parseInt(searchParams.get('maximumBudget') || '0'),
  });

  useEffect(() => {
    setInputData({
      location: searchParams.get('location') || '',
      minimumBudget: parseInt(searchParams.get('minimumBudget') || '0'),
      maximumBudget: parseInt(searchParams.get('maximumBudget') || '0'),
    });
  }, [searchParams]);

  return (
    <div>
      <h2>Search Results:</h2>
      <p>Location: {inputData.location}</p>
      <p>Minimum Budget: ${inputData.minimumBudget}</p>
      <p>Maximum Budget: ${inputData.maximumBudget}</p>
      {/* //tODO: here  pressing the search button in the form component here will also trigger the search params of this page to change that will cause this useeffect to run 
      // which will make the list items below also change since the useeffect will make api request leading a complete render */}
    </div>
  );
};

export default ListPage;
