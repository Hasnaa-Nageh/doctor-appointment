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
    <section className="py-12 bg-white max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Departments</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our medical departments and find the right care for your
          health. Click on any department to see detailed information and
          services offered.
        </p>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col md:flex-row gap-6">
        <ul className="flex md:flex-col space-x-4 md:space-x-0 border-b md:border-b-0 md:border-r border-gray-300">
          {dept.map((item) => (
            <li key={item._id}>
              <button
                onClick={() => handelTabClick(item._id)}
                className={`block mt-3 w-40 mr-4 px-4 py-2 rounded-t md:rounded-tr-none md:rounded-l ${
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

        <div className="flex-1 bg-gray-50 rounded shadow p-4">
          {dept
            .filter((item) => item._id === activeTab)
            .map((item) => (
              <div key={item._id} className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
