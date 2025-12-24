import { FiChevronDown } from "react-icons/fi";

const DetailsSection = ({ description, screenSpecs, cpuSpecs }) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Details</h2>
      <p className="text-gray-600 text-sm mb-8 leading-relaxed">
        {description}
      </p>

      <h3 className="text-xl font-semibold mb-4">Screen</h3>
      <div className="space-y-3 mb-8">
        {screenSpecs.map((spec, index) => (
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
        {/* <button className="px-8 py-3 border-2 border-black rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
          View More
          <FiChevronDown className="w-4 h-4" />
        </button> */}
      </div>
    </div>
  );
};

export default DetailsSection