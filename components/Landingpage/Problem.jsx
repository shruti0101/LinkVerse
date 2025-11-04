import React from "react";

const Problem = () => {
  return (
    <div className="container mx-auto mt-4 h-[80vh] flex items-center justify-center ">
      <video
        src="/video.mp4"   
        autoPlay
        loop
        muted
        playsInline
        className="w-[90vw] h-full object-cover rounded-md"
      />
    </div>
  );
};

export default Problem;
