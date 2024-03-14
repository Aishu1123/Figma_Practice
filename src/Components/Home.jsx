import React from "react";
import "../Components/home.css"
import image from "../Image/Illustration.png"
import image1 from "../Image/Logo (1).png"
import image2 from "../Image/Logo (2).png"
import image3 from "../Image/Logo (3).png"
import image4 from "../Image/Logo (4).png"
import image5 from "../Image/Logo (5).png"
import image6 from "../Image/Logo (6).png"
import image7 from "../Image/Logo (7).png"
import icon1 from "../Image/Icon (1).png"
import icon2 from "../Image/Icon (2).png"
import icon3 from "../Image/Icon (3).png"

const Home = () => {
  return (
  <div
      // style={{ width: "1440px", height: "1285px" }}
      className="flex flex-col gap-10 mx-auto w-[1440px] h-[1285px]" >
    
    <div className="bg-[#F5F7FA]"
        style={{
          width: "1440px",
          height: "599px",
          padding: "96px 144px 96px 144px",
          display: "flex",
        }}
      >
        <div
          style={{ width: "657px", height: "276px" }}
          className="flex flex-col gap-8 justify-center"
        >
          <div style={{ width: "657px", height: "192px" }}>
            <h1 className="font-semibold text-[64px]">
              Lessons and insights <br />
              <span className="text-[#4CAF4F] ">from 8 years</span>
            </h1>
          </div>
          <div
            style={{ width: "657px", height: "24px" }}
            className="text-base font-normal"
          >
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <button
            className="bg-[#4CAF4F] rounded text-white"
            style={{
              width: "128px",
              height: "52px",
              padding: "14px 32px 14px 32px",
            }}
          >
            Register
          </button>
        </div>
        <div style={{ marginLeft: "104px", width: "391px", height: "407px" }}>
          <img  src={image} alt="Illustration" />
        </div>
     </div>
      <div className="second-container">
        <div
          style={{
            width: "1110px",
            height: "76px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "1110px",
              height: "44px",
              textAlign: "center",
            }}
          >
            <h2>Our Clients</h2>
          </div>
          <div
            style={{
              width: "1110px",
              height: "24px",
              textAlign: "center",
            }}
          >
            <p>We have been working with some Fortune 500+ clients</p>
          </div>
        </div>
        <div
          className="second-container-inner-second"
          style={{
            width: "1152px",
            height: "98px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={image1} alt="logo1" />
          <img src={image2} alt="logo2" />
          <img src={image3} alt="logo3" />
          <img src={image4} alt="logo4" />
          <img src={image5} alt="logo5" />
          <img src={image6} alt="logo6" />
          <img src={image7} alt="logo7" />
        </div>
      </div>
      <div
        style={{
          width: "1440px",
          height: "416px",
           }}
          className="flex flex-col gap-4">
      
          <div
          style={{
            width: "1440px",
            height: "120px",

          }}
          className="flex gap-2 flex-col justify-center items-center" >
        
          <div
            style={{
              width: "542px",
              height: "88px",
              textAlign: "center",
            }}
          >
            <h2 className="font-semibold text-4xl ">
              Manage your entire community in a single system
            </h2>
          </div>
          <div
            style={{
              width: "1440px",
              height: "24px",
              textAlign: "center",
            }}
          >
            <p className="text-base font-normal">
              Who is Nextcent suitable for?
            </p>
          </div>
        </div>
         <div
          style={{
            width: "1440px",
            height: "280px",
            padding: "0px 144px 0px 144px",
            marginTop:'10px',
          }}
          className="flex flex-rows gap-8 justify-center item-center">
        

         {/* icon1 */}
          <div
            style={{
              width: "299px",
              height: "260px",
              padding: "24px, 32px, 24px, 32px",
             
              boxShadow: "0px 2px 4px rgba(171, 190, 209, 0.2)",
            }}
            className="flex flex-col justify-center items-center gap-2 text-center">
          
            <div
              style={{
                width: "267px",
                height: "144px",
              
              }}
              className="flex flex-col justify-center items-center gap-4 text-center"
            >
              <img
                style={{
                  width: "65px",
                  height: "56px",
                }}
                src={icon1}
                alt="Icon"
              />
              <h3 className="font-semibold text-4xl">Membership Organisations</h3>
            </div>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          
          

          <div
            style={{
              width: "299px",
              height: "260px",
              padding: "24px, 32px, 24px, 32px",
             
              boxShadow: "0px 2px 4px rgba(171, 190, 209, 0.2)",
            }}
            className="flex flex-col justify-center items-center gap-2 text-center">
          
            <div
              style={{
                width: "267px",
                height: "144px",
              
              }}
              className="flex flex-col justify-center items-center gap-4 text-center"
            >
              <img
                style={{
                  width: "65px",
                  height: "56px",
                }}
                src={icon2}
                alt="Icon"
              />
              <h3 className="font-semibold text-4xl">National Associations</h3>
            </div>
            <p>
            Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* icon3 */}

          <div
            style={{
              width: "299px",
              height: "260px",
              padding: "24px, 32px, 24px, 32px",
             
              boxShadow: "0px 2px 4px rgba(171, 190, 209, 0.2)",
            }}
            className="flex flex-col justify-center items-center gap-2 text-center">
          
            <div
              style={{
                width: "267px",
                height: "144px",
              
              }}
              className="flex flex-col justify-center items-center gap-4 text-center"
            >
              <img
                style={{
                  width: "65px",
                  height: "56px",
                }}
                src={icon3}
                alt="Icon"
              />
              <h3 className="font-semibold text-4xl">Clubs And Groups</h3>
            </div>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

        </div>

     </div>
      
    </div>
  );
};

export default Home;