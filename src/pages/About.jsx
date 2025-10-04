import React from "react";
import { Users, HeartPulse, Target, Award } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#045f89] mb-4">
            About Our Medical Center
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We are committed to providing high-quality healthcare services with
            compassion, innovation, and excellence. Your health and comfort are
            our top priorities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <img
            src="https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
            alt="Our Team"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#045f89] mb-3">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              Our platform connects patients with trusted doctors and healthcare
              professionals to make booking medical appointments simple and
              efficient. We aim to revolutionize healthcare accessibility.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              With cutting-edge technology and a dedicated team, we ensure
              smooth communication between patients and medical experts anytime,
              anywhere.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 text-center">
            <Users className="w-10 h-10 text-[#045f89] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#045f89] mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600 text-sm">
              A network of highly qualified and experienced medical professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 text-center">
            <HeartPulse className="w-10 h-10 text-[#045f89] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#045f89] mb-2">
              Patient Care
            </h3>
            <p className="text-gray-600 text-sm">
              Compassionate care that prioritizes your health and well-being.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 text-center">
            <Target className="w-10 h-10 text-[#045f89] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#045f89] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              To make healthcare more accessible, efficient, and reliable for everyone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 text-center">
            <Award className="w-10 h-10 text-[#045f89] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#045f89] mb-2">
              Excellence
            </h3>
            <p className="text-gray-600 text-sm">
              Continuous improvement and innovation in healthcare technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
