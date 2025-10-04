import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function AddAppointment() {
  const { user } = useContext(AuthContext);
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    reason: "",
  });
  const [alert, setAlert] = useState({ text: "", type: "", show: false });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/doctor/get-all-doctors"
      );
      const data = await res.json();
      setDoctors(data.doctors || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      showAlert("You need to login to add an appointment", "error");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/appointment/create-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (data.ok) {
        showAlert("Appointment added successfully!", "success");
        setForm({ doctor: "", date: "", reason: "" });
      } else {
        showAlert(data.message || "Failed to add appointment", "error");
      }
    } catch (err) {
      console.error(err);
      showAlert("Something went wrong!", "error");
    }
  };

  const showAlert = (text, type) => {
    setAlert({ text, type, show: true });
    setTimeout(() => setAlert({ ...alert, show: false }), 3000); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative">
      {/* Notification */}
      {alert.show && (
        <div
          className={`absolute top-4 right-4 px-4 py-2 rounded shadow-lg font-semibold transition-transform
          ${alert.type === "success" ? "bg-[#045f89] text-white" : "bg-[#045f89] text-white"}`}
        >
          {alert.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#045f89] text-center">
          Add Appointment
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Select Doctor</label>
          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#045f89]"
            required
          >
            <option value="">Select Doctor</option>
            {Array.isArray(doctors) &&
              doctors.map((doc) => (
                <option key={doc._id} value={doc._id}>
                  {doc.name} - {doc.specialty}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#045f89]"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            placeholder="Enter reason for appointment"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#045f89]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#045f89] text-white py-2 rounded hover:bg-[#034d65] transition-colors font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddAppointment;
