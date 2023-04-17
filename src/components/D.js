import React from "react";

const D = () => {
  return (
    // <div className="bg-image h-96">
    //   <div className="container">
    //     <p>hhhh</p>
    //   </div>
    // </div>
    <div className="bg-image h-96">
      <div className="relative">
        <div className="container"></div>
        <div className="absolute top-[500px] left-0 w-full h-full flex justify-center items-center flex-col">
          <h1>Text below image</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default D;
