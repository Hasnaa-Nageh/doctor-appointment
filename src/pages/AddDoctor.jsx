import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function AddDoctor() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    experienceYears: "",
    description: "",
    specialty: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [alert, setAlert] = useState({ text: "", type: "", show: false });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("specialty", form.specialty);
      formData.append("experienceYears", form.experienceYears);
      formData.append("description", form.description);
      if (form.image) {
        formData.append("image", form.image);
      }
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/doctor/add-doctor",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      if (res.ok) {
        setAlert({
          text: "Doctor added successfully!",
          type: "success",
          show: true,
        });
        setForm({
          name: "",
          experienceYears: "",
          description: "",
          specialty: "",
          image: null,
        });
        setPreview(null);
      } else {
        setAlert({
          text: data.message || "Failed to add Doctor",
          type: "error",
          show: true,
        });
      }
    } catch (err) {
      console.error(err);
      setAlert({ text: "Something went wrong!", type: "error", show: true });
    }
  }

  if (!user || user.role !== "admin") {
    return <div>Only admin can add doctors</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={submitForm}
        encType="multipart/form-data"
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="col-span-2 text-2xl font-bold mb-2 text-[#045f89] text-center">
          Add New Doctor
        </h2>

        {alert.show && (
          <p
            className={`col-span-2 mb-4 text-center ${
              alert.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {alert.text}
          </p>
        )}

        <div className="flex flex-col items-center">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-full mb-4 border"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-full mb-4">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mb-2"
            required
          />
          <label className="text-sm text-gray-600">Choose Image</label>
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Enter doctor name"
            value={form.name}
            onChange={handleChange}
            className="mb-4 px-4 py-2 border border-gray-300 rounded"
            required
          />

          <input
            type="text"
            name="specialty"
            placeholder="Enter specialty"
            value={form.specialty}
            onChange={handleChange}
            className="mb-4 px-4 py-2 border border-gray-300 rounded"
            required
          />

          <input
            type="number"
            name="experienceYears"
            placeholder="Enter experience years"
            value={form.experienceYears}
            onChange={handleChange}
            className="mb-4 px-4 py-2 border border-gray-300 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Enter description"
            value={form.description}
            onChange={handleChange}
            className="mb-6 px-4 py-2 border border-gray-300 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#045f89] text-white py-2 rounded hover:bg-[#034d65] transition-colors"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDoctor;
