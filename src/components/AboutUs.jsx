import React from "react";
import Team from "./../imgs/Team.jpg";
function AboutUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          We are committed to providing top-quality healthcare services,
          ensuring that every patient receives the attention and care they
          deserve.
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Our mission is to combine medical expertise with modern technology to
          make healthcare more accessible, reliable, and compassionate.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={Team}
            alt="Our Team"
            className="rounded-2xl shadow-lg w-full md:w-1/2"
          />
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 text-lg">
              Our team of doctors, nurses, and healthcare specialists work
              together to deliver the best care possible. We believe in building
              trust, offering support, and always putting patients first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
