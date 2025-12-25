import { FiX } from "react-icons/fi";
import MenuFilter from "./MenuFilter";
import FilterSection from "./FilterSection";

const Sidebar = ({ sidebarOpen, setSidebarOpen, categories, handleFilter, selectedCategory }) => {
    // console.log(categories, brands)
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-full w-72 lg:w-64 bg-white z-95
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center lg:hidden border-b pb-4">
            <h2 className="text-lg font-semibold bg-red-600">Filters</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <FiX size={22} />
            </button>
          </div>
          <MenuFilter selectedCategory={selectedCategory} name="Categories" list={categories} handleFilter={handleFilter} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
