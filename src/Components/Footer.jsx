import React from "react";
import s1 from "../Image/Social Icons.png"
import s2 from "../Image/sicon3.png"
import s3 from "../Image/Social Icons y.png"
import s4 from "../Image/Social Icons t.png"
import imagelogo from "../Image/Logooo.png";

const Footer = () => {
  return (
    <div style={{ width: "1440px", height: "628px" }} className="bg-[#F5F7FA] mx-auto">
      <div
        style={{ width: "1440px", height: "300px" }}
        className="flex flex-col justify-center items-center gap-12"
      >
        <div
          style={{ width: "887px", height: "152px" }}
          className=" text-center"
        >
          <h1 className="text-[64px] font-semibold">
            Pellentesque suscipit fringilla libero eu.
          </h1>
        </div>
        <div>
          <button
            className="flex justify-center items-center bg-[#4CAF4F] text-white rounded gap-1"
            style={{
              width: "178px",
              height: "52px",
              padding: "14px 32px 14px 32px",
            }}
          >
            Get a Demo{" "}
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
      <div
        style={{
          width: "1440px",
          height: "328px",
          padding: "64px 165px 64px 165px",
        }}
        className="bg-[#263238] flex gap-[125px]"
      >
        <div
          className="flex gap-10 flex-col"
          style={{ width: "350px", height: "189.67px" }}
        >
          <div>
            <img
              style={{ width: "191px", height: "29.67px" }}
              src={imagelogo}
              alt="logo"
            />
          </div>
          <div
            style={{ width: "350px", height: "48px" }}
            className="flex gap-2 flex-col"
          >
            <p className="font-normal text-sm text-white">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="font-normal text-sm text-white">
              All rights reserved
            </p>
          </div>
          <div
            style={{ width: "176px", height: "32px" }}
            className="flex gap-4"
          >
            <img
              style={{ width: "32px", height: "32px" }}
              src={s1}
              alt="instagram"
            />
            <img
              style={{ width: "32px", height: "32px" }}
              src={s2}
              alt="Social"
            />
            <img
              style={{ width: "32px", height: "32px" }}
              src={s3}
              alt="twitter"
            />
            <img
              style={{ width: "32px", height: "32px" }}
              src={s4}
              alt="youtube"
            />
          </div>
        </div>
        <div
          style={{ width: "635px", height: "200px" }}
          className="flex gap-[30px]"
        >
          <div
            style={{ width: "160px", height: "148px" }}
            className="flex flex-col gap-3"
          >
            <h4 className="font-semibold text-[20px] text-white">Company</h4>
            <div className="font-normal text-[14px] text-white flex flex-col gap-3">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div
            style={{ width: "160px", height: "148px" }}
            className="flex flex-col gap-3"
          >
            <h4 className="font-semibold text-[20px] text-white">Support</h4>
            <div className="font-normal text-[14px] text-white flex flex-col gap-3">
              <p>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy policy</p>
              <p>Status</p>
            </div>
          </div>
          <div
            style={{ width: "255px", height: "40px" }}
            className="flex flex-col gap-2"
          >
            <h4 className="font-semibold text-[20px] text-white">
              Stay up to date
            </h4>
            <div style={{ opacity: "20%"  }}>
              <input
                id="footer-email"
                style={{ width: "255px", height: "40px",paddingLeft:"10px" }}
                className="rounded-lg"
                type="email"
                placeholder="your email address"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;