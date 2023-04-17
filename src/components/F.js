import React from "react";
import curve from "../assets/images/curve.png";

const F = () => {
  return (
    <div className="relative">
      <div className="bg-profile h-96 bg-cover w-full absolute top-[-90px] -z-10">
        <div className="absolute top-96 right-0 w-32 h-28 bg-primary-gold"></div>
        {/* <img
          src={curve}
          alt=""
          className="w-full h-full object-cover absolute top-0 right-0"
        /> */}
      </div>
      <div className="relative">
        <div className="container">
          <div className="w-full h-full flex justify-center items-center absolute top-[370px]">
            <div className="bg-white rounded-tr-[70px]  py-16 px-8 w-[394px]">
              <h1>Text below image</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default F;

// import React from "react";
// import curve from "../assets/images/curve.png";

// const F = () => {
//   return (
//     <div className="relative">
//       <div className="bg-profile h-96 bg-cover w-full absolute top-[-90px] -z-10">
//         <div className="absolute top-96 right-0 w-32 h-28 bg-primary-gold"></div>
//         <div className="">
//           <div className="container"></div>
//           <div className="w-full h-full flex justify-center items-center absolute top-72">
//             <div className="rounded-r-[30px] py-8 px-12 ">
//               <h1>Text below image</h1>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div>
//           </div>
//         </div>
//         {/* <div className="absolute top-96 right-0">
//           <img src={curve} alt="" className="w-full h-full object-cover" />
//         </div> */}
//       </div>
//       {/* <div className="">
//         <div className="container"></div>
//         <div className="w-full h-full flex justify-center items-center absolute top-80">
//           <div className="rounded-r-[30px] py-8 px-12 ">
//             <h1>Text below image</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default F;
