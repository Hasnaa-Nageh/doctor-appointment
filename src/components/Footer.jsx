import React from "react";

function Footer() {
  return (
    <footer className="bg-[#045f89] text-white py-3 mt-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Designed by{" "}
          <span className="font-bold">Hasnaa Nageh Abo El Dahb</span>
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://linkedin.com/in/hasnaa-nageh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>

          <a href="mailto:hassnaanageh3@gmail.com/" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
