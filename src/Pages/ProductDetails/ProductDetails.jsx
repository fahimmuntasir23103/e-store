import {
  FiHeart,
  FiShoppingCart,
  FiTruck,
  FiPackage,
  FiShield,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";
import Iphone from "../../assets/Iphone.png"
import PrimaryProduct from "../../Components/PrimaryProduct/PrimaryProduct";

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedStorage, setSelectedStorage] = useState("1TB");
  const [selectedImage, setSelectedImage] = useState(0);

  const colors = [
    { name: "purple", bg: "bg-purple-900" },
    { name: "black", bg: "bg-black" },
    { name: "red", bg: "bg-red-600" },
    { name: "yellow", bg: "bg-yellow-400" },
    { name: "white", bg: "bg-gray-200" },
  ];

  const storageOptions = ["128GB", "256GB", "512GB", "1TB"];

  const thumbnails = [
    "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1678685888221-f6e0dc27e6a8?w=100&h=100&fit=crop",
  ];

  const specs = [
    { label: "Screen diagonal", value: '6.7"' },
    { label: "The screen resolution", value: "2796×1290" },
    { label: "The screen refresh rate", value: "120 Hz" },
    { label: "The pixel density", value: "460 ppi" },
    { label: "Screen type", value: "OLED" },
    {
      label: "Additionally",
      value:
        "Dynamic Island\nAlways-On display\nHDR display\nTrue Tone\nWide color (P3)",
    },
  ];

  const cpuSpecs = [
    { label: "CPU", value: "A16 Bionic" },
    { label: "Number of cores", value: "6" },
  ];

  const reviews = [
    {
      name: "Grace Carey",
      date: "24 January,2023",
      rating: 4,
      text: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new iphones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked Black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
      images: [],
    },
    {
      name: "Ronald Richards",
      date: "24 January,2023",
      rating: 5,
      text: "This phone has T + storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamins) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.",
      images: [],
    },
    {
      name: "Darcy King",
      date: "24 January,2023",
      rating: 4,
      text: "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update- otherwise, love this phone! Came in great condition",
      images: [
        "https://images.unsplash.com/photo-1678685888221-f6e0dc27e6a8?w=150&h=150&fit=crop",
        "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=150&h=150&fit=crop",
      ],
    },
  ];

  const relatedProducts = [
    {
      name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      price: "$1437",
      image:
        "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=200&h=200&fit=crop",
    },
    {
      name: "AirPods Max Silver Starlight Aluminium",
      price: "$549",
      image:
        "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=200&h=200&fit=crop",
    },
    {
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: "$399",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop",
    },
    {
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: "$1499",
      image:
        "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}

      <nav className="bg-white z-90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 py-10">
            <div className="flex items-center space-x-4 md:space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm md:text-base"
              >
                Home
              </a>
              <FiChevronRight />
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm md:text-base"
              >
                Catalog
              </a>
              <FiChevronRight />
              <a
                href="#"
                className="text-gray-900 font-medium text-sm md:text-base"
              >
                Smartphones
              </a>
              <FiChevronRight />
              <a
                href="#"
                className="text-gray-900 font-medium text-sm md:text-base"
              >
                Apple
              </a>
              <FiChevronRight />
              <a
                href="#"
                className="text-gray-900 font-medium text-sm md:text-base"
              >
                iPhone 14 Pro Max
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 bg-white p-4">
          {/* Left - Images */}
          <div className="flex gap-4 items-center">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg border-2 overflow-hidden ${
                    selectedImage === index ? "border-black/60" : "border-gray-200"
                  }`}
                >
                  <img
                    src={Iphone}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full mx-auto p-2 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Iphone}
                alt="iPhone 14 Pro Max"
                className="max-w-full h-full"
              />
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Apple iPhone 14 Pro Max</h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">$1399</span>
              <span className="text-xl text-gray-400 line-through">$1499</span>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">Select color :</p>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full ${color.bg} ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-2">
                {storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`py-3 rounded-lg border-2 text-sm font-medium ${
                      selectedStorage === storage
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Screen size</span>
                <span className="font-medium">6.7"</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">CPU</span>
                <span className="font-medium">Apple A16 Bionic</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Number of Cores</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Main camera</span>
                <span className="font-medium">48-12 -12 MP</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Front-camera</span>
                <span className="font-medium">12 MP</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Battery capacity</span>
                <span className="font-medium">4323 mAh</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">
              Enhanced capabilities thanks lean A16 Bionic chip. A huge leap in
              battery life. Innovative safety features with crash detection. All
              in a dependable design.
              <a href="#" className="text-black font-medium ml-1">
                more...
              </a>
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 py-3 border-2 border-black rounded-lg font-medium hover:bg-gray-50">
                Add to Wishlist
              </button>
              <button className="flex-1 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800">
                Add to Card
              </button>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <FiTruck className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500">Free Delivery</p>
                  <p className="text-sm font-medium">1-2 day</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiPackage className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500">In Stock</p>
                  <p className="text-sm font-medium">Today</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500">Guaranteed</p>
                  <p className="text-sm font-medium">1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Details</h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>

          {/* Screen Specs */}
          <h3 className="text-xl font-semibold mb-4">Screen</h3>
          <div className="space-y-3 mb-8">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-200"
              >
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium text-right whitespace-pre-line">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* CPU Specs */}
          <h3 className="text-xl font-semibold mb-4">CPU</h3>
          <div className="space-y-3 mb-8">
            {cpuSpecs.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-200"
              >
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-black rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
              View More
              <FiChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8">Reviews</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Overall Rating */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">4.8</div>
                <div className="text-sm text-gray-500 mb-3">of 125 reviews</div>
                <div className="flex justify-center gap-1 text-yellow-400 text-xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="lg:col-span-2 space-y-3">
              {[
                { label: "Excellent", count: 100, color: "bg-yellow-400" },
                { label: "Good", count: 11, color: "bg-yellow-400" },
                { label: "Average", count: 3, color: "bg-yellow-400" },
                { label: "Below Average", count: 8, color: "bg-yellow-400" },
                { label: "Poor", count: 1, color: "bg-yellow-400" },
              ].map((rating) => (
                <div key={rating.label} className="flex items-center gap-4">
                  <span className="text-sm w-32">{rating.label}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`${rating.color} h-2 rounded-full`}
                      style={{ width: `${(rating.count / 125) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8 text-right">
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Leave Comment */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Leave Comment"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex gap-1 text-yellow-400 text-sm my-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star}>
                              {star <= review.rating ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{review.text}</p>
                    {review.images.length > 0 && (
                      <div className="flex gap-2">
                        {review.images.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt="Review"
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 border-2 border-black rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
              View More
              <FiChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8 bg-white p-8">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
          <PrimaryProduct/>
          <PrimaryProduct/>
          <PrimaryProduct/>
          <PrimaryProduct/>
          </div>
        </div>
      </div>
    </div>
  );
}
