import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoc();
  }, []);

  const fetchDoc = async () => {
    try {
      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/doctor/get-all-doctors"
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch doctors");
      // setDoctors(data.doctors.slice(0, 3));

      setDoctors(data.doctors.filter((doc) => doc.image).slice(0, 3));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#045f89] mb-8">
          Our Professional Doctors
        </h2>

        {/* Doctors Grid */}
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
                {console.log(item.image)}
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

        {/* See All Doctors Button */}
        <div className="mt-10">
          <Link
            to="/all-doctors"
            className="bg-[#045f89] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#034d65] transition-colors"
          >
            See All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
