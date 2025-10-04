import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctors();
  }, []);

  async function getAllDoctors() {
    const res = await fetch(
      "https://doctor-appointment-backend-cyan.vercel.app/api/doctor/get-all-doctors"
    );
    const data = await res.json();
    console.log(data.doctors);
    setDoctors(data.doctors);
  }
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#045f89] mb-8">
          Our Professional Doctors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {doctors.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-[#045f89] font-medium mb-2">
                  {item.specialty}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Experience: {item.experienceYears} years
                </p>
                <Link
                  to={`/all-doctors/${item._id}`}
                  className="inline-block bg-[#045f89] text-white px-4 py-2 rounded-lg hover:bg-[#034d65] transition-colors text-sm font-medium"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllDoctors;
