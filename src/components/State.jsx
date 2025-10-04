import React, { useEffect, useState } from "react";

function States() {
  const [doctorCount, setDoctorCount] = useState(0);
  const [deptCount, seDeptCount] = useState(0);

  useEffect(() => {
    fetchState();
  }, []);
  const fetchState = async () => {
    try {
      const doctorState = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/doctor/counts"
      );
      const departmentsState = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/department/counts"
      );
      const doctorData = await doctorState.json();
      const departmentData = await departmentsState.json();

      setDoctorCount(doctorData.count || 0);
      seDeptCount(departmentData.count || 0);

    } catch (err) {
      console.log(err);
    }
  };

  const states = [
    {
      icon: <i className="fas fa-user-md"></i>,
      count: doctorCount,
      label: "Doctors",
    },
    {
      icon: <i className="fas fa-hospital"></i>,
      count: deptCount,
      label: "Departments",
    },
    {
      icon: <i className="fas fa-flask"></i>,
      count: 8,
      label: "Research Labs",
    },
    {
      icon: <i className="fas fa-award"></i>,
      count: 6,
      label: "Awards",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* 
      grid-cols-1 => موبايل (واحدة تحت بعض)
      md:grid-cols-2 => من شاشة ميديام (تابلت) اتنين جمب بعض
      lg:grid-cols-4 => من شاشة كبيرة (لابتوب/ديسكتوب) أربعة جنب بعض
    */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {states.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition"
              >
                <div className="text-4xl text-blue-900 mb-3">{item.icon}</div>

                <h3 className="text-2xl font-bold text-gray-800">
                  {item.count}
                </h3>

                <p className="text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default States;
