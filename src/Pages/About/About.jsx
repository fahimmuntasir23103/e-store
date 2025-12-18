import {
  FiAward,
  FiUsers,
  FiShoppingBag,
  FiTrendingUp,
  FiTarget,
  FiHeart,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";

export default function AboutUsPage() {
  const stats = [
    { icon: FiShoppingBag, value: "50K+", label: "Products Sold" },
    { icon: FiUsers, value: "100K+", label: "Happy Customers" },
    { icon: FiAward, value: "15+", label: "Years Experience" },
    { icon: FiTrendingUp, value: "98%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: FiTarget,
      title: "Our Mission",
      description:
        "To provide cutting-edge technology products that enhance everyday life, making innovation accessible to everyone.",
    },
    {
      icon: FiHeart,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction above all else, ensuring every interaction exceeds expectations.",
    },
    {
      icon: FiShield,
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous testing to guarantee the highest standards of quality and reliability.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
    {
      name: "David Martinez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to revolutionize tech retail",
    },
    {
      year: "2012",
      title: "First Milestone",
      description: "Reached 10,000 satisfied customers",
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Opened 5 new locations nationwide",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our e-commerce platform",
    },
    {
      year: "2023",
      title: "Innovation Leader",
      description: "Recognized as industry leader in customer service",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="border-b bg-white border-gray-100">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span>Home</span> <MdChevronRight size={14} />
            <span>Journal</span> <MdChevronRight size={14} />
            <span className="text-black">Article Detail</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted Technology Partner Since 2008
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              We're more than just an electronics store. We're a community of
              tech enthusiasts dedicated to bringing you the latest and greatest
              in consumer electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
                alt="Our Store"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Founded in 2008 with a simple mission: make cutting-edge
                technology accessible to everyone. What started as a small
                retail store has grown into a trusted destination for tech
                enthusiasts nationwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From smartphones to smart home devices, we carefully curate our
                selection to ensure you have access to products that truly make
                a difference in your daily life. Every product we offer is
                tested, verified, and backed by our commitment to quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-black mb-1">
                    100K+
                  </div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-1">50K+</div>
                  <div className="text-gray-600 text-sm">Products Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape our commitment to
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leader, here's how we've grown
              over the years.
            </p>
          </div>

          {/* Mobile & Tablet: Simple Cards */}
          <div className="md:hidden space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <div className="text-3xl font-bold text-black mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop: Zigzag Timeline */}
          <div className="hidden md:block max-w-4xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Left side content (even index) */}
                  {index % 2 === 0 ? (
                    <div className="grid grid-cols-2 gap-8 items-center">
                      {/* Content on left */}
                      <div className="text-right pr-8">
                        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-black mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>

                      {/* Dot in center */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                        <div className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-md"></div>
                      </div>

                      {/* Empty space on right */}
                      <div></div>
                    </div>
                  ) : (
                    /* Right side content (odd index) */
                    <div className="grid grid-cols-2 gap-8 items-center">
                      {/* Empty space on left */}
                      <div></div>

                      {/* Dot in center */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                        <div className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-md"></div>
                      </div>

                      {/* Content on right */}
                      <div className="pl-8">
                        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-black mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind our success, dedicated to serving
            you better every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of satisfied customers who trust us for their
              technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
