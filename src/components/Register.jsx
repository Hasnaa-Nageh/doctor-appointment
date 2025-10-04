import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name cannot exceed 50 characters",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
  }),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,128}$"))
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be 6-128 characters and include at least one letter and one number",
    }),
  "re-password": Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
    "any.required": "Repeat password is required",
  }),
});

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", "re-password": "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  async function submitForm(e) {
    e.preventDefault();
    setErrors({});
    const { error } = registerSchema.validate(form, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
        }
      );
      const data = await res.json();
      if (data.token) {
        navigate("/login");
      } else {
        setErrors({ general: data.message || "Registration failed" });
      }
    } catch {
      setErrors({ general: "Something went wrong!" });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submitForm} className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#045f89]">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#045f89]"
            }`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#045f89]"
            }`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#045f89]"
            }`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Repeat Password</label>
          <input
            type="password"
            name="re-password"
            value={form["re-password"]}
            onChange={handleChange}
            placeholder="Repeat Your Password"
            className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors["re-password"] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#045f89]"
            }`}
            required
          />
          {errors["re-password"] && <p className="text-red-500 text-sm mt-1">{errors["re-password"]}</p>}
        </div>

        {errors.general && <p className="text-red-500 text-center mb-4">{errors.general}</p>}

        <button
          type="submit"
          className="w-full bg-[#045f89] text-white py-3 rounded-lg hover:bg-[#034d65] transition-colors font-semibold text-lg"
        >
          Register
        </button>

        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-[#045f89] font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
