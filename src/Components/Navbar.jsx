import React from 'react';
 import image from "../Image/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#F5F7FA] mx-auto  flex items-center justify-around " style={{height:"84px",width:"1440px"}}>
      <div >
      <img className="w-24  " src={image} style={{height:"24px",width:"154.49px"}}/>
      </div>

      {/* Navigation Links */}
      <div className="flex  font-normal text-base text-black justify-between item-center "style={{height:"24px",width:"558px"}}>
        <a href="#" >Home</a>
        <a href="#" >Services</a>
        <a href="#" >Features</a>
        <a href="#" >Product</a>
        <a href="#" >Testimonial</a>
        <a href="#" >FAQ</a>

      </div>

      {/* Login and Signup Buttons */}
      <div className="flex justify-between align-center gap-3.5"style={{height:"40px",width:"182px"}}>
        <button className=" text-[#4CAF4F]  font-medium  rounded-md gap-2.5"style={{height:"40px",width:"77px",padding:"10px 20px 10px 20px"}}>Login</button>
        <button className="bg-[#4CAF4F] text-white font-medium rounded-md  gap-2.5"style={{height:"40px",width:"91px",padding:"10px 20px 10px 20px"}}>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
