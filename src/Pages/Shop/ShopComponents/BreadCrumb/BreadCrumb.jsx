import { MdChevronRight } from "react-icons/md";

const Breadcrumb = () => {
  return (
    <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <span>Home</span> <MdChevronRight size={14} />
          <span>Journal</span> <MdChevronRight size={14} />
          <span className="text-black">Article Detail</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
