import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type SinglePageImageContainerProps = {
  images: string[];
};

const SinglePageImageContainer = (props: SinglePageImageContainerProps) => {
  const images: string[] = props.images;
  const [imageIndex, setImageIndex] = useState<null | number>(null);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (imageIndex === null) return;
      
      if (e.key === "Escape") setImageIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Lock body scroll when modal is open
    if (imageIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [imageIndex]);

  const handleImageClick = (index: number) => {
    console.log("Image clicked at index:", index);
    setImageIndex(index);
  };

  const handleCloseModal = () => {
    setImageIndex(null);
  };

  const handlePrevImage = () => {
    if (imageIndex === null) return;
    setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
  };

  const handleNextImage = () => {
    if (imageIndex === null) return;
    setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Main image container */}
      <div 
        className="md:w-3/4 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => handleImageClick(0)}
      >
        <img
          src={images[0]}
          className="object-cover w-full h-full"
          alt="Main Image"
        />
      </div>
      
      {/* Thumbnails container */}
      <div className="md:w-1/4 flex flex-row md:flex-col gap-2 overflow-y-auto no-scrollbar">
        {images.slice(1, 5).map((image, index) => (
          <div 
            key={index}
            className="w-full h-24 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(index + 1)}
          >
            <img
              src={image}
              className="object-cover w-full h-full"
              alt={`Thumbnail ${index + 2}`}
            />
          </div>
        ))}
        
        {images.length > 5 && (
          <div 
            className="w-full h-24 rounded-lg bg-gray-800 flex items-center justify-center cursor-pointer"
            onClick={() => handleImageClick(5)}
          >
            <span className="text-white font-medium">+{images.length - 5} more</span>
          </div>
        )}
      </div>


      {imageIndex !== null && (
        <div 
          className="fixed inset-0 bg-[#1616169c] bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => handleCloseModal()}
        >

          <div 
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="absolute top-4 right-4 bg-white hover:bg-gray-200 text-black p-2 rounded-full z-20"
              onClick={handleCloseModal}
            >
              <IoMdClose size={28} />
            </button>

            <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full font-medium">
              {imageIndex + 1} / {images.length}
            </div>

            <button
              className="absolute left-4 p-4 bg-white hover:bg-gray-200 text-black rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <IoChevronBackOutline size={28} />
            </button>

            <button
              className="absolute right-4 p-4 bg-white hover:bg-gray-200 text-black rounded-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <IoChevronForwardOutline size={28} />
            </button>


            <img
              src={images[imageIndex]}
              className="object-contain max-h-[85vh] max-w-[85vw] rounded shadow-xl"
              alt={`Full size image ${imageIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePageImageContainer;