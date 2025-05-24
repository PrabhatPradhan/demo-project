import React from 'react'
import Footer from '../Componets/Footer/Footer'
import Navbar from '../Componets/Navbar/Navbar'
import Link from "next/link";
import { FaClock, FaCalendarCheck, FaUsers } from "react-icons/fa";
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
export default function page() {
  return (
     <>
     <Navbar/>
     <EnquiryForm/>
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
            Appointment
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / Appointment
          </p>
        </div>
      </section>
     <div className="min-h-screen flex items-center justify-center bg-white px-6 py-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Form Section */}
        <form className="space-y-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Appointment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Full Name*"
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input
                type="text"
                required
                placeholder="Mobile Number*"
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Address</label>
            <textarea
              placeholder="Address"
              className="w-full border rounded px-4 py-2"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Choose Your Appliance</label>
            <select className="w-full border rounded px-4 py-2">
              <option>Choose Your Appliance</option>
              <option>TV</option>
              <option>Refrigerator</option>
              <option>Washing Machine</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Choose Your Plan</label>
            <select className="w-full border rounded px-4 py-2">
              <option>Choose Your Plan</option>
              <option>Basic</option>
              <option>Premium</option>
              <option>Gold</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-2 px-6 rounded mt-4"
          >
            SUBMIT
          </button>
        </form>

        {/* Image Section */}
        <div className="w-full">
          <img
            src="https://newtackserviceplatform.com/public/front/images/Appointment.jpg"
            alt="Appointment"
            className="w-full h-auto rounded shadow"
          />
        </div>
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
          <h3 className="text-xl font-bold text-black mb-1">24 Hours Appointment</h3>
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
    <Footer/>
     </>
  )
}
