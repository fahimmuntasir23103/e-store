import { FiChevronDown } from "react-icons/fi";

const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div>
      <div
        onClick={onToggle}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <FiChevronDown
          className={`text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="mt-3 pl-1 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
