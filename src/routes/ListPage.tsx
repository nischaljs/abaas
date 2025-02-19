import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router'
import ListSearchBar from '../components/ListSearchBar';
import SearchMap from '../components/SearchMap';
import PropertyCardsGrid from '../components/PropertyCardsGrid';
import { listData } from '../lib/dummyData'; 

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
    <div className='w-full flex gap-6 justify-between h-[83vh]'>
      <div className='flex-3 flex flex-col gap-5'>
      <ListSearchBar 
        location={inputData.location} 
        minimumBudget={inputData.minimumBudget} 
        maximumBudget={inputData.maximumBudget} 
      />
      <PropertyCardsGrid properties={listData}/>
      </div>
      <div id="map-section" className='flex-2 rounded-xl overflow-hidden min-h-full'>
        <SearchMap/>
      </div>
      {/* //tODO: here  pressing the search button in the form component here will also trigger the search params of this page to change that will cause this useeffect to run 
      // which will make the list items below also change since the useeffect will make api request leading a complete render */}
    </div>
  );
};

export default ListPage;
