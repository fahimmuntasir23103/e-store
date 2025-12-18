import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiChevronRight,
} from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span>Home</span> <MdChevronRight size={14} />
            <span>Journal</span> <MdChevronRight size={14} />
            <span className="text-black">Article Detail</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help! Fill out the
            form below or reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <FiPhone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-sm mb-3">
              Monday to Friday from 9am to 6pm
            </p>
            <a
              href="tel:+8801234567890"
              className="text-black font-medium hover:underline"
            >
              +880 1234 567 890
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <FiMail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-3">
              Our support team will respond within 24 hours
            </p>
            <a
              href="mailto:support@cyber.com"
              className="text-black font-medium hover:underline"
            >
              support@cyber.com
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <FiMapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Office</h3>
            <p className="text-gray-600 text-sm mb-3">
              Visit our office for direct assistance
            </p>
            <p className="text-black font-medium">
              123 Street, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </div>
          </div>

          {/* Map & Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 h-64 lg:h-80">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613.5027865788273!2d89.54235871400195!3d22.844586568155645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9a9b495951cf%3A0x2e4bf2dcf241b56d!2sKhulna%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1766057962593!5m2!1sen!2sbd"
                 className="h-full w-full"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <FiClock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Need Quick Answers?
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Check out our FAQ section for instant answers to common
                questions.
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                View FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our customer support team is available to assist you with any
              questions or concerns. We strive to provide the best service
              possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">24/7</div>
                <p className="text-sm text-gray-600">Customer Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">100k+</div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">4.8★</div>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
