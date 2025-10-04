import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  User2,
  Activity,
} from "lucide-react";

function Service() {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-[#045f89]" />,
      title: "General Consultation",
      desc: "Comprehensive health checkups and expert medical advice for all age groups.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#045f89]" />,
      title: "Cardiology",
      desc: "Specialized care for heart diseases with modern diagnostic tools and treatments.",
    },
    {
      icon: <Microscope className="w-10 h-10 text-[#045f89]" />,
      title: "Laboratory Tests",
      desc: "Accurate and fast lab results with advanced diagnostic equipment.",
    },
    {
      icon: <Syringe className="w-10 h-10 text-[#045f89]" />,
      title: "Vaccination",
      desc: "Routine immunizations and preventive vaccines for children and adults.",
    },
    {
      icon: <User2 className="w-10 h-10 text-[#045f89]" />,
      title: "Dermatology",
      desc: "Expert skin care treatments and diagnosis of dermatological conditions.",
    },
    {
      icon: <Activity className="w-10 h-10 text-[#045f89]" />,
      title: "Emergency Care",
      desc: "24/7 emergency services with rapid response and professional care.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#045f89] mb-4">
          Our Medical Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          We provide a wide range of medical and healthcare services to ensure
          the best possible treatment and patient satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#045f89] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
