import { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";

const MenuFilter = ({ list, name, handleFilter}) => {
  const [isOpen, setIsOpen] = useState(true);
// console.log(handleFilter)
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2 cursor-pointer"
      >
        <h3 className="font-semibold text-gray-900">{name}</h3>
        {isOpen ? (
          <FiChevronUp className="text-gray-400" />
        ) : (
          <FiChevronDown className="text-gray-400" />
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="space-y-3">
          {list.map((li, index) => (
            <label key={index} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                onClick={handleFilter}
                value={li}
                name={name}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="ml-3 text-sm text-gray-700">{li}</span>
              <span className="ml-auto text-xs text-gray-400">
                {li.count}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;