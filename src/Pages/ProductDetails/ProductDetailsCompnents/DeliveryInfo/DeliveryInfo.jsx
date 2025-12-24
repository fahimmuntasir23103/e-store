import { FiTruck, FiPackage, FiShield } from "react-icons/fi";

const DeliveryInfo = () => {
  const deliveryOptions = [
    {
      icon: FiTruck,
      label: "Free Delivery",
      value: "1-2 day",
    },
    {
      icon: FiPackage,
      label: "In Stock",
      value: "Today",
    },
    {
      icon: FiShield,
      label: "Guaranteed",
      value: "1 year",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {deliveryOptions.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <option.icon className="w-5 h-5" />
          <div>
            <p className="text-xs text-gray-500">{option.label}</p>
            <p className="text-sm font-medium">{option.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryInfo 