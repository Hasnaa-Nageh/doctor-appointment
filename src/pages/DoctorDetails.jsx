import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchSingleDoctor(id);
  }, [id]);

  async function fetchSingleDoctor(id) {
    try {
      const res = await fetch(
        `https://doctor-appointment-backend-cyan.vercel.app/api/doctor/get-single-doctor/${id}`
      );
      const data = await res.json();
      console.log(data);
      setDoctor(data.doctors);
    } catch (err) {
      console.error("Error fetching doctor:", err);
    }
  }

  if (!doctor)
    return (
      <div className="text-center mt-10 text-gray-500 animate-pulse">
        Loading...
      </div>
    );
 return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-[205px] mt-[100px] flex flex-col md:flex-row items-center md:items-start gap-10">
      
      <div className="flex-shrink-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-[#0d7b94]"
        />
      </div>

      <div className="flex-1 text-left">
        <h2 className="text-3xl font-bold text-[#045f89] mb-3">
          {doctor.name}
        </h2>
        <p className="text-gray-600 text-lg mb-1 font-medium">
          {doctor.specialty}
        </p>
        <p className="text-gray-500 mb-4">
          Experience: {doctor.experienceYears} years
        </p>
        <p className="text-gray-700 leading-relaxed text-[16px]">
          {doctor.description}
        </p>
      </div>
    </div>
  );
}

export default DoctorDetails;