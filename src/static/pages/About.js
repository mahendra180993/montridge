import React from "react";
import img1 from '../img/img1.jpeg'

const About = () => {
  console.log('hello test');
  return(
    <>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat. Quisque sagittis, nisi sit amet placerat suscipit, metus quam fringilla libero, at egestas enim justo in magna.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Mauris auctor, odio vitae fermentum elementum, ligula mi interdum velit, id convallis est ante non lacus. Proin vitae erat fermentum, dignissim nunc a, egestas felis. In porta, mauris vel tempor pellentesque, nulla magna pellentesque tortor, sit amet ultricies nunc nisi id sapien.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Fusce eleifend tellus nec justo fringilla, nec sollicitudin metus pellentesque. Donec vel elit metus. Integer quis velit in nisi varius blandit. Suspendisse potenti. Nullam eu condimentum urna. Maecenas ultrices at felis nec efficitur.
          </p>
          <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
        </div>
        <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our School</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
          </div>
          <div className="lg:order-last">
            <img src={img1} alt="ex" className="rounded-lg shadow-lg h-72 w-full" />
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;