import React from 'react'
import im1 from "../Image/IM1.png"
import two from "../Image/2.png"
import four from "../Image/4.png"
import one from "../Image/1.png";
import three from "../Image/3.png"
import pana from "../Image/pana.png"
import nine from "../Image/image 9.png"
import logo1 from "../Image/Logo1.png"
import logo2 from "../Image/Logo2.png"
import logo4 from "../Image/Logo4.png"
import image5 from "../Image/Logo (5).png"
import image6 from "../Image/Logo (6).png"
import image3 from "../Image/Logo (3).png"
import image4 from "../Image/Logo (4).png"
import frame from "../Image/Frame 15.png"

const Body = () => {
  return (
    <div style={{ width: "1440px", height: "2242px"}}
    className="flex flex-col gap-10 mx-auto ">
      
      <div 
        style={{
          width: "1440px",
          height: "433px",
          padding: "96px 144px 96px 144px",
          display: "flex",
        }}>
        <div className='justify-center' style={{ marginRight: "144px", width: "441.53px", height: "328.99px"}}>
          <img  src={im1} alt="frame" />
          </div>
        <div
          style={{ width: "661px", height: "268px" }}
          className="flex flex-col gap-8 justify-center">
        
          <div style={{ width: "657px", height: "192px" }}>
            <h1 className="font-semibold text-4xl">
            The unseen of spending three <br/>years at Pixelgrade <br />
              </h1>
          </div>
          <div className="text-base font-normal">
          
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
             Sed accumsan quam vitae est varius fringilla. 
            Pellentesque placerat vestibulum lorem sed <br/>porta.
             Nullam mattis tristique iaculis. 
            Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
          </div>
          <button
            className="bg-[#4CAF4F] rounded text-white"
            style={{
              width: "151px",
              height: "52px",
              padding: "14px 32px 14px 32px",
            }}
          >
            Learn More
           </button>
           </div>
        </div>
      
      <div className="bg-[#F5F7FA] h-[288px] w-[1440px]"
        style={{
          padding: "64px 144px 64px 144px",
          display: "flex",
          justifyContent:"space-between",
          
        }} >

         
        <div
          style={{ width: "540px", height: "120px" }}
          className="flex flex-col gap-8 ">
        
          <div style={{ width: "408px", height: "88px" }}>
          <h1 className="font-semibold text-[36px]">
          Helping a local<br />
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>
          </div>
          <div className="text-base font-normal">
          
            <p>
            We reached here with our hard work and dedication
            </p>
          </div>
          
        </div>
        <div className='flex flex-wrap gap-4 ' style={{ width: "540px", height: "160px",}}>
    <img src={two} alt="image1" className="w-[255px] h-[60px]"  />
    <img src={one} alt="image2" className="w-56 h-[60px]"  />
    <img src={three} alt="image3" className="w-56 h-[60px]"  />
    <img src={four} alt="image4" className="w-56 h-[60px]" />
    </div>
      </div>
     

      <div 
        style={{
          width: "1440px",
          height: "433.4px",
          padding: "96px 144px 96px 144px",
          display: "flex",
        }}>
        <div className='justify-center' style={{ marginRight: "144px", width: "441.53px", height: "433.4px"}}>
          <img  src={pana} alt="frame" />
          </div>
        <div
          style={{ width: "661px", height: "268px" }}
          className="flex flex-col gap-8 justify-center">
        
          <div style={{ width: "657px", height: "192px" }}>
            <h1 className="font-semibold text-4xl">
            How to design your site footer like <br/> we did
              </h1>
          </div>
          <div className="text-base font-normal">
          
            <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
          </div>
          <button
            className="bg-[#4CAF4F] rounded text-white"
            style={{
              width: "151px",
              height: "52px",
              padding: "14px 32px 14px 32px",
            }}
          >
            Learn More
           </button>
           </div>
        </div>



<div className='flex bg-[#F5F7FA] pt-5' style={{gap:"78px"}} >
    <img src={nine} alt="tesla" style={{marginLeft:"144px"}} />
  <div className='text-left text-base font-normal'>
      Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br/> 
      tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br/>
      enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br/>
      mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br/>
      eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br/>
      vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br/>
      id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
   
    <p className='mt-8 text-green-500 '>Tim Smith</p>
    <p className='text-base font-normal pt-4'>British Dragon Boat Racing Association</p>
    
    <div
          className="inner-second flex  gap-10"
          style={{
            marginTop:"30px",
            width: "748px",
            height: "48px",
            alignItems: "center",
          }}
        >
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo2" />
          <img src={image3} alt="logo3" />
          <img src={image4} alt="logo4" />
          <img src={image5} alt="logo5" />
          <img src={image6} alt="logo6" />
          <span className='text-green-500 flex justify-center items-center gap-2'>Meet all customers <span class="material-symbols-outlined  ">arrow_right_alt</span></span>
          
        </div>
      </div>
  </div>
      
  <div
        style={{
          width: "1440px",
          height: "506px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "1110px",
            height: "124px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "1110px",
              height: "44px",
              fontSize: "36px",
              fontWeight: 600,
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Caring is the new marketing</h2>
          </div>
          <div
            style={{
              width: "628px",
              height: "72px",
              fontSize: "16px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            <p>
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
        </div>
        
        <div style={{width:"95%" ,height:"366px", margin:"auto"}}>
        <img src={frame} alt="" />
    </div>
      </div>

    
    
    </div>
  )
}

export default Body