import React, { useState } from "react";

const OnBoardingScreen = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="p-4 bg-[#FFFC00] h-screen w-screen flex flex-col justify-start items-start">
      <p className=" font-bold text-2xl mx-auto">Lets get you on board!</p>
      <div className="w-full mt-4">
        {!image && (
          <div
            className="h-24 w-24 rounded-full bg-white mx-auto flex flex-col justify-center items-center cursor-pointer"
            onClick={() => {
              document.getElementById("image").click();
            }}
          >
            <img
              src="https://img.icons8.com/material-outlined/48/000000/camera--v2.png"
              alt="Camera"
              className="h-8 w-8"
            />
            <input
              type="file"
              id="image"
              accept="image/jpeg, image/png"
              className=" hidden"
              onChange={handleChange}
            ></input>
          </div>
        )}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="DP"
            className="h-24 w-24 mx-auto rounded-full object-cover"
          />
        )}
        <div className="mb-2">
          <p className=" font-semibold text-lg">Name</p>
          <input type="text" className="w-full rounded-lg p-2" />
        </div>
        <div className="mb-2">
          <p className=" font-semibold text-lg">Username</p>
          <input type="text" className="w-full rounded-lg p-2" />
        </div>
        <div className="mb-2">
          <p className=" font-semibold text-lg">Birthday</p>
          <input type="date" className="w-full rounded-lg p-2" />
        </div>
        <div className="mb-2">
          <p className=" font-semibold text-lg">Email</p>
          <input type="text" className="w-full rounded-lg p-2" />
        </div>
        <div className="mt-6 ">
          <div
            type="text"
            className="w-full h-12 rounded-lg p-2 bg-black text-white flex justify-center items-center font-bold"
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingScreen;
