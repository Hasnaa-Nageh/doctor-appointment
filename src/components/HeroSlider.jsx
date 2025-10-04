import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero1 from "./../imgs/Hero1.jpg";
import Hero2 from "./../imgs/Hero2.jpg";
import Hero3 from "./../imgs/Hero3.jpg";

function HeroSlide() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      image: Hero2,
      title: "Your Health, Our Priority",
      text: "We provide advanced medical care with experienced doctors, modern technology, and a caring approach for every patient.",
    },
    {
      image: Hero3,
      title: "Compassion in Every Step",
      text: "We treat every patient with empathy, ensuring comfort and trust throughout their healing journey.",
    },
    {
      image: Hero1,
      title: "Excellence in Healthcare",
      text: "Our hospital combines skilled professionals, modern facilities, and personalized care for the best outcomes.",
    },
  ];

  return (
    <section className="relative w-full h-[80vh]">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="relative w-full h-[80vh]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="max-w-2xl text-lg md:text-xl mb-6">{item.text}</p>
              <button to="/"
                className="inline-block bg-[#045f89] px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlide;
