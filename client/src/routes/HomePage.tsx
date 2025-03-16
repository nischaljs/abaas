import HomeSearchBar from "../components/HomeSearchBar";

const HomePage = () => {
  return (
    <div className='lg:pt-2'>
      <div id="heading-texts" className='text-center mt-6'>
        <p className='font-medium text-lg text-gray-800   tracking-wide leading-none'>Rent rooms without any worries</p>
        <h1 className='text-6xl md:text-8xl lg:text-[9rem] tracking-normal leading-none font-poppins'>abaas rents</h1>
      </div>
      
      <div id='hero-image' className=' lg:px-16 lg:mt-[-28px] relative max-w-full'>
        {/* Main image */}
        <img 
          src="room.webp" 
          alt="room" 
          className=' w-full lg:rounded-4xl md:rounded-2xl lg:h-[58vh]  object-cover object-top'
        />
        
     
      </div>
      <HomeSearchBar/>
    </div>
  );
};

export default HomePage;