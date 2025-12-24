import { useState } from "react";

const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
// console.log(images, productName)
  return (
    <div className="flex gap-4 items-center">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 rounded-lg border-2 overflow-hidden ${
              selectedImage === index ? "border-black/60" : "border-gray-200"
            }`}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="h-full mx-auto p-2 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-white rounded-lg p-8 flex items-center justify-center">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="max-w-full h-full"
        />
      </div>
    </div>
  );
};


export default ProductGallery