import React from "react";

const BottomBar = ({ callback }) => {
  return (
    <div className="w-screen h-12 bg-black fixed bottom-0">
      <div className="w-full h-full flex justify-evenly items-center">
        <img
          src="https://img.icons8.com/material-outlined/48/FFFFFF/filled-chat.png"
          alt="Camera"
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            callback("home");
          }}
        />
        <img
          src="https://img.icons8.com/material-outlined/48/FFFFFF/camera--v2.png"
          alt="Camera"
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            callback("camera");
          }}
        />
        <img
          src="https://img.icons8.com/material-outlined/48/FFFFFF/user--v1.png"
          alt="Camera"
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            callback("profile");
          }}
        />
      </div>
    </div>
  );
};

export default BottomBar;
