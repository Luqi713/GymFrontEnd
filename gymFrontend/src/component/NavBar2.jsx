import React, { useState } from 'react';
import heroimg from "../assets/heroImg.jpeg"
import OurProcess from './OurProcess';
import FeaturesSection from './OurServices'; 
import ContactForm from './Contact';
import Pricing from './Plan';
import GymFooter from './Footer';

const Navbar2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const menuItems = [
    { text: 'Features', link: '#features' },
    { text: 'Workouts Process', link: '#process' },
    { text: 'Prices & Plans', link: '#price' },
    { text: 'Contact us', link: '#contact' },
    { text: 'Sign up', link: '/signup' },
  ];

  const sidebarClass = "fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center";
  const menuItemClass = "text-white text-lg mb-4";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <div className="relative">
      <nav className="flex justify-around items-center p-4 text-red-500 nav">
        <div className="text-2xl font-bold"><a href="/">Fitness | First</a></div>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className="text-base font-bold rounded-full  hover:text-gray-600">{item.text}</a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          {(sidebarOpen === true) ? "Close" : "Menu"}
        </button>
      </nav>

      {sidebarOpen && (
        <div className={sidebarClass}>
          <button className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
        
          </button>
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className={menuItemClass}>{item.text}</a>
          ))}
        </div>
      )}

      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroimg})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8" style={{padding:"5%"}}>
          <h1 className="text-white text-5xl font-bold mb-4">IT’S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
          <p className="text-white text-lg mb-8">Empower yourself to make the changes you need to make</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Get Started</button>
        </div>
      </div>
    </div>

    <center>
        <div className="container">
            <OurProcess/>
        </div>
    </center>
    <center>
        <div className="container">
            <FeaturesSection/>
        </div>
    </center>
    <center>
        <div className="container">
            <Pricing/>
        </div>
    </center>
    <center>
        <div className="container">
            <ContactForm/>
        </div>
    </center>
    <GymFooter/>

    </>
  );
};

export default Navbar2;
