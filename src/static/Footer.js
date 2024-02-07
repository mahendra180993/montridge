import React from "react";

const Footer = () => {
  return(
    <>
      <footer className="bg-blue-700 py-8 ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First Column */}
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-4 px-4 text-left">About Us</h2>
            <p className="px-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit tellus vitae quam consectetur tincidunt.</p>
          </div>

          {/* Second Column */}
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-4 px-4 text-left">Social Media</h2>
            <ul className="flex">
              <li className="mr-4"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="mr-4"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="mr-4"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="mr-4"><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="text-white text-left px-4">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <p>123 Main Street, City, Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;