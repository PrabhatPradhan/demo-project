"use client";
import { useState } from "react";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";
import Link from "next/link";
import { FaClock, FaCalendarCheck, FaUsers } from "react-icons/fa";
export default function page() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Rakhi Rathore",
      message: "The trip was great we all explore all things in manali...",
      rating: 5,
    },
    {
      name: "Preeti",
      message: "Good service, hotel Was good neat & clean...",
      rating: 5,
    },
    {
      name: "Deepika",
      message: "The tour was exceptional! The guide was knowledgeable...",
      rating: 4,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setTestimonials([
      { ...formData, rating: Number(formData.rating) },
      ...testimonials,
    ]);
    setFormData({ name: "", email: "", message: "", rating: 5 });
  };

  return (
    <>
      <Navbar />
      <ServiceCenterCard />
      <EnquiryForm />

      {/* Feedback Hero Section */}
      <section
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with actual image path or URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">
            {" "}
            Feedback
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / Feedback
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Why Your Feedback Matters
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              At <strong>Minto Holidays</strong>, your happiness drives
              everything we do...
              <br />
              <br />
              <strong>Share Your Experience</strong> At Minto Holidays, your
              happiness drives everything we do. Your feedback helps us enhance
              our services, ensuring every trip is truly unforgettable. Whether
              it’s a suggestion, compliment, or constructive insight, your voice
              matters. It shows us what we’re doing right and where we can
              improve. 💬 By sharing your experience, you’re not just helping
              us—you’re shaping better holidays for future travelers. We value
              your time and are committed to turning your feedback into action.
              ✍️ Share Your Experience We’d love to hear from you! Whether
              you’ve just returned or are planning your next trip, let us know
              how we can make your next holiday even more special. Thank you for
              being part of the Minto Holidays family. We can’t wait to welcome
              you back soon! 🏖️✈️
            </p>
          </div>

          {/* Form */}
          <div className="bg-white shadow-xl rounded-xl p-4 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              Feedback Form
            </h2>
            <p className="text-gray-600 text-center mb-3 text-sm">
              We'd love to hear your thoughts!
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Write your thoughts here..."
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 && "s"}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2">
          Voices of Our Travelers
        </h2>
        <p className="text-center mb-6 text-gray-600">
          Share Your Story, Shape the Journey – Because Every Experience
          Matters!
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 p-4 rounded-lg text-center shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="font-bold mb-1 capitalize">{item.name}</h3>
              <p className="mb-2 text-sm text-gray-700">{item.message}</p>
              <div className="text-yellow-500 text-lg">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 px-6 md:px-28 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {/* Box 1 */}
          <div className="border border-orange-500 p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-6 flex justify-center">
              <FaClock className="text-6xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Get Service</h3>
            <p className="text-lg font-semibold text-black">Within 45 mins</p>
          </div>

          {/* Box 2 */}
          <div className="border border-orange-500 p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-6 flex justify-center">
              <FaCalendarCheck className="text-6xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">
              24 Hours Appointment
            </h3>
            <p className="text-lg font-semibold text-black">Booking</p>
          </div>

          {/* Box 3 */}
          <div className="border border-orange-500 p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-6 flex justify-center">
              <FaUsers className="text-6xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Serve 10,000+</h3>
            <p className="text-lg font-semibold text-black">Customers</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
