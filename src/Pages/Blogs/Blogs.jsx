import React, { useState, useMemo } from 'react';
import { 
  MdSearch, 
  MdChevronRight, 
  MdSmartphone, 
  MdWatch, 
  MdCameraAlt, 
  MdLaptop, 
  MdGamepad,
  MdCalendarToday
} from 'react-icons/md';

const categories = [
    { name: "All", icon: null },
    { name: "Phones", icon: <MdSmartphone /> },
    { name: "Smart Watches", icon: <MdWatch /> },
    { name: "Cameras", icon: <MdCameraAlt /> },
    { name: "Laptops", icon: <MdLaptop /> }, 
    { name: "Gaming", icon: <MdGamepad /> },
];

const allPosts = [
    { id: 1, category: "Phones", date: "24 July, 2025", title: "iPhone 15 Pro: The Titanium Revolution", desc: "Exploring how the new material changes the feel and durability of Apple's flagship device. We test the drop resistance and weight difference.", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800" },
    { id: 2, category: "Cameras", date: "15 June, 2025", title: "Why Mirrorless is the Future of Pro Video", desc: "A breakdown of why DSLRs are fading out in favor of compact, high-speed mirrorless systems for cinema production.", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" },
    { id: 3, category: "Gaming", date: "10 June, 2025", title: "The Best PS5 Accessories for 2025", desc: "From DualSense Edge to the latest headsets, here is what you need for an immersive experience in next-gen gaming.", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800" },
    { id: 4, category: "Smart Watches", date: "05 May, 2025", title: "Health Metrics That Actually Matter", desc: "How to interpret your heart rate variability and sleep stages using the latest sensor technology on your wrist.", img: "https://images.unsplash.com/photo-1544117518-2b462f587b1c?q=80&w=800" },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return allPosts.filter(p => 
      (activeCategory === "All" || p.category === activeCategory) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeCategory, search]);

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Breadcrumbs - Following Screenshot_6 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-1 text-sm text-gray-400">
          <span>Home</span>
          <MdChevronRight size={18} />
          <span className="text-black font-medium">Blog</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          
          {/* Search bar - Matches your Header Search style */}
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-[#F5F5F5] rounded-md py-3 pl-10 pr-4 outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Matches Screenshot_7 Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <h3 className="font-bold text-lg mb-6">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center justify-between px-4 py-3 rounded-md text-sm transition-all ${
                    activeCategory === cat.name 
                      ? 'bg-black text-white font-bold' 
                      : 'text-gray-500 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{cat.icon}</span>
                    {cat.name}
                  </div>
                  <MdChevronRight className={activeCategory === cat.name ? 'block' : 'hidden'} />
                </button>
              ))}
            </div>
          </aside>

          {/* Blog List - Horizontal Layout (Matches Screenshot_9 List Vibe) */}
          <main className="flex-1 space-y-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-gray-100 last:border-0 group"
              >
                {/* Image Section */}
                <div className="w-full sm:w-64 h-44 flex-shrink-0 overflow-hidden rounded-lg bg-[#F6F6F6]">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <MdCalendarToday size={12} /> {post.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.desc}
                  </p>
                  
                  <div>
                    <button className="text-sm font-bold border-b-2 border-black pb-0.5 hover:text-gray-500 hover:border-gray-300 transition-all">
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredPosts.length === 0 && (
              <div className="py-20 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
                No articles found for this selection.
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}