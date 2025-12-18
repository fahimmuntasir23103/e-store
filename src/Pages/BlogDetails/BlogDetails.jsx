import React from "react";
import {
  MdChevronRight,
  MdCalendarToday,
  MdPerson,
  MdOutlineShare,
  MdStar,
} from "react-icons/md";

const post = {
  title: "iPhone 15 Pro: The Titanium Revolution",
  category: "Technology",
  date: "July 24, 2025",
  author: "Admin",
  img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1200",
  content: [
    "The transition to titanium isn't just about a new look; it's a fundamental shift in how Apple approaches the weight and durability of its flagship devices. In our testing, the first thing noticed was the remarkable weight reduction.",
    "The new Action Button is another highlight that changes the daily workflow. Instead of a simple mute switch, you now have a customizable tool that can launch the camera, turn on the flashlight, or even trigger a complex Siri Shortcut.",
    "Performance-wise, the A17 Pro chip is a beast. We tested it with several AAA console-quality games, and the ray tracing capabilities are genuinely impressive for a device that fits in your pocket.",
  ],
};

const reviews = [
  {
    id: 1,
    user: "Grace Dean",
    date: "July 26, 2025",
    text: "A very detailed breakdown of the structural changes. The weight difference is definitely the highlight of this generation.",
  },
  {
    id: 2,
    user: "Monalisa",
    date: "July 28, 2025",
    text: "Excellent article. I'd love to see a comparison with the standard model in the next post.",
  },
];

export default function BlogDetails() {
  return (
    <div className="bg-white min-h-screen text-black antialiased font-sans">
      {/* 1. STANDARD TOP NAV BORDER */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span>Home</span> <MdChevronRight size={14} />
            <span>Journal</span> <MdChevronRight size={14} />
            <span className="text-black">Article Detail</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT CONTENT: 8 COLUMNS */}
          <div className="lg:col-span-8">
            <header className="mb-10">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 border-y border-gray-100">
                <span className="flex items-center gap-2">
                  <MdCalendarToday size={14} className="text-black" />{" "}
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <MdPerson size={14} className="text-black" /> {post.author}
                </span>
                <span className="flex items-center gap-2 ml-auto cursor-pointer hover:text-black transition-colors">
                  <MdOutlineShare size={14} className="text-black" /> Share
                </span>
              </div>
            </header>

            <div className="mb-12">
              <img
                src={post.img}
                alt=""
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 h-[450px] object-cover bg-[#F6F6F6]"
              />
            </div>

            <article className="space-y-8 text-gray-600 text-lg leading-relaxed border-b border-gray-100 pb-20">
              {post.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>

            {/* REVIEWS SECTION - STANDARDIZED */}
            <section className="mt-20">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-xl font-bold uppercase tracking-widest">
                  User Reviews ({reviews.length})
                </h3>
              </div>

              <div className="space-y-10 mb-20">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="border-b border-gray-50 pb-8 last:border-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-[10px] font-bold">
                          {rev.user.charAt(0)}
                        </div>
                        <h4 className="text-xs font-black uppercase tracking-widest">
                          {rev.user}
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold text-gray-300 uppercase">
                        {rev.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pl-11">
                      {rev.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* OFFICIAL FORM - NO ROUNDED CORNERS */}
              <div className="bg-[#F6F6F6] p-10">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8">
                  Leave a Comment
                </h4>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black transition-all"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-[9px] font-bold uppercase text-gray-400">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="bg-black text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all w-max">
                    Submit Review
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR: 4 COLUMNS */}
          <aside className="lg:col-span-4">
            <div className="sticky top-25 space-y-12">
              {/* FEATURED BOX */}
              <div className="border border-black p-8">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4">
                  Official Journal
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Insights into our latest hardware releases and technical
                  breakthroughs.
                </p>
                <div className="bg-black text-white p-4 text-[10px] font-bold text-center tracking-widest cursor-pointer uppercase">
                  View All News
                </div>
              </div>

              {/* LATEST LIST */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b border-gray-100 pb-2">
                  Recent Posts
                </h3>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                      <p className="text-[9px] font-bold text-gray-300 uppercase mb-1">
                        July 1{i}, 2025
                      </p>
                      <h5 className="text-sm font-bold group-hover:text-gray-400 transition-colors leading-snug uppercase tracking-tight">
                        Unlocking the potential of A17 Pro Architecture
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
