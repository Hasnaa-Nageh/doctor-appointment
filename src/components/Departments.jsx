import React, { useEffect, useState } from "react";

function Departments() {
  const [dept, setDept] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/department/all-department"
      );
      const data = await res.json();

      const departments = Array.isArray(data) ? data : data.department || [];

      if (departments.length === 0) {
        setError("No departments found.");
      } else {
        setDept(departments);
        setActiveTab(departments[0]._id);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load departments.");
    } finally {
      setLoading(false);
    }
  };

  const handelTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="py-12 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
          Departments
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our medical departments and find the right care for your
          health. Click on any department to see detailed information and
          services offered.
        </p>
      </div>

      {/* Loading & Error */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Content */}
      {!loading && !error && (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <ul className="flex overflow-x-auto md:overflow-visible md:flex-col md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0">
            {dept.map((item) => (
              <li key={item._id} className="flex-shrink-0">
                <button
                  onClick={() => handelTabClick(item._id)}
                  className={`block w-full text-left md:w-48 lg:w-56 px-4 py-2 my-2 rounded-md transition-colors duration-300 ${
                    activeTab === item._id
                      ? "bg-[#045f89] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Details */}
          <div className="flex-1 bg-gray-50 rounded-xl shadow-md p-6">
            {dept
              .filter((item) => item._id === activeTab)
              .map((item) => (
                <div key={item._id} className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Departments;
